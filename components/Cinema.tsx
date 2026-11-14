"use client";
import { useEffect } from "react";

/** Grain, spotlight, curtains and all scroll/pointer effects. */
export default function Cinema() {
  useEffect(() => {
    const rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const cleanups: (() => void)[] = [];
    const t = setTimeout(() => document.body.classList.add("open"), 300);
    cleanups.push(() => { clearTimeout(t); document.body.classList.remove("open"); });

    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      el.classList.add("in");
      el.querySelectorAll<HTMLElement>("[data-n]").forEach((c) => {
        const n = +c.dataset.n!, d = +(c.dataset.d || 0), t0 = performance.now();
        const f = (now: number) => {
          const p = Math.min((now - t0) / 1800, 1);
          c.textContent = (n * (1 - Math.pow(1 - p, 3))).toFixed(d);
          if (p < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      });
      io.unobserve(el);
    }), { threshold: 0.2 });
    document.querySelectorAll(".rv").forEach((e) => io.observe(e));
    cleanups.push(() => io.disconnect());

    const sp = document.getElementById("spot")!;
    const pm = (e: PointerEvent) => { sp.style.setProperty("--x", e.clientX + "px"); sp.style.setProperty("--y", e.clientY + "px"); };
    addEventListener("pointermove", pm);
    cleanups.push(() => removeEventListener("pointermove", pm));

    document.querySelectorAll<HTMLElement>(".poster").forEach((p) => {
      const mv = (e: PointerEvent) => {
        if (rm) return;
        const r = p.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        p.style.transform = `rotateY(${(x - 0.5) * 16}deg) rotateX(${(0.5 - y) * 16}deg) scale(1.03)`;
        p.style.setProperty("--mx", x * 100 + "%"); p.style.setProperty("--my", y * 100 + "%");
        p.style.boxShadow = "0 30px 80px rgba(0,0,0,.6)";
      };
      const lv = () => { p.style.transform = ""; p.style.boxShadow = ""; };
      p.addEventListener("pointermove", mv); p.addEventListener("pointerleave", lv);
      cleanups.push(() => { p.removeEventListener("pointermove", mv); p.removeEventListener("pointerleave", lv); });
    });

    const L = document.querySelector<HTMLElement>(".hero .l");
    const sc = () => {
      if (rm || !L) return;
      const y = scrollY;
      if (y < innerHeight * 1.2) { L.style.transform = `translateY(${y * 0.35}px)`; L.style.opacity = String(Math.max(0, 1 - y / (innerHeight * 0.9))); }
    };
    addEventListener("scroll", sc, { passive: true });
    cleanups.push(() => removeEventListener("scroll", sc));

    const cv = document.getElementById("beam") as HTMLCanvasElement | null;
    if (cv) {
      const cx = cv.getContext("2d")!;
      let W = 0, H = 0, raf = 0;
      let dust: { x: number; y: number; r: number; s: number; a: number }[] = [];
      const rs = () => {
        W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight;
        dust = Array.from({ length: 90 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.8 + 0.4, s: Math.random() * 0.4 + 0.1, a: Math.random() }));
      };
      rs(); addEventListener("resize", rs);
      const draw = (t: number) => {
        cx.clearRect(0, 0, W, H);
        const g = cx.createLinearGradient(W / 2, 0, W / 2, H);
        g.addColorStop(0, "rgba(255,225,160,.22)"); g.addColorStop(1, "rgba(255,225,160,0)");
        cx.fillStyle = g; cx.beginPath(); cx.moveTo(W * 0.46, 0); cx.lineTo(W * 0.54, 0); cx.lineTo(W * 0.95, H); cx.lineTo(W * 0.05, H); cx.fill();
        dust.forEach((d) => {
          d.y -= d.s; d.x += Math.sin(t / 2000 + d.a * 6) * 0.2; if (d.y < 0) d.y = H;
          cx.fillStyle = `rgba(255,235,190,${0.2 + 0.3 * Math.abs(Math.sin(t / 900 + d.a * 9))})`;
          cx.beginPath(); cx.arc(d.x, d.y, d.r, 0, 7); cx.fill();
        });
        if (!rm) raf = requestAnimationFrame(draw);
      };
      raf = requestAnimationFrame(draw);
      cleanups.push(() => { cancelAnimationFrame(raf); removeEventListener("resize", rs); });
    }
    return () => cleanups.forEach((c) => c());
  }, []);

  return (
    <>
      <div id="grain" />
      <div id="spot" />
      <div className="curt a" />
      <div className="curt b" />
    </>
  );
}
