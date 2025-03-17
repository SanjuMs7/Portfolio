import './project.css';
import projectGithubRepo from '../assets/git-icon.png'
import livePreviewIcon from '../assets/plus-icon.png'
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Project({projectName,projectDescription,projectPreview,gitRepoLink,livePreviewLink}) {
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
            <span className='heading'>{projectName}</span>
            <p className="project-description">
              {projectDescription}
            </p>
            <div className="project-button-div">
              {/* <a href={gitRepoLink}><img src={projectGithubRepo} alt=''/></a>
              <a href={livePreviewLink} target='_blank'><img src={livePreviewIcon} alt="" /></a> */}
            </div> 
        </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
