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

const Project = ({ img, title, link, category, year }) => {
  const project = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();

    const scrollConfig = {
      trigger: project.current,
      start: "top 90%",
      end: "+=80",
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
      <img src={img} alt="background" />
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
