import { brainwaveServices, brainwaveServicesIcons } from "../constants";

import Section from "./Section";
import Generating from "../ui/Generating";
import Heading from "../ui/Heading";

import { service1, service2, service3, check, service4,
  service5,
  service,
  aiw,
  caim } from "../assets";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";

import { useGSAP } from "@gsap/react";
import {
  animateTitleScrollGsap,
  animateScrollMultipleGsap,
} from "../utils/animations";

function Services() {
  useGSAP(() => {
    // Animation for the title
    animateTitleScrollGsap({ target: ".services-title" });

    // Animation for benefits elements
    animateScrollMultipleGsap({
      target: ".services-element",
      animationProps: {
        opacity: 0,
        y: 100,
        ease: "power2.in",
      },
    });
  });

  // Returned JSX
  return (
    <Section crosses id="solutions">
      <div className="container">
        <div className="services-title">
          <Heading
            title="The Solutions"
            text=""
          />
        </div>
        <div className="relative">
          {/* Service 1 */}
          {/* <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] services-element">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="Smartest AI"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Services We Provide</h4>
              <ul className="body-2">
                {brainwaveServices.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute inset-4 top-auto border border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div> */}

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* Service 2 */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden services-element">
              <div className="absolute inset-0">
                <img
                  src={service}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Comfy UI Workflows</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Say goodbye to clunky interfaces and complicated processes. Our Comfy UI Workflows are designed to simplify how you interact with your data and tools, making every click seamless and every workflow intuitive. Built with user-first design principles, our solution ensures your team can focus on results—not figuring out the tech.
                </p>
              </div>
              <PhotoChatMessage />
            </div>

            {/* Service 3 */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] services-element">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Custom AI Modules</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Your business is unique, and your AI should be too. Our Custom AI Modules are built from the ground up to meet your specific needs. Whether it’s streamlining workflows, improving decision-making, or unlocking new opportunities, we design AI solutions that align perfectly with your goals.
No cookie-cutter approaches—just tailored intelligence that drives real results.

                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-center rounded-2xl  ${i === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"}`}
                    >
                      <div
                        className={`${i === 2 && "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"}`}
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={caim}
                  className="w-full h-full object-cover"
                  width={512}
                  height={400}
                  alt="Scary robot"
                />
                {/* <VideoChatMessage /> */}
                {/* <VideoBar /> */}
              </div>
            </div>

            {/* Service 4 */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] services-element">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">AI Enterprise Deployment</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Scaling AI solutions for enterprise success doesn’t have to be complex. Our AI Enterprise Deployment services ensure a seamless transition from concept to implementation, empowering your business to leverage AI at scale.
We handle the heavy lifting—from integration with existing systems to ensuring compliance—so your team can focus on the big picture. The result? AI that works seamlessly across your organization, driving efficiency, innovation, and results.

                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-center rounded-2xl  ${i === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"}`}
                    >
                      <div
                        className={`${i === 2 && "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"}`}
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service5}
                  className="w-full h-full object-cover"
                  width={512}
                  height={400}
                  alt="Scary robot"
                />
                {/* <VideoChatMessage /> */}
                {/* <VideoBar /> */}
              </div>
            </div>

            {/* Service 5 */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden services-element">
              <div className="absolute inset-0">
                <img
                  src={service4}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Custom LLM Chatbots</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Transform the way you engage with your audience using Custom LLM Chatbots tailored to your brand. Built on advanced large language models, our chatbots are designed to deliver personalized, human-like interactions that drive engagement, streamline support, and elevate user experiences.
From answering complex queries to automating repetitive tasks, our chatbots integrate seamlessly with your systems and evolve with your needs, ensuring your brand stays ahead of the curve.

                </p>
              </div>
              {/* <PhotoChatMessage /> */}
            </div>

              {/* Service 6 */}
              <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden services-element">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Generative AI for Enterprises</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Unlock new possibilities with Generative AI tailored for enterprise-scale challenges. Our solutions go beyond automation—delivering high-end assets like stunning visuals, compelling copy, and data-rich insights that have generated millions in value for our clients.
From automating content creation to crafting personalized customer experiences, our Generative AI tools empower your team to work smarter, innovate faster, and drive exceptional results. Seamlessly integrated into your operations, our enterprise-grade AI amplifies creativity, efficiency, and ROI.

                </p>
              </div>
              {/* <PhotoChatMessage /> */}
            </div>

            {/* Service 7 */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] services-element">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">AI Wrappers</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Transform your existing tools into AI-powered powerhouses with our AI Wrappers. Without overhauling your systems, we add a smart layer of AI that enhances functionality, streamlines operations, and unlocks new capabilities.
From optimizing workflows to automating repetitive tasks, AI Wrappers seamlessly integrate with your software to deliver immediate value and efficiency. It’s your current tools—supercharged with intelligence.

                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-center rounded-2xl  ${i === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"}`}
                    >
                      <div
                        className={`${i === 2 && "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"}`}
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={aiw}
                  className="w-full h-full object-cover"
                  width={512}
                  height={400}
                  alt="Scary robot"
                />
                {/* <VideoChatMessage /> */}
                {/* <VideoBar /> */}
              </div>
            </div>

          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
}

export default Services;
