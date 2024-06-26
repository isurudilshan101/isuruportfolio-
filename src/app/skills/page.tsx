import Image, { StaticImageData } from "next/image";
import React from "react";
import javascript from "../../../public/js.jpg";
import html from "../../../public/html.jpg";
import nextjs from "../../../public/nextjs.png";
import reactjs from "../../../public/reactjs.jpg";
import mysql from "../../../public/mysql.png";
import bootstrap from "../../../public/bootstrap.png";
import typescript from "../../../public/typescript.png";
import redux from "../../../public/redux.png";
import zustand from "../../../public/zustand.png";
import nodejs from "../../../public/nodejs.png";
import python from "../../../public/python.png";
import tailwind from "../../../public/tailwind.png";
import ant from "../../../public/ant.png";
import material from "../../../public/material.png";
import php from "../../../public/php.png";
import laravel from "../../../public/laravel.png";
import mongodb from "../../../public/mongodb.png";
import git from "../../../public/git.png";

import styles from "./page.module.css";

// Define the type for skill objects
interface Skill {
  name: string;
  image: StaticImageData;
}

// Define an array of skill objects, each with a name and image
const skills: Skill[] = [
  { name: "HTML", image: html },
  { name: "CSS", image: javascript },
  { name: "JavaScript", image: javascript },
  { name: "Type Script", image: typescript },
  { name: "React Js", image: reactjs },
  { name: "Redux", image: redux },
  { name: "Next Js", image: nextjs },
  { name: "Zustand", image: zustand },
  { name: "Node Js", image: nodejs },
  { name: "Python", image: python },
  { name: "Tailwnid Css", image: tailwind },
  { name: "Ant Design", image: ant },
  { name: "Material UI", image: material },
  { name: "Bootstrap", image: bootstrap },
  { name: "PHP", image: php },
  { name: "Laravel", image: laravel },
  { name: "Mysql", image: mysql },
  { name: "Mongodb", image: mongodb },
  { name: "GIT", image: git },
];

const Page: React.FC = () => {
  const half = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, half);
  const rightSkills = skills.slice(half);

  const generateSkillItems = (skillsArray: Skill[]) =>
    skillsArray.map((skill, i) => (
      <div key={i} className="ml-6 flex gap-6 mb-4">
        <div className="w-40 mt-6">
          <h1 className="text-2xl">{skill.name}</h1>
        </div>
        <Image
          className={`  ${styles.image} ${styles.animateSpinSlow}`}
          src={skill.image}
          alt={skill.name}
        />
      </div>
    ));

  return (
    <div>
      <div>
        <h1 className="mt-4 ml-6 text-4xl font-bold mb-8">SKILLS</h1>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center   h-screen">
        <div className="flex flex-col md:flex-row gap-4 md:gap-24">
          <div className="left flex flex-col">
            {generateSkillItems(leftSkills)}
          </div>
          <div className="right flex flex-col">
            {generateSkillItems(rightSkills)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
