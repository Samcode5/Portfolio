"use client";
import { useEffect, useRef, useState } from "react";
import PhotoSlate, { takes } from "./PhotoSlate";

const FILM = "https://www.youtube.com/watch?v=nFEA82b1RSw&t=118s";

function Counter({ n, d = 0, suffix = "" }: { n: number; d?: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const f = (now: number) => {
        const p = Math.min((now - t0) / 1800, 1);
        setV(n * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(f);
      };
      raf = requestAnimationFrame(f);
    }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [n]);
  return <b ref={ref}>{v.toFixed(d)}{suffix}</b>;
}

export default function Story() {
  const [take, setTake] = useState(0);
  return (
    <div className="about">
      <PhotoSlate take={take} onNext={() => setTake((take + 1) % takes.length)} />
      <div className="rv">
        <div className="story" key={take}>
          {take === 0 ? (
            <>
              <p>I’m a software developer with a knack for problem-solving and a passion for crafting innovative solutions. I graduated with a Computer Science degree from VIT Pune, and ever since I’ve been on a mission to push my limits, learn new technologies and refine my skills.</p>
              <p>Today I’m a Senior Software Engineer at Zensar, with 2+ years across frontend, backend and automation. I’ve always believed that anything done twice should be automated, and that belief is why hours of manual release work now take minutes. I’m now going deeper into LLMs and retrieval-augmented generation.</p>
              <div className="stats">
                <div><Counter n={1950} /><small>engineering hours saved</small></div>
                <div><Counter n={2} suffix="+" /><small>years of experience</small></div>
                <div><Counter n={8.85} d={2} /><small>CGPA, B.Tech CS</small></div>
              </div>
            </>
          ) : (
            <>
              <p>Hi, I’m Sameer. Yes, I go by two names, Gautam and Sameer, and both are me.</p>
              <p>Before code, there was the field. I played cricket at district level, and I’ve always been the athletic one, a sprinter too.</p>
              <p>Then came the stage. I’ve always loved acting, and in college I co-founded RangManch, VIT’s first theatre and film club. As its management lead I organised multiple events smoothly. I’ve also acted in a <a href={FILM} target="_blank" rel="noreferrer">short film</a>.</p>
              <p>If you’re making something, I’d love to collaborate on films.</p>
              <div className="stats t">
                <div><b>District</b><small>level cricketer</small></div>
                <div><b>Sprinter</b><small>on the track</small></div>
                <div><b>Co-founder</b><small>RangManch, VIT’s first theatre &amp; film club</small></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
