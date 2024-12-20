import React, { useEffect } from 'react';
import Footer from "../Footer";
import Hero from "../Hero/Hero"; // Importing the Hero component
import VideoCarousel from "../VideoCarousel";

import Section from "../Section";
import Heading from "../../ui/Heading";

import { MouseParallax } from "react-just-parallax";

import { collabApps, collabContent, collabText } from "../../constants";
import { benefits } from "../../constants/index"; // Import benefits array

import { brainwaveSymbol, check } from "../../assets";
import { LeftCurve, RightCurve } from "../../design/Collaboration";
import { useGSAP } from "@gsap/react";
import {
  animateScrollGsap,
  animateTitleScrollGsap,
  animateScrollMultipleGsap,
} from "../../utils/animations";
import Button from "../../ui/Button";
import { cryenx } from "../../assets";
import { hightlightsSlidesProject2 } from "../../constants";

function Project2() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    // Animation for the title
    animateTitleScrollGsap({
      target: ".collaboration-title",
      animationProps: {
        x: -100,
      },
    });

    // Animation for CTA button
    animateScrollGsap({
      target: ".button-animated",
      animationProps: {
        scale: 2,
        opacity: 0,
        ease: "power2.in",
      },
    });

    // Animation for app logos
    animateScrollMultipleGsap({
      target: ".collaboration-apps",
      animationProps: {
        scale: 1.15,
        opacity: 0,
        ease: "power3.in",
      },
    });

    // Animation for Brainwave logo
    animateScrollGsap({
      target: ".collaboration-brainwave",
      animationProps: {
        scale: 1.3,
        opacity: 0,
        ease: "power3.in",
        delay: 0.5,
      },
    });
  });

  const project = benefits.find(benefit => benefit.projectName === "photos-animator");

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
     <header className="fixed top-0 l-0 w-full z-50 border-b border-n-6 bg-n-8/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 py-4">
          <a className="block w-[12rem] xl:mr-8" href="https://www.cryenx.com/">
            <img src={cryenx} width={190} height={40} alt="Cryenx Labs" />
          </a>
          <Button href="https://www.cryenx.com/contact">
            Contact us
          </Button>
        </div>
      </header>
      <Hero project={project} />
      <Section crosses id="about">
        <div className="container lg:flex">
          <div className="max-w-[25rem]">
            <div className="collaboration-title">
              <Heading
                className="h2 mb-4 md:mb-8 md:!text-left"
                title={project.title}
              ></Heading>
            </div>
            <ul className="max-w-[25rem] mb-8 lg:mb-14">
              <p className="body-2 mt-3 text-n-4">{project.text}</p>
            </ul>
            {/* <div className="button-animated inline-block">
              <a href="#" className="button">Learn More</a>
            </div> */}
          </div>
          {/* Apps circle */}
          <div className="mt-16 lg:ml-auto xl:w-[38rem] lg:mt-10">
            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
              

              {/* App Icons */}

              {/* <LeftCurve /> */}
              <RightCurve />
            </div>
          </div>
        </div>
      </Section>
     
      <div className="container mx-auto text-center mt-24 mb-12">
        <h2 className="text-4xl font-bold text-white">How AI Video Generator works</h2>
      </div>
      <VideoCarousel projectVideos={hightlightsSlidesProject2} />
      <div className="container mx-auto text-center mt-36 mb-36">
        <div className="bg-n-7 text-white px-6 py-3 rounded-full inline-block">
          Demo Coming Soon
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project2;