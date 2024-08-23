import filmpire from "@/public/filmpire.png";
import learningNewFactsDaily from "@/public/learningNewFactsDaily.png";
import nuronalNetwork from "@/public/nuronalNetwork.png";
import particleExplozion from "@/public/particleExplozion.png";
import rmtDev from "@/public/rmtDev.png";
import smartBrains from "@/public/smartBrains.png";
import stockShelf from "@/public/stockShelf.png";
import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {LuGraduationCap} from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Polytechnic University of Timisoara",
    location: "Timisoara, Timis",
    description:
      "I studied for 4 years at the Polytechnic University of Timisoara with a bachelor degree in Systems Engineering. During that time I increased my knowledge of programming working with both low level and high level languages. I found a passion for full-stack web development, which led me to pursue various projects and internships where I could apply my skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "Polytechnic University of Timisoara",
    location: "Timisoara, Timis",
    description:
      "Currently pursuing a Master's Degree in IT Systems Applied to Production and Services.",
    icon: React.createElement(LuGraduationCap),
    date: "2024-2026",
  },
  {
    title: "West University of Timisoara",
    location: "Timisoara, Timis",
    description:
      "Pursuing a Master's Degree in Artificial Intelligence and Distributed Computing.",
    icon: React.createElement(LuGraduationCap),
    date: "2024-2026",
  },
  {
    title: "Computer Operator Electronic and Networking",
    location: "Timisoara, Timis",
    description: `I spearheaded the development and integration of an automated data processing and display project. I am proficient in various programming languages, including HTML, CSS, JavaScript, Node-RED, and MySQL. I also have experience using software applications like Grafana for data display and Prometheus for data monitoring.`,
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "IT Service Support and Development",
    location: "Timisoara, Timis",
    description: `Proficient in C# and PowerShell for cutting-edge application development, I utilize Grafana and Prometheus for efficient IT service monitoring. I streamline new software deployment to ensure flawless integration and deliver expert support for SharePoint and MS Project 2016 Enterprise. I orchestrate strategic plans for advanced service monitoring systems, harness Prometheus for comprehensive monitoring across multiple data sources, and implement Terraform for efficient cloud infrastructure management. With expertise in Grafana, I excel in data visualization and analysis. I also craft detailed documentation for monitoring software to enhance user experience and innovate with Figma for intuitive web design prototypes. Additionally, I have developed versatile cross-platform applications using React, Next.js, TypeScript, TailwindCSS, and SCSS.`,
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "NEURONAL NETWORK",
    description:
      "I build a neuronal network in Java which is used to detect text from images and it is trained on a MNIST dataset.",
    tags: ["Java", "JUnit", "MNIST", "Linear Algebra"],
    imageUrl: nuronalNetwork,
  },
  {
    title: "LEARN NEW FACTS DAILY",
    description: `The project is a React-based application hosted on Netlify, using Supabase for the database. Users can add, filter, and react to curiosities with valid HTTP/HTTPS sources.`,
    tags: ["React", "HTML", "CSS", "Supabase"],
    imageUrl: learningNewFactsDaily,
  },
  {
    title: "SMARTBRAIN",
    description: `SmartBrain is a fullstack app using React, Node.js, PostgreSQL, and a machine learning API to detect faces in uploaded photos, storing results in a database`,
    tags: ["React", "Node.js", "PostgreSQL", "CSS"],
    imageUrl: smartBrains,
  },
  {
    title: "STOCKSHELF",
    description: `STOCKSHELF is a full-stack app with React, Java Spring Boot, and MySQL. It integrates Stripe and Okta, enabling users to manage, borrow books, handle fines, and admins to update catalogs.`,
    tags: [
      "React",
      "Java",
      "Java Spring Boot",
      "React Bootstrap",
      "MySQL",
      "Stripe",
      "OKTA",
      "Typescript",
    ],
    imageUrl: stockShelf,
  },
  {
    title: "RMTDEV",
    description: `rmtDev is a web application using HTML, CSS, and JavaScript that allows users to find and save remote jobs, share listings via unique links, and manage opportunities effortlessly`,
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: rmtDev,
  },
  {
    title: "FILMPIRE",
    description: `Filmpire is a React-based app using Redux for state management, integrating TMDb API for dynamic movie data, enabling users to search, browse, and save personalized watchlists.`,
    tags: ["React", "REDUX", "TMDB"],
    imageUrl: filmpire,
  },
  {
    title: "PARTICLE EXPLOSION",
    description: `This project focuses on simulating visually appealing particle explosions with periodic color-changing effects using C++ programming language along with the SDL (Simple DirectMedia Layer) extension.`,
    tags: ["C++", "SDL"],
    imageUrl: particleExplozion,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "C#",
  ".NET",
  "Python",
  "Node.js",
  "Git",
  "TailwindCSS",
  "SCSS",
  "MySQL",
  "Redux",
  "PostreSQL",
  "Astro.js",
  "Express",
  "Java",
  "Java Spring Boot",
  "Bootstrap",
  "Firebase",
  "Supabase",
  "Vue.js",
  "Node-Red",
  "C++",
  "Prometheus",
  "Grafana",
  "Service Now",
] as const;
