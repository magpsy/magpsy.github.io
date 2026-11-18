import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import Home from "./Home";
import About from "./About";
import Research from "./Research";
import CV from "./CV";
import Footer from "./footer";
import "./styles.css";

const pages = {home:"Home", about:"About me", research:"Research", cv:"CV"};
function currentPage() {
  const hash = location.hash.slice(1);
  return Object.hasOwn(pages, hash) ? hash : "home";
}
function App() {
  const [view,setView] = useState(currentPage);
  useEffect(()=>{
    function sync(){setView(currentPage()); window.scrollTo(0,0);}
    window.addEventListener("hashchange",sync);
    window.addEventListener("popstate",sync);
    return ()=>{window.removeEventListener("hashchange",sync);window.removeEventListener("popstate",sync);};
  },[]);
  function go(page){
    if(page!==view) history.pushState(null,"",page==="home"?location.pathname+location.search:"#"+page);
    setView(page);
    window.scrollTo(0,0);
  }
  return <>
    <a className="skip-link" href="#main" onClick={e=>{e.preventDefault();document.getElementById("main").focus();}}>Skip to content</a>
    <header className="site-header"><div className="wrap header-inner">
      <button className="wordmark" onClick={()=>go("home")}>Chih-Yu Maggie Jao</button>
      <nav className="top-nav" aria-label="Main navigation">{Object.entries(pages).map(([id,label])=>
        <button key={id} aria-pressed={view===id} onClick={()=>go(id)}>{label}</button>)}</nav>
    </div></header>
    <main id="main" tabIndex={-1}><div className="wrap" id="top">
      {view==="home" && <Home go={go}/>}
      {view==="about" && <About/>}
      {view==="research" && <Research/>}
      {view==="cv" && <CV/>}
    </div></main>
    <Footer/>
  </>;
}
createRoot(document.getElementById("root")).render(<App/>);
