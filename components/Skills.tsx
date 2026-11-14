import { skills, awards } from "../src/data/content";

export default function Skills() {
  return (
    <section id="cast">
      <div className="hd"><h2>Cast &amp; Crew</h2><p>Skills</p></div>
      <div className="credits">
        {skills.map(([h, items]) => (
          <div key={h} className="rv">
            <h4>{h}</h4>
            <p>{items.map((s, i) => <span key={s}>{i > 0 && <i>/</i>}{s}</span>)}</p>
          </div>
        ))}
      </div>
      <div className="aw rv">
        {awards.map(([a, b]) => <div key={a}><b>{a}</b>{b}</div>)}
      </div>
      <p className="edu rv"><b>B.Tech, Computer Science</b>, Vishwakarma Institute of Technology, Pune, 2020–2024. Coursework: Neural Networks, Deep Learning, AI, DBMS, Cloud Computing.</p>
    </section>
  );
}
