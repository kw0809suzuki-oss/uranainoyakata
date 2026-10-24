import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import styles from "./_index.module.css";
import {postTarotReading} from "../endpoints/tarot-reading_POST.schema";

const majors = [
["愚者","自由・始まり","無計画・迷走","✦"],["魔術師","創造・行動","空回り・未熟","✧"],["女教皇","直感・静けさ","閉塞・秘密","☾"],["女帝","豊かさ・育成","依存・停滞","❀"],["皇帝","秩序・責任","支配・頑固","♜"],["法王","伝統・導き","同調圧力・硬直","✝"],["恋人","選択・結びつき","不一致・迷い","♡"],["戦車","前進・意志","暴走・失速","♞"],["力","勇気・忍耐","弱気・無理","♌"],["隠者","内省・探究","孤立・閉鎖","☼"],["運命の輪","転機・循環","停滞・抵抗","◎"],["正義","公平・均衡","偏り・不誠実","⚖"],["吊るされた男","視点転換・受容","犠牲・膠着","⌛"],["死神","終わりと再生","未練・抵抗","♧"],["節制","調和・調整","不均衡・過剰","⚗"],["悪魔","執着・誘惑","解放・自覚","♠"],["塔","崩壊・覚醒","恐れ・先延ばし","♜"],["星","希望・回復","失望・疑念","☆"],["月","曖昧・潜在","不安・混乱","☽"],["太陽","喜び・明快","過信・陰り","☀"],["審判","目覚め・再評価","後悔・停滞","♬"],["世界","完成・統合","未完・足踏み","◉"]
];
const ranks=["エース","2","3","4","5","6","7","8","9","10","ペイジ","ナイト","クイーン","キング"];
const suits=[["ワンド","情熱・行動","消耗・衝突","♣"],["カップ","愛情・感情","すれ違い・感情の混乱","♡"],["ソード","思考・決断","迷い・対立","⚔"],["ペンタクル","仕事・実り","損失・停滞","◇"]];
type Card={id:string;name:string;up:string;down:string;symbol:string;major:boolean;art?:string};
const rankMeanings=[
["始動","方向を失った始動"],["選択・均衡","迷い・硬直"],["拡張・協力","連携不全"],["安定・土台","停滞・固定化"],["葛藤・変化","消耗・衝突"],["調整・移行","執着・足踏み"],["探究・評価","孤立・警戒"],["動き・実践","焦り・制御不足"],["熟成・到達","過剰・満たされなさ"],["一区切り・完成","重圧・行き詰まり"],["知らせ・学び","未熟な伝達"],["進出・追求","衝動と空回り"],["受容・成熟","内面の偏り"],["統率・責任","支配・頑固さ"]
];
const defaultDeck:Card[]=[
...majors.map((m,i)=>({id:"m"+i,name:m[0],up:m[1],down:m[2],symbol:m[3],major:true})),
...suits.flatMap((s,si)=>ranks.map((rank,ri)=>({id:"s"+si+"-"+ri,name:s[0]+"の"+rank,up:s[1]+"における"+rankMeanings[ri][0],down:s[2]+"における"+rankMeanings[ri][1],symbol:s[3],major:false})))
];
const positions=[
["現状・核心","問いの中心で、いま実際に働いている力。カードの良し悪しより現在の状態として読む。"],
["交差・障害","1枚目を横切っている課題、抵抗、または支援。明るいカードでもここでは解決を難しくする側面を読む。"],
["基盤・潜在","表面からは見えにくい土台や無意識の前提。いまの状況を下から支えている力。"],
["過去・去りゆくもの","現在へ続く過去の影響。まだ残っているものと、すでに手放しつつあるものを区別する。"],
["目標・顕在意識","意識して目指す方向、頭で思い描いている理想や到達点。実現した未来の確定ではない。"],
["近い未来","現在の状況が変わらなければ、次に現れやすい動き。最終結果とは区別する。"],
["自分の立場","この問題に自分がどう関わり、どう振る舞うか。自分で動かせる範囲を映す。"],
["周囲・環境","他者や外部条件からの働きかけ。自分の意思だけでは変えられない部分。"],
["願望と恐れ","望むことと、同じ対象を失う・得られないことへの恐れ。単純な吉凶に分けない。"],
["結末・方向性","これまでの九枚が示す条件のもとで進みやすい方向。運命の確定ではなく変化し得る見通し。"]
];
function essence(d:Draw){return d.reversed?d.card.down:d.card.up;}
function contextLine(i:number,draws:Draw[]){
 const here=draws[i];if(!here)return "";
 const x=essence(here);const pair=(n:number)=>draws[n]?draws[n].card.name+"（"+essence(draws[n])+"）":"別のカード";
 switch(i){
 case 0:return "今の問いの核にあるのは「"+x+"」。これは状況の起点であって、最終的な答えではありません。交差する2枚目の"+pair(1)+"を同時に見ると、何がこの状態を複雑にしているかが見えてきます。";
 case 1:return "中央の"+pair(0)+"に「"+x+"」が重なっています。ここでは良い象徴も単純な幸運とは読まず、前進を妨げるもの、または受け取り切れていない支えとして検討します。横向きの配置自体は逆位置を意味しません。";
 case 2:return "表面の"+pair(0)+"を下から支える「"+x+"」。意識している目標である5枚目の"+pair(4)+"と比較し、深い前提と表向きの望みが同じ方向を向いているかを探ります。";
 case 3:return "「"+x+"」は、いまに続く背景、あるいは去りつつあるものとして現れています。中央の"+pair(0)+"との連続性と、近い未来の"+pair(5)+"との変化を読み分けます。";
 case 4:return "「"+x+"」は意識的に目指している方向の象徴です。土台にある"+pair(2)+"と結末の"+pair(9)+"を照らし合わせると、理想と現状の足場にずれがないか考えられます。";
 case 5:return "「"+x+"」はすぐ先に向かう動きとして読みます。過去の"+pair(3)+"からどのように移り変わるかを見てください。10枚目の結末と同義ではありません。";
 case 6:return "自分が選べる姿勢として「"+x+"」が現れています。周囲を表す"+pair(7)+"に対して、自分が働きかけられることと、変えられない条件を分ける位置です。";
 case 7:return "「"+x+"」は周りの人物や状況がもたらす力として読みます。自分の立場である"+pair(6)+"と比較し、内側の意志だけでは動かせない影響を見極めます。";
 case 8:return "「"+x+"」は願いにも恐れにもなり得ます。何を得たいのか、それを手に入れることで逆に何が変わってしまうのか、結末の"+pair(9)+"と見比べてください。";
 default:return "この流れの先に「"+x+"」という傾向が現れています。目標の"+pair(4)+"と一致するか、願望と恐れの"+pair(8)+"が読みを偏らせていないかを確かめます。状況が変われば結末も変わり得ます。";
 }
}

