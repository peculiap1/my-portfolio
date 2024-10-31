/**
 * Components
 */

import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 mb-3">Technologies I use</h2>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skill;
