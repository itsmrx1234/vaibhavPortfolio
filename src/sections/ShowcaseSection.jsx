import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* First Project - Clickable Image & Title */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a
                href="https://typeracer-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/project1.png"
                  alt="MultiPlayer Typing Game"
                  className="cursor-pointer hover:opacity-90 transition"
                />
              </a>
            </div>
            <div className="text-content">
              <a
                href="https://typeracer-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="cursor-pointer hover:text-blue-400 transition">
                  Compete with your friends in a multiplayer typing game
                </h2>
              </a>
              <br/>
              <p className="text-white-50 md:text-xl">
                An app that lets you challenge friends in real-time typing
                competitions. Built with React, Node.js, and WebSockets for a
                smooth multiplayer experience.
              </p>
            </div>
          </div>

          {/* Other Projects (Not Clickable) */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.svg"
                  alt="Resume Tailoring Platform"
                />
              </div>
              <h2>Tailor your resume in seconds</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.webp" alt="Image Captioning Model" />
              </div>
              <h2>Image Captioner: See what images says to you</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
