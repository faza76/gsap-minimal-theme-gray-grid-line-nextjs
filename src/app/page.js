'use client';
import { useEffect } from "react";
// import Image from "next/image";
import styles from "./page.module.css";

import Copy from "@/components/Copy";
import ParallaxImage from "@/components/ParallaxImage";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ReactLenis, useLenis } from "lenis/react";

import { projects } from "./projects";


export default function Home() {

  useEffect(() => {
    // gsap.registerPlugin(SplitText);

    // // Setup SplitText for all text elements
    // const textElements = document.querySelectorAll("h1, h2, a, a p");
    // textElements.forEach((element) => {
    //   SplitText.create(element, {
    //     type: "lines",
    //     linesClass: "line",
    //   });

    //   const lines = element.querySelectorAll(".line");
    //   lines.forEach((line) => {
    //     const textContent = line.textContent;
    //     line.innerHTML = `<span>${textContent}</span>`;
    //   })
    // });

    // Setup GSAP animations
    // const tl = gsap.timeline();

    gsap.to(".sidebar .divider", {
      scaleY: "100%",
      duration: 1,
      ease: "power3.inOut",
      delay: 1.25,
      scrollTrigger: {
        trigger: ".sidebar .divider",
        start: "top 85%",
        once: false,
      },
    });

    gsap.to(
      ["nav .divider", ".site-info .divider"],
      {
        scaleX: "100%",
        duration: 1,
        stagger: 0.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ["nav .divider", ".site-info .divider"],
          start: "top 85%",
          once: false,
        },
      },
      "<"
    );

    gsap.utils.toArray(".img-left").forEach((img) => {
      gsap.set(img, {
        clipPath: "polygon(100% 0, 100% 0%, 100% 0, 100% 0)",
      });
  
      gsap.to(img,{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
        },
      })
    });

    gsap.utils.toArray(".img-right").forEach((img) => {
      gsap.set(img, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
      });

      gsap.to(img,{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        delay: 0.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
        },
      })
    });

    // gsap.set(".img", {
    //   clipPath: "polygon(100% 0, 100% 0%, 100% 0, 100% 0)",
    // });

    // gsap.to(".img",{
    //   clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //   duration: 1.5,
    //   ease: "power3.inOut",
    //   scrollTrigger: {
    //     trigger: ".img",
    //     start: "top 85%",
    //   },
    // })
  
    // tl.to(
    //   ".logo",
    //   {
    //     scale: 1,
    //     duration: 1,
    //     ease: "power4.inOut",
    //   },
    //   "<"
    // );
  
    // tl.to(
    //   [".logo-name a span", ".links a span, .links p span", ".cta a span"],
    //   {
    //     y: "0%",
    //     duration: 1,
    //     stagger: 0.1,
    //     ease: "power4.out",
    //     delay: 0.5,
    //   },
    //   "<"
    // );
  
    // tl.to(
    //   [".header span", ".site-info span", ".hero-footer span"],
    //   {
    //     y: "0%",
    //     duration: 1,
    //     stagger: 0.1,
    //     ease: "power4.out",
    //   },
    //   "<"
    // );
    

  }, []);
  
  return (
    <ReactLenis root>
   <div className="app">
    <section className="hero">
      <div className="hero-bg"></div>
        <nav>
          <div className="logo-name">
            <Copy delay={0.5}>
              <a href="#">Omno</a>
            </Copy>
          </div>

          <div className="nav-items">
            <div className="links">
              <Copy delay={0.5}>
                <a href="#">Portfolio</a>
              </Copy>
              <p>/</p>
              <Copy delay={0.5}>
                <a href="#">About</a>
              </Copy>
            </div>

            <div className="cta">
              <Copy delay={0.5}>
                <a href="#">Contact Us</a>
              </Copy>
            </div>
          </div>

          <div className="divider"></div>
        </nav>

        <div className="sidebar">
          <div className="logo">
            <span>Faza</span>
            {/* <img src="potraits/potrait1.jpg" alt="" /> */}
          </div>

          <div className="divider"></div>
        </div>

        <div className="header">
          <Copy>
            <h1>Visual engineering for modern brands</h1>
          </Copy>
        </div>

        <div className="site-info">
          <Copy delay={0.5}>
            <h2>A design team focused on brands websites, apps and products</h2>
          </Copy>

          <div className="divider"></div>

          <div className="site-info-copy">
            <Copy delay={0.7}>
              <p>Award-winning creative studio</p>
            </Copy>
            <Copy delay={0.7}>
              <p>Operating since 2019</p>
            </Copy>
          </div>
        </div>

        <div className="hero-footer">
          <h2>Watch showreel</h2>
        </div>
    </section>
    <section className="work">
      <div className="container">
        <div className="work-header">
          <Copy>
            <p>Our work</p>
          </Copy>
        </div>

        <div className="divider"></div>

        <div className="projects">
          <div className="project-col">
                {projects
                  .filter((project) => project.column === 1)
                  .map((project) => (
                    // <Link to="/work" key={project.id}>
                      <div className="project" key={project.id}>
                        <div className="project-img">
                          <div className="img-left">
                            <ParallaxImage src={project.image} alt="Project Thumbnail" />
                          </div>
                          {/* <img src={project.image} alt="Project Thumbnail" /> */}
                        </div>
                        <div className="project-name">
                          <h2>{project.title}</h2>
                        </div>
                        <div className="project-description">
                          <p>{project.description}</p>
                        </div>
                      </div>
                    // </Link>
                  ))}
              </div>

              <div className="project-col">
                {projects
                  .filter((project) => project.column === 2)
                  .map((project) => (
                    // <Link to="/work" key={project.id}>
                      <div className="project" key={project.id}>
                        <div className="project-img">
                          <div className="img-right">
                            <ParallaxImage src={project.image} alt="Project Thumbnail" />
                          </div>
                          {/* <img src={project.image} alt="Project Thumbnail" /> */}
                        </div>
                        <div className="project-name">
                          <h2>{project.title}</h2>
                        </div>
                        <div className="project-description">
                          <p>{project.description}</p>
                        </div>
                      </div>
                    // </Link>
                  ))}
              </div>
        </div>
      </div>
    </section>
    <section className="about"></section>
    <section className="banner"></section>
    <section className="footer"></section>
   </div>
   </ReactLenis>
  );
}
