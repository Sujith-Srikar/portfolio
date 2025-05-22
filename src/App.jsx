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
  const lenisRef = useRef(null); // Create a ref to hold the Lenis instance

  useEffect(() => {
    lenisRef.current = new Lenis(); // Assign the new Lenis instance to the ref

    function raf(time) {
      lenisRef.current.raf(time); // Call raf via the ref
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const valueSetters = () => {
        gsap.set(".reveal", { opacity: 0 }); // Hide elements before revealToSpan processes them
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
          delay: 0.1, // Changed from 0.2
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.easeInOut",
        })
          .to("#loader .parent .child", {
            y: "-100%",
            duration: 0.4, // Changed from 0.5
            delay: 0.7, // Changed from 1
            ease: "circ.easeInOut",
          })
          .to("#loader", {
            height: 0,
            duration: 0.8, // Changed from 1
            ease: "circ.easeInOut",
          })
          .to("#green", {
            height: "100%",
            top: 0,
            duration: 0.8, // Changed from 1
            delay: -1,
            ease: "circ.easeInOut",
          })
          .to("#green", {
            height: "0",
            duration: 0.8, // Changed from 1
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
            duration: 1.5, // Changed from 2
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
    <div id="main" className="main w-full overflow-hidden" ref={container}>
      <CustomCursor />
      <Loader />
      <div
        id="green"
        className="fixed top-full w-full h-0 bg-[#14CF93] z-50"
      ></div>
      <Navigation onNavigate={(targetSelector) => lenisRef.current?.scrollTo(targetSelector, { offset: 0, duration: 1.5, easing: (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)) })} />
      <HomeSection />
      <About />
      <FeaturedWork />
      <Contact />
    </div>
  );
}

export default App;