import React, { useState } from "react";
import { interests } from "./research.json";

export default function Explorer({ go }) {
  const [index, select] = useState(0);
  const current = interests[index];
  function navigate(event) {
    const count = interests.length;
    const next = { ArrowLeft: (index + count - 1) % count, ArrowRight: (index + 1) % count, Home: 0, End: count - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    select(next);
    event.currentTarget.parentNode.children[next].focus();
  }
  return <aside className="research-explorer" aria-label="Explore research interests">
    <div className="explorer-label">Explore my research interests</div>
    <div className="lens-tabs" role="tablist" aria-label="Research interests">
      {interests.map(({label,id}, i) => <button key={id} className="lens-tab" data-lens={id} role="tab"
        id={'lens-tab-'+id} aria-controls={'lens-panel-'+id} aria-selected={i===index}
        tabIndex={i===index ? 0 : -1} onClick={()=>select(i)} onKeyDown={navigate}>{label}</button>)}
    </div>
    <div className="lens-stage" data-lens={current.id} aria-hidden="true"><i className="lens-orbit"/><i className="lens-orbit"/><i className="lens-orbit"/></div>
    <div className="lens-panels">{interests.map(({id,title,description}) =>
      <section key={id} id={'lens-panel-'+id} className="lens-panel" role="tabpanel" aria-labelledby={'lens-tab-'+id} hidden={current.id!==id} tabIndex={0}>
        <h2>{title}</h2><p>{description}</p>
      </section>)}</div>
    <button className="explorer-link" onClick={()=>go('research')}><span>Explore research &amp; presentations</span><span aria-hidden="true">→</span></button>
  </aside>;
}
