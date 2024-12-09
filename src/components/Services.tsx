import { brainwaveServices, brainwaveServicesIcons } from "../constants";

import Section from "./Section";
import Generating from "../ui/Generating";
import Heading from "../ui/Heading";

import { service1, service2, service3, check } from "../assets";
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
    <Section crosses id="how-to-use">
      <div className="container">
        <div className="services-title">
          <Heading
            title="Solutions"
            text=""
          />
        </div>
        <div className="relative">
          {/* Service 1 */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] services-element">
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
              {/* <p className="body-2 mb-[3rem] text-n-3">
                Cryenx unlocks the potential of AI-powered applications
              </p> */}
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
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* Service 2 */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden services-element">
              <div className="absolute inset-0">
                <img
                  src="src\assets\services\service.webp"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Comfy UI Workflows</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Whether you need art for a specific theme, style, or concept, our AI art services can be tailored to meet your unique requirements. We work closely with you to understand your vision and bring it to life through AI-generated art.

                </p>
              </div>
              <PhotoChatMessage />
            </div>

            {/* Service 3 */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] services-element">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Custom AI Modules</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                We develop custom AI modules for video and audio processing. These modules can handle tasks like video editing, audio enhancement, speech recognition, and more, enhancing the quality and efficiency of multimedia content.

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
                  src="src\assets\services\caim.webp"
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
                Our deployment services focus on scalability, allowing enterprises to handle increasing workloads without compromising performance. We ensure that the AI tools are optimized for your specific business needs.
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
                  src="src\assets\services\service-5.jpg"
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
                  src="src\assets\services\service-4.png"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Custom LLM Chatbots</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Our chatbots are designed to be versatile and can be customized for various industries and purposes. Whether you need a chatbot for e-commerce, healthcare, or education, we can tailor it to fit your specific needs.
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
                Our approach is highly customizable, allowing us to develop pipelines that align perfectly with your business objectives and workflows. Whether you're in gaming, finance, or another industry, we can create tailored AI solutions to boost your operations.
                </p>
              </div>
              {/* <PhotoChatMessage /> */}
            </div>

            {/* Service 7 */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] services-element">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">AI Wrappers</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Our AI wrappers often involve integrating APIs from various AI models to build comprehensive solutions. This allows for a seamless user experience and leverages the strengths of different models.
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
                  src="src\assets\services\aiw.png"
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
