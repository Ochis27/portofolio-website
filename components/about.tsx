"use client";

import {useSectionInView} from "@/lib/hooks";
import {motion} from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const {ref} = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">System Engineering</span>, I decided to
        pursue my passion for programming and for AI/ML and for that I decided
        to enroll in two master programs. For the first master I decided to in a
        master in IT Systems Applied to Production and Services where I gained
        more experience and dipper knowledge about different programming
        languages and aspects of programming and for the other master I decided
        to follow my passion for AI/ML as I enrolled in a master which covers
        Artificial Intelligence and Distributed Computing topics like{" "}
        <span className="font-medium">
          machine learning, artificial intelligence and prompt engineering{" "}
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and the ability to develop software that helps
        other people. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Java with Spring Boot and C# with .NET
        </span>
        . I am also familiar with TypeScript and SQL databases. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
