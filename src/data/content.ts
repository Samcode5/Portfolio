export const profile = {
  name: "Gautam Mudawadkar",
  email: "gautammudawadkar@gmail.com",
  phone: "+917588119489",
  phoneLabel: "+91 75881 19489",
  github: "https://github.com/Samcode5/",
  linkedin: "https://www.linkedin.com/in/gautam-mudawadkar-b4516a21a/",
};

export const experience = {
  role: "Senior Software Engineer",
  where: "Zensar Technologies · Jun 2024 – Present",
  points: [
    "Built Ashwagati, an internal automation platform that cut game configuration and release from 3–4 hours to under 5 minutes, saving 1,950 hours across 300+ games.",
    "Led migration of multiple games from a legacy framework to a modern one, improving scalability and reducing production defects.",
    "Delivered a proof of concept moving an 8–10 year old game engine to a modern framework in 4 weeks, versus the usual 8–12.",
    "Designed reusable automation components and config pipelines for developers and QA, and act as technical point of contact for debugging and release readiness.",
  ],
};

export const projects = [
  { n: "I", color: "#6b1320", title: "Clone Game Automation", tech: "ELECTRON · NEXT.JS · EXPRESS.JS",
    text: "A desktop tool that runs the whole clone-game process for Dev and QA, built from scratch.",
    metric: "Dev time: 8–10 days → 1–3 days. QA time down 45%.", link: "" },
  { n: "II", color: "#1d3a3a", title: "DevBuddy", tech: "PYTHON · LANGCHAIN · CHROMADB · LOCAL LLMS",
    text: "A local RAG assistant that answers natural-language questions about large JS/TS codebases, with no code leaving your machine.",
    metric: "Runs fully on local models.", link: "" },
  { n: "III", color: "#3a2a0a", title: "ParkIt", tech: "REACT NATIVE · REDUX · CNN · GOOGLE MAPS",
    text: "Book a parking slot. Computer vision detects empty spaces and updates their status in real time.",
    metric: "Vision model plus live map navigation.", link: "https://github.com/Samcode5/ParkIt" },
];

export const skills: [string, string[]][] = [
  ["LANGUAGES", ["JavaScript", "Python", "C++", "C#", "SQL"]],
  ["WEB & FRAMEWORKS", ["React", "Angular", "Node.js", "Express", ".NET Core", "REST APIs"]],
  ["AI / ML", ["RAG", "LangChain", "ChromaDB", "Local LLM deployment", "CNNs"]],
  ["TOOLS & CLOUD", ["AWS", "Docker", "CI/CD", "Git"]],
  ["FUNDAMENTALS", ["Data Structures & Algorithms", "Operating Systems", "OOP", "System Design"]],
];

export const awards = [
  ["Team of the Year", "Zensar, 2025"],
  ["Innovating Team of the Year", "Zensar, 2025"],
  ["Runner-Up", "Zensar AI Hackathon, 2024"],
];
