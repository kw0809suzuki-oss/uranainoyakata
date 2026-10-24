import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import superjson from 'superjson';

const input = {question:'これからの進み方',cards:Array.from({length:10},(_,i)=>({position:i+1,role:`位置${i+1}`,name:`カード${i+1}`,meaning:'象徴',reversed:i%2===0}))};
const keys=['TAROT_AI_API_KEY','TAROT_AI_BASE_URL','TAROT_AI_MODEL','TAROT_AI_PROVIDER','TAROT_AI_TIMEOUT_MS'];
const initial=Object.fromEntries(keys.map(k=>[k,process.env[k]]));
afterEach(()=>{for(const k of keys){if(initial[k]===undefined)delete process.env[k];else process.env[k]=initial[k];}});
function request(data:unknown=input){return new Request('http://localhost/_api/tarot-reading',{method:'POST',body:superjson.stringify(data)});}
async function handle(req:Request){return (await import('../endpoints/tarot-reading_POST')).handle(req);}
async function upstream(t:any,respond:(req:any,res:any)=>void){
 const server=createServer(respond);await new Promise<void>(resolve=>server.listen(0,'127.0.0.1',resolve));
 t.after(()=>new Promise<void>(resolve=>{server.closeAllConnections();server.close(()=>resolve());}));
 const address=server.address() as {port:number};process.env.TAROT_AI_BASE_URL=`http://127.0.0.1:${address.port}/v1`;process.env.TAROT_AI_API_KEY='test-only-key';process.env.TAROT_AI_MODEL='test-model';process.env.TAROT_AI_PROVIDER='openai';
}

test('unconfigured AI returns actionable JSON 503 without affecting import',async()=>{
 for(const key of keys)delete process.env[key];const r=await handle(request());assert.equal(r.status,503);assert.equal(superjson.parse<any>(await r.text()).code,'AI_NOT_CONFIGURED');
});
test('malformed or invalid input is rejected before calling AI',async()=>{
 for(const data of [{...input,cards:[]},{...input,question:'x'.repeat(1001)},{...input,cards:input.cards.map(c=>({...c,position:1}))}])assert.equal((await handle(request(data))).status,400);
 assert.equal((await handle(new Request('http://localhost',{method:'POST',body:'invalid'}))).status,400);
});
test('compatible HTTP API preserves all cards, orientations, question and relational instructions',async t=>{
 await upstream(t,async(req,res)=>{
  let text='';for await(const chunk of req)text+=chunk;const body=JSON.parse(text);
  assert.equal(req.url,'/v1/chat/completions');assert.equal(req.headers.authorization,'Bearer test-only-key');assert.equal(body.model,'test-model');assert.deepEqual(JSON.parse(body.messages[1].content),input);
  for(const phrase of ['全体像','核心の交差','水面下と意識','過去から近い未来へ','自分と周囲','願望と結末','問いに持ち帰ること','1000〜1500','正逆'])assert.ok(body.messages[0].content.includes(phrase));
  res.setHeader('Content-Type','application/json');res.end(JSON.stringify({choices:[{message:{content:'十枚を統合した読み解き'}}]}));
 });
 const r=await handle(request());assert.equal(r.status,200);assert.deepEqual(superjson.parse(await r.text()),{reading:'十枚を統合した読み解き'});
});
test('missing credits retain the existing OUT_OF_CREDITS error contract',async t=>{
 await upstream(t,(_req,res)=>{res.writeHead(429,{'Content-Type':'application/json'});res.end(JSON.stringify({error:{code:'insufficient_quota',message:'secret upstream detail'}}));});
 const r=await handle(request());assert.equal(r.status,503);const data=superjson.parse<any>(await r.text());assert.equal(data.code,'OUT_OF_CREDITS');assert.ok(!data.error.includes('secret'));
});
test('authentication failure is sanitized',async t=>{
 await upstream(t,(_req,res)=>{res.writeHead(401);res.end('secret test-only-key');});
 const r=await handle(request());assert.equal(r.status,502);assert.ok(!(await r.text()).includes('test-only-key'));
});
test('empty or malformed upstream output is a 502',async t=>{
 await upstream(t,(_req,res)=>{res.end(JSON.stringify({choices:[{message:{content:' '}}]}));});assert.equal((await handle(request())).status,502);
});
test('timeout returns a recoverable 504',async t=>{
 await upstream(t,()=>{});process.env.TAROT_AI_TIMEOUT_MS='20';assert.equal((await handle(request())).status,504);
});
