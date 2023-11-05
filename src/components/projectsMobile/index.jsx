import { useInView, motion } from "framer-motion";
import Styles from "./style.module.scss";
import { useRef } from "react";
import RoundedButton from "../roundedButton";

const projects = [
  {
    img: "/images/silencio.png",
    title: "Silencio",
    link: "https://silencio.com.co/",
    category: "Branding",
    year: "2020",
  },
  {
    img: "/images/silencio.png",
    title: "Silencio",
    link: "https://silencio.com.co/",
    category: "Branding",
    year: "2020",
  },
  {
    img: "/images/silencio.png",
    title: "Silencio",
    link: "https://silencio.com.co/",
    category: "Branding",
    year: "2020",
  },
  {
    img: "/images/silencio.png",
    title: "Silencio",
    link: "https://silencio.com.co/",
    category: "Branding",
    year: "2020",
  },
];

const slideUp = {
  initial: {
    y: "50px",
    opacity: 0,
  },
  open: (i) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.4 },
  }),
  closed: {
    y: "50px",
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

const Project = ({ img, title, link, category, year }) => {
  const project = useRef(null);
  const isInView = useInView(project);

  return (
    <div className={Styles.project} ref={project}>
      <motion.img
        src={img}
        alt="background"
        variants={slideUp}
        animate={isInView ? "open" : "closed"}
      />
      <h6>{title}</h6>
      <div className={Styles.divider} />
      <p>
        <span>{category}</span> <span>{year}</span>
      </p>
    </div>
  );
};

const ProjectsMobile = () => {
  return (
    <div className={Styles.container}>
      {projects.map((item, index) => {
        return (
          <Project
            key={index}
            img={item.img}
            title={item.title}
            link={item.link}
            category={item.category}
            year={item.year}
          />
        );
      })}
      <RoundedButton>
        <p>More work</p>
      </RoundedButton>
    </div>
  );
};

export default ProjectsMobile;
