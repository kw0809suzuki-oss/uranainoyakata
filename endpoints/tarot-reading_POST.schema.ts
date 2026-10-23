import { z } from "zod";
import superjson from "superjson";
export const schema = z.object({
 question:z.string().max(1000),
 cards:z.array(z.object({position:z.number().int().min(1).max(10),role:z.string(),name:z.string(),meaning:z.string(),reversed:z.boolean()})).length(10)
});
export type InputType=z.infer<typeof schema>;
export type OutputType={reading:string};
export const postTarotReading=async(body:InputType):Promise<OutputType>=>{
 const r=await fetch("/_api/tarot-reading",{method:"POST",headers:{"Content-Type":"application/json"},body:superjson.stringify(schema.parse(body))});
 const data=superjson.parse<any>(await r.text());
 if(!r.ok){const e=new Error(data.error||"読み解きができませんでした");(e as any).code=data.code;throw e;}
 return data as OutputType;
};