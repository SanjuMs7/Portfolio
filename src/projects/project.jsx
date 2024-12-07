import './project.css';
import projectPreview from '../assets/project-preview.png';
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  useEffect(() => {
    gsap.to(".project", {
      scrollTrigger: {
        trigger: ".project", 
        start: "top 80%", 
        end: "top 50%", 
        scrub: 0,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="project">
      <div className="projects">
        <div className="project-image-preview-div">
          <img src={projectPreview} alt="Project Preview" />
          <div className="hidden-div">
            <span className='heading'>Edusity</span>
            <p className="project-description">
              Edusity is a straightforward website crafted using React.js. It features clean design and user-friendly interfaces, showcasing essential information effectively while leveraging React's capabilities for a responsive and intuitive browsing experience.
            </p>
            <div className="project-button-div">
              <a href="https://github.com/SanjuMs7/Edusity" target="_blank" rel="noopener noreferrer">
                <button className="project-btn">Github</button>
              </a>
              <a href="https://sanjums7.github.io/Edusity/" target="_blank" rel="noopener noreferrer">
                <button className="project-btn" style={{ backgroundColor: "#2a2a2a", color: "white" }}>
                  Live Preview
                </button>
              </a>
            </div> 
        </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
