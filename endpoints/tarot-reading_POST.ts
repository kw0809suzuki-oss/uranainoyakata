import {flootAi} from "@floot/ai";
import { FlootAiOutOfCreditsError } from "@floot/ai";
import {schema,OutputType} from "./tarot-reading_POST.schema";
import superjson from "superjson";
export async function handle(request:Request){
 try{
  const input=schema.parse(superjson.parse(await request.text()));
  const guide="タロット占い師として、ケルト十字法の10枚を位置に即して関係的に読み解く。流儀は1現状 2交差する力（横向きだが正逆は独立）3基盤/潜在 4過去 5意識的目標 6近い未来 7自分 8周囲 9願望/恐れ 10結末。単独のカード意味を10件列挙するのではなく、1×2の中心対立、3×5の潜在と意識、4→1→6の流れ、7×8の自分と周囲、5×10の望みと結末、9×10の期待と見通しを具体的なカード名を挙げて統合する。カードの正逆は与えられた値を厳守。質問の情報が足りなければ推測で個人事情を断定しない。必ず『全体像』『核心の交差』『水面下と意識』『過去から近い未来へ』『自分と周囲』『願望と結末』『問いに持ち帰ること』の見出しで、丁寧だが冗長にならない日本語1000〜1500文字程度。未来を予言・確定せず、象徴的な内省の補助として述べる。";
  const r=await flootAi.chat({model:"gpt-6-luna",reasoning:{effort:"medium"},instructions:guide,input:JSON.stringify(input),max_output_tokens:2200});
  const reading=(r.output_text||r.output?.filter((x:any)=>x.type==="message").flatMap((x:any)=>x.content||[]).filter((x:any)=>x.type==="output_text").map((x:any)=>x.text).join("\n")||"").trim();
  if(!reading)return new Response(superjson.stringify({error:"読み解きが空でした"}),{status:502});
  return new Response(superjson.stringify({reading} satisfies OutputType),{headers:{"Content-Type":"application/json"}});
 }catch(e:any){
  if(e instanceof FlootAiOutOfCreditsError)return new Response(superjson.stringify({error:"AIクレジットが不足しています",code:"OUT_OF_CREDITS"}),{status:503});
  return new Response(superjson.stringify({error:e?.message||"読み解きに失敗しました"}),{status:500});
 }
}