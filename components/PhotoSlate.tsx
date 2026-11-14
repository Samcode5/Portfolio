"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const takes = [
  { src: "/me_goa.jpg", alt: "Gautam Mudawadkar standing in a restaurant in Goa", style: { objectPosition: "50% 20%", transform: "scale(1.5)", transformOrigin: "50% 22%" } },
  { src: "/me.jpeg", alt: "Portrait of Gautam Mudawadkar", style: { objectPosition: "50% 30%" } },
];

/** Clapperboard that claps, then "develops" the photo. Click for the next take. */
export default function PhotoSlate() {
  const [take, setTake] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const t = takes[take];

  const move = (e: React.PointerEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transform = `rotateY(${(x - 0.5) * 14}deg) rotateX(${(0.5 - y) * 14}deg)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };

  return (
    <div className="slate-wrap rv">
      <div className="slate" ref={ref} onPointerMove={move} onPointerLeave={leave}>
        <div className="clap">
          <div className="arm" key={`a${take}`} />
          <div className="stick" />
        </div>
        <div className="board">
          <div className="row"><span>PROD.</span><b>THE STORY SO FAR</b><span>ROLL</span><b>A</b></div>
          <div className="row"><span>SCENE</span><b>01</b><span>TAKE</span><b>{String(take + 1).padStart(2, "0")}</b></div>
          <div className="row"><span>DIR.</span><b>G. MUDAWADKAR</b><span>CAM</span><b>PUNE</b></div>
          <div className="shot">
            <Image key={t.src} src={t.src} alt={t.alt} fill sizes="340px" className="dev" style={t.style} priority={take === 0} />
            <i className="flash" key={`f${take}`} />
          </div>
        </div>
      </div>
      <button className="next" onClick={() => setTake((take + 1) % takes.length)}>NEXT TAKE ▸</button>
    </div>
  );
}
