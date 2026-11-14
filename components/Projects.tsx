import { projects } from "../src/data/content";

export default function Projects() {
  return (
    <section id="projects">
      <div className="hd"><h2>Featured Presentations</h2><p>Projects</p></div>
      <div className="posters">
        {projects.map((p) => (
          <div key={p.title} className="poster rv" style={{ "--c1": p.color } as React.CSSProperties}>
            <span className="big">{p.n}</span>
            <div className="t">{p.tech}</div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <div className="m">{p.metric}</div>
            {p.link && <a href={p.link} target="_blank" rel="noreferrer">VIEW CODE</a>}
          </div>
        ))}
      </div>
    </section>
  );
}
