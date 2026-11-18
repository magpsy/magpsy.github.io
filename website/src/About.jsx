import React from "react";

export default function About() {
  return (
<section aria-labelledby="about-title" className="content-section" id="about">
<h2 id="about-title">About me</h2>
<section aria-labelledby="profile-title" className="subsection">
<h3 className="subsection-title" id="profile-title">01 / Profile</h3>
<div className="subsection-content">
<div className="profile-layout">
<figure className="portrait">
<img alt="Chih-Yu Maggie Jao in a snowy city landscape" height="1448" src="portrait-clean.png" width="1086"/>
</figure>
<div>
<p className="profile-intro">I am an M.S. student in Social Psychology at NTU. My work brings together behavioral experiments and computational approaches to social interaction.</p>
<ul aria-label="Education timeline" className="timeline">
<li>
<time dateTime="2028">Expected 2028</time>
<div>
<strong>M.S. program in Psychology, Social Psychology</strong>
<span>National Taiwan University</span>
</div>
</li>
<li>
<time dateTime="2025">2025</time>
<div>
<strong>B.S. in Life Science</strong>
<span>National Taiwan University</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>
<section aria-labelledby="awards-title" className="subsection">
<h3 className="subsection-title" id="awards-title">02 / Awards</h3>
<div className="subsection-content">
<ul aria-label="Awards and research grants timeline" className="timeline">
<li>
<time dateTime="2025">Summer 2025</time>
<div>
<strong>
<a href="https://www.aca.ntu.edu.tw/WebUPD/aca/UAADNews/113-2%E5%AD%B8%E6%A5%AD%E6%88%90%E7%B8%BE%E5%84%AA%E8%89%AF%E5%8F%97%E7%8D%8E%E5%90%8D%E5%96%AE.pdf" rel="noopener noreferrer" target="_blank">Academic Excellence Award (Life Science) ↗</a>
</strong>
<span>National Taiwan University · Second semester of senior year</span>
</div>
</li>
<li>
<time dateTime="2024">Summer 2024</time>
<div>
<strong>
<a href="https://wsts.nstc.gov.tw/STSWeb/Award/AwardMultiQuery.aspx" rel="noopener noreferrer" target="_blank">NSTC Undergraduate Research Grant ↗</a>
</strong>
<span>National Science and Technology Council, Taiwan</span>
<span>Project on differences in perceived connection between observers and participants in social interactions.</span>
</div>
</li>
</ul>
</div>
</section>
</section>
  );
}
