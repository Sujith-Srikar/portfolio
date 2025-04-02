import React, { useEffect, useLayoutEffect, useRef } from "react";
import {
  Loader,
  Navigation,
  HomeSection,
  FeaturedWork,
  About,
  Contact,
  CustomCursor
} from "./components/index.js";
import gsap from "gsap";
import Lenis from "lenis";

function App() {
  const container = useRef();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const valueSetters = () => {
        gsap.set("#nav a", { y: "-100%", opacity: 0 });
        gsap.set("#home .parent .child", { y: "100%" });
        gsap.set("#home .row img", { opacity: 0 });
      };

      const revealToSpan = () => {
        document.querySelectorAll(".reveal").forEach((el) => {
          if (!el.querySelector(".parent")) {
            let parent = document.createElement("span");
            let child = document.createElement("span");

            parent.classList.add("parent");
            child.classList.add("child");

            child.innerHTML = el.innerHTML;
            parent.appendChild(child);

            el.innerHTML = "";
            el.appendChild(parent);
          }
        });
      };

      const loaderAnimation = () => {
        var tl = gsap.timeline();
        tl.from("#loader .child span", {
          x: "100",
          delay: 0.2,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.easeInOut",
        })
          .to("#loader .parent .child", {
            y: "-100%",
            duration: 0.5,
            delay: 1,
            ease: "circ.easeInOut",
          })
          .to("#loader", {
            height: 0,
            duration: 1,
            ease: "circ.easeInOut",
          })
          .to("#green", {
            height: "100%",
            top: 0,
            duration: 1,
            delay: -0.8,
            ease: "circ.easeInOut",
          })
          .to("#green", {
            height: "0",
            duration: 1,
            delay: -0.3,
            ease: "circ.easeInOut",
            onComplete: function () {
              animateHomepage();
            },
          });
      };

      const animateHomepage = () => {
        let tl = gsap.timeline();
        tl.to("#nav a", {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "expo.easeInOut",
        })
          .to("#home .parent .child", {
            y: 0,
            stagger: 0.1,
            duration: 2,
            ease: "expo.easeInOut",
          })
          .to("#home .row img", {
            opacity: 1,
            delay: -0.5,
            ease: "expo.easeInOut",
          });
      };

      revealToSpan();
      valueSetters();
      loaderAnimation();
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="main w-full overflow-hidden" ref={container}>
      <CustomCursor /> {/* Add CustomCursor here to make it global */}
      <Loader />
      <div
        id="green"
        className="absolute top-full w-full h-0 bg-[#14CF93] z-99999"
      ></div>
      <Navigation />
      <HomeSection />
      <About />
      <FeaturedWork />
      <Contact />
    </div>
  );
}

export default App;