type Draw={card:Card;reversed:boolean};
const STORAGE="my-celtic-tarot-custom-v1";
export default function Home(){
 const [custom,setCustom]=useState<Record<string,Partial<Card>>>({});
 const [theme,setTheme]=useState("月夜の幻想");
 const [question,setQuestion]=useState("");
 const [draws,setDraws]=useState<Draw[]>([]);
 const [selected,setSelected]=useState(0);
 const [editing,setEditing]=useState<number|null>(null);
 const [draft,setDraft]=useState({name:"",up:"",down:"",art:""});
 const [tab,setTab]=useState<"reading"|"deck">("reading");
 const [started,setStarted]=useState(false);
 const [aiReading,setAiReading]=useState("");
 const [aiLoading,setAiLoading]=useState(false);
 const [aiError,setAiError]=useState("");
 useEffect(()=>{try{const v=localStorage.getItem(STORAGE);if(v){const p=JSON.parse(v);setCustom(p.custom||{});setTheme(p.theme||"月夜の幻想");}}catch{}},[]);
 const save=(next:Record<string,Partial<Card>>)=>{setCustom(next);try{localStorage.setItem(STORAGE,JSON.stringify({custom:next,theme}));}catch{}};
 const setWorld=(s:string)=>{setTheme(s);try{localStorage.setItem(STORAGE,JSON.stringify({custom,theme:s}));}catch{}};
 const deck=defaultDeck.map(c=>({...c,...(custom[c.id]||{})}));
 function draw(){const a=[...deck];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}setDraws(a.slice(0,10).map(card=>({card,reversed:Math.random()<.5})));setSelected(0);setStarted(true);setTab("reading");setAiReading("");setAiError("");}
 function edit(i:number){const c=deck[i];setEditing(i);setDraft({name:c.name,up:c.up,down:c.down,art:c.art||""});}
 function commit(){if(editing===null)return;const id=deck[editing].id;save({...custom,[id]:{name:draft.name||defaultDeck[editing].name,up:draft.up||defaultDeck[editing].up,down:draft.down||defaultDeck[editing].down,art:draft.art}});setEditing(null);}
 async function interpret(){if(draws.length!==10)return;setAiLoading(true);setAiReading("");setAiError("");try{const result=await postTarotReading({question,cards:draws.map((d,i)=>({position:i+1,role:positions[i][0],name:d.card.name,meaning:essence(d),reversed:d.reversed}))});setAiReading(result.reading)}catch(e:any){setAiError(e?.message||"AI読み解きに失敗しました")}finally{setAiLoading(false)}}
 const active=draws[selected];
 return <main className={styles.page}><div className={styles.stars}>✦ · ☾ · ✧</div><header className={styles.header}><div className={styles.brand}>✧ MY TAROT <span>ATELIER</span></div><a href="/dictionary" className={styles.dictionaryLink}>辞典を読む</a><div className={styles.headerRight}><span>78 CARDS · CELTIC CROSS</span></div></header><section className={styles.hero}><p className={styles.eyebrow}>YOUR OWN SYMBOLS, YOUR OWN STORY</p><h1>私だけの<span>タロット</span></h1><p>10枚のカードが映す、いまの物語。<br/>大アルカナは、一枚ずつあなたの手で。</p></section>
 <div className={styles.tabs}><Button variant={tab==="reading"?"primary":"ghost"} onClick={()=>setTab("reading")}>✦ ケルト十字で占う</Button><Button variant={tab==="deck"?"primary":"ghost"} onClick={()=>setTab("deck")}>◇ カードを作る</Button></div>
 {tab==="reading"?<section className={styles.layout}><div className={styles.panel}><div className={styles.sectionTitle}><span>01</span><h2>カードに問いかける</h2></div><label className={styles.label}>今、知りたいこと</label><Input value={question} onChange={e=>setQuestion(e.target.value)} placeholder="例：これからの進み方について" /><p className={styles.hint}>問いがなくても占えます。カードの選択と正逆はランダムです。</p><Button className={styles.drawButton} onClick={draw}>{started?"もう一度10枚を引く":"10枚のカードを引く"}　✧</Button><div className={styles.divider}></div><div className={styles.sectionTitle}><span>02</span><h2>ケルト十字の展開</h2></div>
 {!started?<div className={styles.empty}><div className={styles.emptyIcon}>☾</div><b>カードはまだ伏せられています</b><p>問いを胸に、10枚のカードを引いてください。</p></div>:<><p className={styles.hint}>中央の1と横向きの2が交差し、3〜6が周囲、7〜10が右の縦列です。各カードを押して位置と他のカードとの関係を読めます。</p><div className={styles.spreadBoard}><div className={styles.spreadCanvas}>{draws.map((d,i)=><button key={i} className={styles.spreadCard+" "+styles["p"+(i+1)]+" "+(selected===i?styles.active:"")} onClick={()=>setSelected(i)} aria-label={(i+1)+"番 "+positions[i][0]+" "+d.card.name}><span className={styles.cardNo}>{i+1}</span><span className={styles.spreadSymbol}>{d.card.symbol}</span><b>{d.card.name}</b><small>{d.reversed?"逆位置":"正位置"}</small></button>)}</div></div><div className={styles.aiPanel}><h3>十枚を一つの物語として読む</h3><p>位置だけでなく、中央の交差・過去と未来・潜在と目標・自分と周囲・結末の関係を合わせて読み解きます。</p><Button onClick={interpret} disabled={aiLoading}>{aiLoading?"10枚の関係を読み解いています…":"AIで全体を読み解く"}</Button>{aiError&&<p className={styles.aiError}>{aiError}</p>}{aiReading&&<article className={styles.aiResult}>{aiReading}</article>}</div></>}
 </div><aside className={styles.side}><div className={styles.sectionTitle}><span>✧</span><h2>リーディング</h2></div>{active?<><div className={styles.cardArt}><span>{active.card.symbol}</span><strong>{active.card.name}</strong><small>{active.reversed?"REVERSED":"UPRIGHT"}</small></div><p className={styles.position}>第{selected+1}の位置 · {positions[selected][0]}</p><h3>{active.card.name} — {active.reversed?"逆位置":"正位置"}</h3><p className={styles.meaning}>{active.reversed?active.card.down:active.card.up}</p><p className={styles.positionGuide}>{positions[selected][1]}</p><p className={styles.reading}>{contextLine(selected,draws)}</p><p className={styles.questionNote}>{question?"今回の問い：「"+question+"」に照らして読み直すことができます。":"問いを設定すると、同じ展開をその問いに照らして考えられます。"}</p><p className={styles.disclaimer}>象徴に基づく解釈例であり、未来の出来事を確定するものではありません。</p></>:<><div className={styles.cardArt}><span>✺</span><strong>THE UNKNOWN</strong><small>YOUR STORY AWAITS</small></div><p className={styles.reading}>10枚を引くと、カードごとの意味とケルト十字の位置をここで確認できます。</p></>}</aside></section>:
 <section className={styles.deckSection}><div className={styles.sectionTitle}><span>✧</span><h2>大アルカナを作る</h2></div><p className={styles.hint}>22枚を一枚ずつ編集できます。編集内容はこの端末のブラウザに保存されます。残り56枚は標準デッキを使用します。</p><label className={styles.label}>デッキの世界観（将来のAI生成用）</label><Input value={theme} onChange={e=>setWorld(e.target.value)} placeholder="例：星と海の幻想世界" /><p className={styles.hint}>現在は世界観に基づくAI画像の自動生成には未対応です。</p><div className={styles.deckGrid}>{deck.slice(0,22).map((c,i)=><button className={styles.deckCard} key={c.id} onClick={()=>edit(i)}>{c.art?<img src={c.art} alt="" onError={e=>{e.currentTarget.style.display="none"}}/>:<span>{c.symbol}</span>}<small>{String(i).padStart(2,"0")}</small><b>{c.name}</b><em>{custom[c.id]?"編集済み":"編集する"}</em></button>)}</div></section>}
 {editing!==null&&<div className={styles.overlay} onClick={()=>setEditing(null)}><div className={styles.modal} onClick={e=>e.stopPropagation()}><h2>{defaultDeck[editing].name} を編集</h2><p className={styles.hint}>元のカードの役割を保ちながら、自分の絵柄や解釈に変えられます。</p><label className={styles.label}>カード名</label><Input value={draft.name} onChange={e=>setDraft({...draft,name:e.target.value})}/><label className={styles.label}>正位置の意味</label><Input value={draft.up} onChange={e=>setDraft({...draft,up:e.target.value})}/><label className={styles.label}>逆位置の意味</label><Input value={draft.down} onChange={e=>setDraft({...draft,down:e.target.value})}/><label className={styles.label}>画像URL（任意）</label><Input value={draft.art} onChange={e=>setDraft({...draft,art:e.target.value})} placeholder="https://..."/><div className={styles.modalActions}><Button variant="secondary" onClick={()=>setEditing(null)}>戻る</Button><Button onClick={commit}>このカードを保存</Button></div></div></div>}
 <footer>MY TAROT ATELIER · A PERSONAL CELTIC CROSS EXPERIENCE</footer></main>
}