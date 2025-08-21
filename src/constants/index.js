const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Resume", link: "https://drive.google.com/file/d/1Y818IdLceOHMT-mcQpzsEfBMk7GmcyPJ/view?usp=drive_link" },
];

// 🔹 Hero rotating words (use resume theme instead of “ideas/designs”)
const words = [
  { text: "Frontend", imgPath: "/images/code.svg" },
  { text: "React.js", imgPath: "/images/code.svg" },
  { text: "Next.js", imgPath: "/images/code.svg" },
  { text: "Tailwind CSS", imgPath: "/images/code.svg" },
  { text: "JavaScript", imgPath: "/images/code.svg" },
  { text: "TypeScript", imgPath: "/images/code.svg" },
];

// 🔹 Counters (resume achievements)
const counterItems = [
  { value: 800, suffix: "+", label: "Problems Solved on LeetCode" },
  { value: 396, suffix: "", label: "Biweekly Contest Rank" },
  { value: 100, suffix: "+", label: "Stars on Open Source Projects" },
];

// 🔹 Logo showcase (tech logos — keep placeholders or replace with your own PNGs later)
const logoIconsList = [
  { imgPath: "/images/logos/react.png" },
  { imgPath: "/images/logos/python.svg" },
  { imgPath: "/images/logos/mongodb.png" },
  { imgPath: "/images/logos/node.png" },
  { imgPath: "/images/logos/redis.png" },
  { imgPath: "/images/logos/postgres.png" },
  { imgPath: "/images/devops.png" },
  { imgPath: "/images/logos/git.svg" },
];

// 🔹 Abilities (summary style)
const abilities = [
  {
    imgPath: "/images/react.svg", // make sure this file exists or swap with any icon you have
    title: "Frontend Engineering",
    desc: "Build responsive, user-friendly web apps with React.js, Next.js, and Tailwind CSS. Strong focus on accessibility and performance (95+ Lighthouse).",
  },
  {
    imgPath: "/images/server.png",
    title: "Backend APIs",
    desc: "Design and implement REST APIs with Node.js, Express, and FastAPI. Work with PostgreSQL + Prisma for secure, scalable data handling.",
  },
  {
    imgPath: "/images/devops.png",
    title: "DevOps & Deployment",
    desc: "Dockerized applications, CI/CD with GitHub Actions, scalable deployments on Vercel/Netlify, and real-time systems with WebSockets.",
  },
];


// 🔹 Skills (image logos)
const techStackImgs = [
  { name: "React.js", imgPath: "/images/logos/react.png" },
  { name: "Next.js", imgPath: "/images/logos/three.png" },
  { name: "Tailwind CSS", imgPath: "/images/logos/tailwind.png" },
  { name: "Node.js", imgPath: "/images/logos/node.png" },
  { name: "FastAPI", imgPath: "/images/logos/python.png" },
  { name: "PostgreSQL", imgPath: "/images/logos/postgres.png" },
  { name: "Docker", imgPath: "/images/devops.png" },
  { name: "Git", imgPath: "/images/logos/git.svg" },
];

// 🔹 Skills (3D models — keep original for now unless you have GLB files)
const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "FastAPI Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Database (Postgres)",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// 🔹 Work / Experience Cards
const expCards = [
  {
    review:
      "Built interactive dashboards with React.js and Tailwind CSS, boosting user engagement by 20%. Developed REST APIs with Node.js, Express, and PostgreSQL via Prisma ORM, secured with JWT.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Intern — Cognify",
    date: "Nov 2024 – Dec 2024",
    responsibilities: [
      "React.js & Tailwind dashboards",
      "Node.js + PostgreSQL APIs",
      "JWT authentication",
    ],
  },
];

// 🔹 Logos for experience section
const expLogos = [
  { name: "Cognify", imgPath: "/images/logo1.png" },
];

// 🔹 Testimonials (turn achievements into testimonial-style highlights)
const testimonials = [
  {
    name: "LeetCode",
    mentions: "@knight",
    review: "Knight rank with 800+ problems solved and 396th in Biweekly Contest.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Open Source",
    mentions: "@github",
    review: "Maintainer of GenAI projects with 100+ stars, focused on React UI.",
    imgPath: "/images/client2.png",
  },
];

// 🔹 Social icons (replace with actual links)
const socialImgs = [
  { name: "linkedin", imgPath: "/images/linkedin.png", link: "https://www.linkedin.com/in/vaibhav-jha-084533352/" },
  { name: "github", imgPath: "/images/x.png", link: "https://github.com/itsmrx1234" },
  { name: "email", imgPath: "/images/fb.png", link: "mailto:2k22.cscys.2211080@gmail.com" },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
