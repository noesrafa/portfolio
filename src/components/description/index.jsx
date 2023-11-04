import { useEffect } from "react";
import Styles from "./style.module.scss";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Description() {
  const description = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    tl.to(description.current, {
      scrollTrigger: {
        trigger: description.current,
        start: "top 90%",
        end: "bottom+=400px bottom",
        scrub: 0.5,
      },
      opacity: 1,
      x: 100,
      duration: 3,
    });
  }, []);

  return (
    <>
      <section className={Styles.main}>
        <div className={Styles.content}>
          <h4 ref={description}>
            A versatile professional who has transitioned from 3D artist to UX
            designer. With a strong background in prototyping and testing
            digital products.
          </h4>
          <p>
            A versatile professional who has transitioned from 3D artist to UX
            designer. With a strong background in prototyping and testing
            digital products.
          </p>
        </div>
      </section>
    </>
  );
}
