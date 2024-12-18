import { useParams } from "react-router-dom";
import { benefits } from "../constants";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero/Hero"; // Importing the Hero component
import VideoCarousel from "./VideoCarousel";

import Section from "./Section";
import Heading from "../ui/Heading";

import { MouseParallax } from "react-just-parallax";

import { collabApps, collabContent, collabText } from "../constants";

import { brainwaveSymbol, check } from "../assets";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import { useGSAP } from "@gsap/react";
import {
  animateScrollGsap,
  animateTitleScrollGsap,
  animateScrollMultipleGsap,
} from "../utils/animations";

// Function to decode Base64 URL
function decodeBase64Url(encodedUrl: string): string {
  const decodedData = atob(encodedUrl);
  return decodedData;
}

function ProjectDetail() {
  const { id } = useParams();
  const project = id ? benefits.find(benefit => benefit.id === id) : null;

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

  // Base64 encoded URL
  const encodedUrl = "aHR0cHM6Ly9jcnllbngtYm90Lm5ldGxpZnkuYXBwLw==";
  const decodedUrl = decodeBase64Url(encodedUrl);

  // Returned JSX
  return (
    <>
      <Header />
      <Hero project={project} /> {/* Adding the Hero component with project prop */}
      {project ? (
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
              <div className="button-animated inline-block">
                <a href="#" className="button">Learn More</a>
              </div>
            </div>
            {/* Apps circle */}
            <div className="mt-16 lg:ml-auto xl:w-[38rem] lg:mt-10">
              <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                <MouseParallax strength={0.025} isAbsolutelyPositioned>
                  <div className="flex w-60 aspect-square border border-n-6 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 collaboration-brainwave">
                    <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                      <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                        <img
                          src={brainwaveSymbol}
                          width={48}
                          height={48}
                          alt="Brainwave"
                        />
                      </div>
                    </div>
                  </div>
                </MouseParallax>

                {/* App Icons */}
                <MouseParallax strength={0.01}>
                  <ul>
                    {project.collabApps.map((app, i) => (
                      <li
                        key={app.id}
                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${i * 45} collaboration-apps`}
                      >
                        <div
                          className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${i * 45}`}
                        >
                          <img
                            src={app.icon}
                            className="m-auto"
                            width={app.width}
                            height={app.height}
                            alt={app.title}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </MouseParallax>

                {/* <LeftCurve /> */}
                <RightCurve />
              </div>
            </div>
          </div>
        </Section>
      ) : (
        <Section crosses id="about">
          <div className="container lg:flex">
            <div className="max-w-[25rem]">
              <div className="collaboration-title">
                <Heading
                  className="h2 mb-4 md:mb-8 md:!text-left"
                  title="Default Project Title"
                ></Heading>
              </div>
              <ul className="max-w-[25rem] mb-8 lg:mb-14">
                <p className="body-2 mt-3 text-n-4">Default project description.</p>
              </ul>
              <div className="button-animated inline-block">
                <a href="#" className="button">Learn More</a>
              </div>
            </div>
            {/* Apps circle */}
            <div className="mt-16 lg:ml-auto xl:w-[38rem] lg:mt-32">
              <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                <MouseParallax strength={0.025} isAbsolutelyPositioned>
                  <div className="flex w-60 aspect-square border border-n-6 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 collaboration-brainwave">
                    <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                      <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                        <img
                          src={brainwaveSymbol}
                          width={48}
                          height={48}
                          alt="Brainwave"
                        />
                      </div>
                    </div>
                  </div>
                </MouseParallax>

                {/* App Icons */}
                <MouseParallax strength={0.01}>
                  <ul>
                    {collabApps.map((app, i) => (
                      <li
                        key={app.id}
                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${i * 45} collaboration-apps`}
                      >
                        <div
                          className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${i * 45}`}
                        >
                          <img
                            src={app.icon}
                            className="m-auto"
                            width={app.width}
                            height={app.height}
                            alt={app.title}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </MouseParallax>

                {/* <LeftCurve /> */}
                <RightCurve />
              </div>
            </div>
          </div>
        </Section>
      )}
      <VideoCarousel />
      <iframe
        src={decodedUrl}
        width="100%"
        height="800px"
        style={{
          minHeight: '800px',
          maxHeight: '1000px',
          width: '100%',
          height: 'auto',
          border: 'none',
          overflow: 'hidden'
        }}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        title="Responsive Iframe"
      ></iframe>
      <Footer />
    </>
  );
}

export default ProjectDetail;