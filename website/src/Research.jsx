import React, { useState } from "react";
import { interests, presentations } from "./research.json";

export default function Research() {
  const [year, setYear] = useState("all");
  const years = [...new Set(presentations.map(p=>p.year))].sort().reverse();
  const visible = presentations.filter(p=>year==="all" || p.year===year);
  return <section className="content-section" id="research" aria-labelledby="research-title">
    <h2 id="research-title">Research</h2>
    <section className="subsection">
      <h3 className="subsection-title">01 / Research interests</h3>
      <div className="subsection-content research-grid">{interests.map(i =>
        <article className="research-card" key={i.id}><h4>{i.title}</h4><p>{i.description}</p></article>)}</div>
    </section>
    <section className="subsection">
      <h3 className="subsection-title">02 / Publications &amp; presentations</h3>
      <div className="subsection-content publication-browser">
        <div className="publication-tools">
          <div className="year-filters" role="group" aria-label="Filter presentations by year">
            {["all",...years].map(y=><button key={y} className="year-filter" aria-pressed={year===y} onClick={()=>setYear(y)}>{y==="all"?"All years":y}</button>)}
          </div>
          <span className="result-count" role="status">{visible.length} presentation{visible.length===1?"":"s"}</span>
        </div>
        <ol className="publications" aria-label="Conference contributions">{visible.map(p=>
          <li className="publication-card" key={p.title}><time className="publication-year">{p.year}</time>
            <h4 className="publication-title">{p.title}</h4><p className="publication-venue">{p.venue}</p>
            <details className="citation-details"><summary>Full citation</summary><p className="publication-meta">{p.citation}</p></details>
          </li>)}</ol>
      </div>
    </section>
  </section>;
}
