import { experience as e } from "../src/data/content";

export default function Experience() {
  return (
    <section id="now">
      <div className="hd"><h2>Now Showing</h2><p>Experience</p></div>
      <div className="reel">
        <article className="rv">
          <h3>{e.role}</h3>
          <div className="w">{e.where}</div>
          <ul>{e.points.map((t) => <li key={t}>{t}</li>)}</ul>
        </article>
      </div>
    </section>
  );
}
