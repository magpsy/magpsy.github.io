import React, { useEffect, useState } from "react";

const base = "https://magpsy.github.io/CV-public/";
const resolver = base + "current-cv.js?v=manifest1";

export default function CV() {
  const [edition, setEdition] = useState({
    pdf: base + "CV-OnePage.pdf?v=f0cf153ee8d7",
    image: base + "CV-OnePage-page-1.png?v=f0cf153ee8d7"
  });

  useEffect(() => {
    let active = true;
    import(/* @vite-ignore */ resolver)
      .then(({ currentCV }) => currentCV())
      .then(files => { if (active) setEdition(files); })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  return (
    <section aria-labelledby="cv-title" className="content-section" id="cv">
      <div className="cv-toolbar">
        <h2 id="cv-title">CV</h2>
        <a className="button" download="Chih-Yu-Maggie-Jao-CV.pdf" href={edition.pdf}>Download PDF</a>
      </div>
      <img alt="Chih-Yu Maggie Jao's one-page CV: education, research experience, selected research outputs, leadership, languages and interests." className="cv-preview" src={edition.image} id="cv-preview" />
    </section>
  );
}
