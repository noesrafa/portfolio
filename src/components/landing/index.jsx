import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Styles from "./style.module.scss";

const Landing = () => {
  const titleTop = useRef(null);
  const titleBottom = useRef(null);

  useEffect(() => {
    let title1 = new SplitType(titleTop.current);
    let chars1 = title1.chars;

    const animation = (delay) => {
      return {
        yPercent: 180,
        stagger: 0.01,
        ease: "expo",
        duration: 0.3,
        delay: delay,
      };
    };

    gsap.from(chars1, animation(0.1));

    let title2 = new SplitType(titleBottom.current);
    let chars2 = title2.chars;

    gsap.from(chars2, animation(0.2));
  }, []);

  return (
    <section className={Styles.container}>
      <header>
        <h2 ref={titleTop}>Hi, I am Rafael.</h2>
        <h2 ref={titleBottom}>
          Designer <span>{"<>"}</span> Developer
        </h2>
      </header>
      <p>
        A versatile professional who has transitioned from 3D artist to UX
        designer. With a strong background in prototyping and testing digital
        products.
      </p>
    </section>
  );
};

export default Landing;
