import React, {useState} from "react";
import Explorer from "./Explorer";
export default function Home({go}) {
 const [status,setStatus]=useState("");
 async function copyEmail() {
   const email="r14227103@ntu.edu.tw";
   try { await navigator.clipboard.writeText(email); setStatus("Copied "+email); }
   catch { setStatus("Email: "+email); }
 }
 return (
<div className="hero" id="home-panel">
<div>
<div className="home-identity">
<figure className="portrait">
<img alt="Chih-Yu Maggie Jao in a snowy city landscape" height="1448" src="portrait-clean.png" width="1086"/>
</figure>
<div className="identity-copy">
<h1>Chih-Yu<br/>Maggie Jao</h1>
<div className="eyebrow">Graduate researcher<br/>National Taiwan University</div>
</div>
</div>
<div className="actions">
<button className="button primary" data-view="about" onClick={() => go("about")} type="button">About me</button>
<button className="button" data-view="research" onClick={() => go("research")} type="button">Research</button>
<button className="button" data-view="cv" onClick={() => go("cv")} type="button">CV</button>
<button className="button" id="copy-email" onClick={copyEmail} type="button">Copy email</button>
<span aria-live="polite" className="copy-status" id="copy-status" role="status">{status}
</span>
</div>
</div>
<Explorer go={go} />
</div>
);
}
