import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="hd"><h2>The Story So Far</h2><p>About</p></div>
      <div className="about">
        <div className="frame rv">
          <Image src="/me_goa.jpg" alt="Portrait of Gautam Mudawadkar" fill sizes="340px" />
        </div>
        <div className="rv">
          <p>I’m a software engineer from Pune with 2+ years building JavaScript applications across frontend, backend and automation. At Zensar I turn slow, manual release work into tools that finish in minutes.</p>
          <p>I’m now going deeper into LLMs and retrieval-augmented generation, and I’m applying for an MS in Computer Science to strengthen my foundations in machine learning and large-scale systems.</p>
          <p>Off screen: cricket, and theatre. I co-founded RangManch, VIT’s first theatre and film club.</p>
          <div className="stats">
            <div><b data-n="1950">0</b><small>engineering hours saved</small></div>
            <div><b data-n="300">0</b><small>games on the platform</small></div>
            <div><b data-n="8.85" data-d="2">0</b><small>CGPA, B.Tech CS</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
