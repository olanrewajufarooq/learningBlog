// src/data/profileData.ts

export const education = [
  {
    institute: "University of Ilorin",
    degree: "B.Eng.",
    course: "Mechanical Engineering",
    start: { month: "Oct", year: 2015 },
    end: { month: "Jul", year: 2021 },
  },
  {
    institute: "Universite de Toulon",
    degree: "M.Sc.",
    course: "Marine and Maritime Robotics",
    start: { month: "Oct", year: 2022 },
    end: { month: "Jul", year: 2023 },
  },
  {
    institute: "Universidade de Lisboa",
    degree: "M.Eng.",
    course: "Electrical and Computer Engineering",
    start: { month: "Oct", year: 2023 },
    end: { month: "Jul", year: 2024 },
  },
  {
    institute: "King Fahd University of Petroleum and Minerals",
    degree: "Ph.D.",
    course: "Systems and Control Engineering",
    start: { month: "Aug", year: 2024 },
    end: { month: "Jul", year: 2028 },
  },
];

export const workExperience = [
  {
    institute: "McGeorge Consulting Ltd.",
    title: "Odoo Developer",
    start: { month: "Aug", year: 2020 },
    end: { month: "Jul", year: 2021 },
  },
  {
    institute: "LEADVision Academy",
    title: "Data Science and AI Tutor",
    start: { month: "Mar", year: 2020 },
    end: { month: "May", year: 2020 },
  },
  {
    institute: "Luxa Digital Agency",
    title: "Intern",
    start: { month: "Jul", year: 2025 },
    end: { month: "Jun", year: 2026 },
  },
];

export const onlineCourses = [
  {
    course: "React Developer Bootcamp",
    institute: "Meta",
    platform: "Coursera",
    end: { month: "Apr", year: 2024 },
    skills: [ "React", "Hooks", "State Management" ],
  },
  // More courses...
];

export const projects = [
  {
    title: "Portfolio Website",
    institute: "Freelance",
    client: "Self",
    skills: [ "React", "Tailwind", "EmailJS" ],
    start: { month: "Feb", year: 2024 },
    end: { month: "Mar", year: 2024 },
    description: "Built a fully responsive portfolio site.",
  },
  // More projects...
];

export const skills = {
  frontend: [ "React", "Tailwind CSS", "TypeScript", "Material UI" ],
  backend: [ "Node.js", "Express" ],
  database: [ "MongoDB", "PostgreSQL" ],
  cloud: [ "Firebase", "Vercel" ],
  ai: [ "ChatGPT API", "LangChain" ],
};
