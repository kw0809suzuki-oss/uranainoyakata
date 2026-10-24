import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { cardSlug, fieldLabels, filterDictionary, parseDictionary, sourceLink, statusLabel, suitLabels, type DictionaryCard, type MeaningField } from '../helpers/dictionary';
import styles from './Dictionary.module.css';

const absent = (value: unknown, fallback='未確認（null）') => value === null || value === undefined ? fallback : String(value);
function Notes({ items }: { items: string[] }) { return items.length ? <ul className={styles.notes}>{items.map((item,i)=><li key={i}>{item}</li>)}</ul> : <p className={styles.muted}>注記は未登録です。</p>; }
function Meaning({ card, field }: { card: DictionaryCard; field: MeaningField }) {
  const raw=card.source.fields[field],tr=card.translation.fields[field];
  return <section className={styles.section} aria-labelledby={`heading-${field}`} data-testid={`meaning-${field}`}>
    <header className={styles.sectionHead}><h2 id={`heading-${field}`}>{fieldLabels[field]}</h2><span>{statusLabel(raw.availability)}</span></header>
    <p className={styles.meta}>参照箇所：{absent(raw.section,'該当する節の記録なし（null）')} · <code>{raw.json_pointer}</code></p>
    <div className={styles.comparison}>
      <div><h3>英語原文・全文</h3><p className={styles.fullText} lang="en" data-testid={`${field}-en`}>{absent(raw.text_en,raw.availability==='not_applicable'?'原文の記載なし／非該当（null）':'原文は未確認（null）')}</p></div>
      <div><h3>忠実訳（暫定）</h3><p className={styles.fullText} data-testid={`${field}-ja`}>{absent(tr.text_ja,tr.status==='not_applicable'?'訳文なし／非該当（null）':'訳文は未確認（null）')}</p><p className={styles.meta}>翻訳状態：{statusLabel(tr.status)}</p></div>
    </div>
    <Notes items={tr.notes}/>
    <h3>英日対照・根拠単位</h3>
    {tr.units.length ? <div className={styles.unitList}>{tr.units.map(u=><div key={u.id} id={`unit-${u.id.replace(':','-')}`} className={styles.unit}><code>{u.id}</code><p lang="en">{u.text_en}</p><p>{u.text_ja}</p></div>)}</div> : <p className={styles.muted}>対照単位なし。存在しない意味は補っていません。</p>}
  </section>;
}
function Candidate({ card, kind, title }: { card: DictionaryCard; kind:'central'|'upright'|'reversed'|'application'; title:string }) {
  const value=card.interpretation[kind];const [params]=useSearchParams();
  return <section className={styles.candidate} data-testid={`candidate-${kind}`}><h3>{title}</h3><p>{absent(value.text_ja)}</p><p className={styles.meta}>{statusLabel(value.kind)} · {statusLabel(value.status)}</p>
    <div className={styles.evidence}><span>根拠：</span>{value.evidence_units.length ? value.evidence_units.map(id=>{
      const next=new URLSearchParams(params);next.set('position',id.startsWith('reversed')||id.startsWith('additional_reversed')?'reversed':'upright');
      return <Link key={id} to={`?${next}#unit-${id.replace(':','-')}`}>{id}</Link>;
    }) : <span>原典の根拠単位なし（編集上の問いかけ）</span>}</div>
  </section>;
}
function CardDetail({ card }: {card:DictionaryCard}) {
  const [params,setParams]=useSearchParams();const location=useLocation();
  const position=params.get('position')==='reversed'?'reversed':'upright';
  const otherFields: MeaningField[]=position==='upright'?['upright','additional_upright']:['reversed','additional_reversed'];
  useEffect(()=>{if(location.hash)document.getElementById(location.hash.slice(1))?.scrollIntoView({block:'center'});},[location.hash,position,card.card_id]);
  const verificationLabels: Record<string,string>={dataset_alignment:'原典データとの機械照合',translation_review:'翻訳の自己確認',independent_human_review:'人間による独立校閲',historical_original_collation:'歴史資料・画像との照合',publication_status:'公開状態',reviewed_on:'記録された確認日',reviewer:'確認者'};
  return <>
    <Link to={`/dictionary?${params}`} className={styles.back}>← 一覧へ戻る</Link>
    <header className={styles.cardHeader}><p className={styles.eyebrow}>{card.arcana==='major'?'大アルカナ':`小アルカナ · ${suitLabels[card.suit!]}`} · {card.card_id}</p><h1>{card.name_ja}</h1><p lang="en">{card.name_en}</p><p className={styles.meta}>辞典 {card.dictionary_version} · 構造 {card.schema_version}</p></header>
    <div className={styles.notice}>原典は保持する。翻訳は検証する。解釈は閉じない。<br/>要約候補は意味の全体ではありません。全文・別説・条件・未解決事項を併せて参照してください。</div>
    <section className={styles.section}><h2>原典と参照情報</h2><p>{card.source.bibliography}</p>
      <dl className={styles.metadata}><dt>出典ID</dt><dd>{card.source.source_id}</dd><dt>データセット</dt><dd>{card.source.dataset_id} v{card.source.dataset_version}</dd><dt>原典レコード</dt><dd>JSONL {card.source.line_1based}行 · {card.source.record_selector.card_id}</dd><dt>歴史資料の個別ページ</dt><dd>{absent(card.source.historical_page_exact)}</dd><dt>ページ照合</dt><dd>{statusLabel(card.source.historical_page_check)}</dd></dl>
      <div className={styles.links}><a href={sourceLink(`${card.source.file}#L${card.source.line_1based}`,card.source.local_commit)} target="_blank" rel="noreferrer">固定版の原典レコード ↗</a><a href={sourceLink(card.source.registry_path,card.source.local_commit)} target="_blank" rel="noreferrer">出典レジストリ・参照範囲 ↗</a></div>
      <p className={styles.meta}>原典コミット：{card.source.upstream_commit}<br/>保存コミット：{card.source.local_commit}</p><h3>今回の翻訳対象から除外された情報</h3><Notes items={card.source.excluded_fields}/>
    </section>
    <div className={styles.positionTabs} role="tablist" aria-label="正位置・逆位置">
      {(['upright','reversed'] as const).map(p=><button key={p} type="button" role="tab" aria-selected={position===p} aria-controls="position-content" id={`tab-${p}`} tabIndex={position===p?0:-1} onKeyDown={e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?'upright':e.key==='End'?'reversed':p==='upright'?'reversed':'upright';setParams(prev=>{const q=new URLSearchParams(prev);q.set('position',next);return q;});document.getElementById(`tab-${next}`)?.focus();}}} onClick={()=>setParams(prev=>{const next=new URLSearchParams(prev);next.set('position',p);return next;})}>{p==='upright'?'正位置':'逆位置'}</button>)}
    </div>
    <div id="position-content" role="tabpanel" aria-labelledby={`tab-${position}`}>{otherFields.map(field=><Meaning key={field} card={card} field={field}/>)}</div>
    <section className={styles.section}><h2>編集上の解釈候補</h2><p>以下は翻訳本文とは別の層です。抽出されなかった語句も、上の原文全文・暫定訳・対照表から参照できます。正位置と逆位置を反対語へ変換していません。</p>
      <Candidate card={card} kind="central" title="今回の要約候補（唯一の意味ではありません）"/>
      <Candidate card={card} kind={position} title={`${position==='upright'?'正位置':'逆位置'}の解釈候補`}/>
      <Candidate card={card} kind="application" title="原典にない編集上の補足・問いかけ"/>
      <h3>補足の境界</h3><p>{absent(card.interpretation.supplement_boundary)}</p><h3>候補の理由</h3><p>{absent(card.interpretation.rationale_ja)}</p>
    </section>
    <section className={styles.section}><h2>翻訳の曖昧さ・相反する解釈・条件</h2><p className={styles.meta}>{card.translation.method}</p><p>人物・配置による条件や別説は、原文・忠実訳・対照表の全文に保持されています。独立した人物条件・矛盾の一覧フィールドは未登録です。以下は正逆・追加欄すべての既存注記です。</p>
      {card.translation.ambiguities.length ? card.translation.ambiguities.map((note,i)=><article className={styles.annotation} key={i}><h3>{note.term_en}</h3><p className={styles.meta}>{fieldLabels[note.field]} · {statusLabel(note.status)}</p><p>{note.note_ja}</p></article>) : <p>曖昧さの注記は未登録です。曖昧さがないことの証明ではありません。</p>}
    </section>
    <section className={styles.section}><h2>未解決事項</h2>{card.unresolved.length ? card.unresolved.map(item=><article className={styles.annotation} key={item.id}><h3>{item.question_ja}</h3><p>{statusLabel(item.status)}</p><p>解決記録：{item.resolution==null?'未確認・解決記録なし（null）':typeof item.resolution==='string'?item.resolution:JSON.stringify(item.resolution)}</p></article>):<p>未解決事項の記録はありません。解決済みという意味ではありません。</p>}</section>
    <section className={styles.section}><h2>翻訳・校閲・原典照合の状態</h2><dl className={styles.metadata}>{Object.entries(verificationLabels).map(([key,label])=><React.Fragment key={key}><dt>{label}</dt><dd>{['reviewed_on','reviewer'].includes(key)?absent(card.verification[key]):statusLabel(String(card.verification[key]))}</dd></React.Fragment>)}</dl></section>
    <section className={styles.section}><h2>出典への帰属・編集範囲</h2><p>原データ：StarTarot（2026）、v{card.source.dataset_version}。</p><p><a href={card.rights.upstream_license_url} target="_blank" rel="noreferrer">{card.rights.upstream_license} ↗</a> · <a href={sourceLink('data/dictionary/ja/ATTRIBUTION.md','ed9ee30232b20310888eb41d579ce38b0b6a741d')} target="_blank" rel="noreferrer">辞典の帰属・引用情報 ↗</a></p><p>{card.rights.changes}</p><p>推薦・支持：{card.rights.endorsement?'記録あり':'原著者・提供元の推薦を意味しません'}</p></section>
    <details className={styles.section}><summary>正本JSONの全項目を見る</summary><p>表示のための抜粋ではなく、読込済みの全項目です。未知の追加フィールドもここで確認できます。</p><pre>{JSON.stringify(card,null,2)}</pre></details>
  </>;
}
export default function Dictionary() {
  const {cardId}=useParams();const [params,setParams]=useSearchParams();
  const [cards,setCards]=useState<DictionaryCard[]|null>(null),[error,setError]=useState(''),[retry,setRetry]=useState(0);
  useEffect(()=>{const controller=new AbortController();setCards(null);setError('');
    fetch('/_api/dictionary',{signal:controller.signal}).then(async response=>{if(!response.ok)throw new Error();const body=await response.json();return parseDictionary(body.cards);}).then(setCards).catch(e=>{if(e.name!=='AbortError')setError('辞典データを読み込めませんでした。接続、78枚のJSON、原典との対応を確認してください。');});
    return()=>controller.abort();
  },[retry]);
  const filters={q:params.get('q')||'',arcana:params.get('arcana')||'',suit:params.get('suit')||''};
  const filtered=cards?filterDictionary(cards,filters):[];const selected=cards?.find(c=>cardSlug(c.card_id)===cardId);
  function update(key:string,value:string){setParams(prev=>{const next=new URLSearchParams(prev);value?next.set(key,value):next.delete(key);if(key==='arcana'&&value!=='minor')next.delete('suit');if(key==='suit'&&value)next.set('arcana','minor');return next;});}
  return <main className={styles.page}><div className={styles.container}>
    <nav className={styles.nav} aria-label="サイト内"><Link to="/">✧ 占いの館</Link><Link to="/dictionary">日本語辞典</Link><Link to="/">占う</Link></nav>
    {error?<div className={styles.section} role="alert"><h1>読み込みエラー</h1><p>{error}</p><button onClick={()=>setRetry(n=>n+1)}>再読み込み</button></div>:!cards?<p role="status" className={styles.section}>78枚の辞典を読み込んでいます…</p>:cardId?selected?<CardDetail card={selected}/>:<section className={styles.section}><h1>カードが見つかりません</h1><p>指定されたIDは辞典にありません。</p><Link to="/dictionary">一覧へ戻る</Link></section>:<>
      <header className={styles.hero}><p className={styles.eyebrow}>RWS REFERENCE LIBRARY · VIEWER v0.1</p><h1>日本語タロット辞典</h1><p>原典と暫定訳を読み、解釈の幅を確かめる。</p></header>
      <p className={styles.notice}>要約候補は意味のすべてではありません。原文・訳文・編集上の解釈・未解決事項を分けて参照する、校閲前の資料です。</p>
      <section className={styles.filters} aria-label="カードを探す"><label>カード名を検索<input type="search" value={filters.q} onChange={e=>update('q',e.target.value)} placeholder="日本語・英語のカード名"/></label><label>アルカナ<select value={filters.arcana} onChange={e=>update('arcana',e.target.value)}><option value="">すべて</option><option value="major">大アルカナ</option><option value="minor">小アルカナ</option></select></label><label>スート<select value={filters.suit} onChange={e=>update('suit',e.target.value)}><option value="">すべて</option>{Object.entries(suitLabels).map(([key,label])=><option key={key} value={key}>{label}</option>)}</select></label><button onClick={()=>setParams({})}>条件をクリア</button></section>
      <p role="status" className={styles.resultCount}>{filtered.length}枚 / 全{cards.length}枚</p>
      <div className={styles.grid} aria-label="カード一覧">{filtered.map(card=><Link key={card.card_id} to={`/dictionary/${cardSlug(card.card_id)}?${params}`} data-testid="dictionary-card" className={styles.card}><span className={styles.cardNumber}>{String(card.numeric_id).padStart(2,'0')} · {card.arcana==='major'?'大アルカナ':suitLabels[card.suit!]}</span><h2>{card.name_ja}</h2><p lang="en">{card.name_en}</p><small>原文・暫定訳・解釈候補 →</small></Link>)}</div>
      {!filtered.length&&<p className={styles.section}>該当するカードはありません。検索語や分類を変更してください。</p>}
    </>}
    <footer className={styles.footer}>資料を読むための辞典。占い画面の意味データとは独立しています。</footer>
  </div></main>;
}
