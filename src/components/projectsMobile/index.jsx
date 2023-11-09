// import { useInView, motion } from "framer-motion";
// import Styles from "./style.module.scss";
// import { useRef } from "react";
// import RoundedButton from "../roundedButton";

// const projects = [
//   {
//     img: "/images/silencio.png",
//     title: "Silencio",
//     link: "https://silencio.com.co/",
//     category: "Branding",
//     year: "2020",
//   },
//   {
//     img: "/images/silencio.png",
//     title: "Silencio",
//     link: "https://silencio.com.co/",
//     category: "Branding",
//     year: "2020",
//   },
//   {
//     img: "/images/silencio.png",
//     title: "Silencio",
//     link: "https://silencio.com.co/",
//     category: "Branding",
//     year: "2020",
//   },
//   {
//     img: "/images/silencio.png",
//     title: "Silencio",
//     link: "https://silencio.com.co/",
//     category: "Branding",
//     year: "2020",
//   },
// ];

// const slideUp = {
//   initial: {
//     y: "50px",
//     opacity: 0,
//   },
//   open: (i) => ({
//     y: "0%",
//     opacity: 1,
//     transition: { duration: 0.4 },
//   }),
//   closed: {
//     y: "50px",
//     opacity: 0,
//     transition: { duration: 0.4 },
//   },
// };

// const Project = ({ img, title, link, category, year }) => {
//   const project = useRef(null);
//   const isInView = useInView(project);

//   return (
//     <div className={Styles.project} ref={project}>
//       <motion.img
//         src={img}
//         alt="background"
//         variants={slideUp}
//         animate={isInView ? "open" : "closed"}
//       />
//       <h6>{title}</h6>
//       <div className={Styles.divider} />
//       <p>
//         <span>{category}</span> <span>{year}</span>
//       </p>
//     </div>
//   );
// };

// const ProjectsMobile = () => {
//   return (
//     <div className={Styles.container}>
//       {projects.map((item, index) => {
//         return (
//           <Project
//             key={index}
//             img={item.img}
//             title={item.title}
//             link={item.link}
//             category={item.category}
//             year={item.year}
//           />
//         );
//       })}
//       <RoundedButton>
//         <p>More work</p>
//       </RoundedButton>
//     </div>
//   );
// };

// export default ProjectsMobile;
import { useInView, motion } from "framer-motion";
import Styles from "./style.module.scss";
import { useRef } from "react";
import RoundedButton from "../roundedButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";

const projects = [
  {
    img: "/images/heru.webp",
    title: "Heru App",
    link: "https://silencio.com.co/",
    category: "Design & Development",
    year: "2024",
    color: "#DDEEFD",
  },
  {
    img: "/images/pefai.webp",
    title: "Pefai Builder",
    link: "https://silencio.com.co/",
    category: "Design",
    year: "2023",
    color: "#E3D9FF",
  },
  {
    img: "/images/driftlead.webp",
    title: "DriftLead",
    link: "https://silencio.com.co/",
    category: "Design",
    year: "2022",
    color: "#29282C",
  },
  {
    img: "/images/aesthetics.webp",
    title: "Aesthetics",
    link: "aesthetics.webp",
    category: "Design",
    year: "2020-2024",
    color: "#3DAF9C",
  },
];

const Project = ({ img, title, link, category, year, color }) => {
  const project = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();

    const scrollConfig = {
      trigger: project.current,
      start: "top 90%",
      end: "+=60",
      scrub: 0.5,
      //   markers: true,
    };

    const animationConfig = (height) => ({
      scrollTrigger: scrollConfig,
      y: height,
      scale: 1,
      opacity: 1,
      ease: "none",
    });

    tl.to(project.current, animationConfig(0));
  }, []);

  return (
    <div className={Styles.project} ref={project}>
      <div className={Styles.imgWrapper} style={{ background: color }}>
        <img src={img} alt="background" />
      </div>
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
    <>
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
              color={item.color}
            />
          );
        })}
      </div>
      <div style={{ marginTop: 100 }}>
        <RoundedButton>
          <p>More work</p>
        </RoundedButton>
      </div>
    </>
  );
};

export default ProjectsMobile;
