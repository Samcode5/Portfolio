"use client";
import { useState } from "react";
import { profile } from "../src/data/content";

export default function Contact() {
  const [d, setD] = useState({ name: "", email: "", subject: "", message: "" });
  const on = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setD({ ...d, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi, my name is ${d.name} (${d.email}).\n\n${d.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section className="contact" id="contact">
      <h2>Let’s Make<br />Something</h2>
      <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
      <div className="row">
        <a href={`tel:${profile.phone}`}>{profile.phoneLabel}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GITHUB</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
      </div>
      <form className="form" onSubmit={submit}>
        <div className="two">
          <input name="name" placeholder="Name" aria-label="Name" onChange={on} required />
          <input name="email" type="email" placeholder="Email" aria-label="Email" onChange={on} required />
        </div>
        <input name="subject" placeholder="Subject" aria-label="Subject" onChange={on} />
        <textarea name="message" rows={4} placeholder="Message" aria-label="Message" onChange={on} required />
        <button type="submit">Send message</button>
      </form>
    </section>
  );
}
