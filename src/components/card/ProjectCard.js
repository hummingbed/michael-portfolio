import React from "react";
import { useSpring, animated } from "react-spring";
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import "./ProjectCard.css"; 

const ProjectCard = ({ project }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
  });

  return (
    <animated.div style={animationProps} className="col-md-6 col-lg-4 mb-4">
      <div className="card shadow-sm h-100">
        <img src={project.image} alt={project.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <p className="text-muted">Created: {project.dateCreated}</p>
          <p>
            <strong>Categories:</strong>{" "}
            {project.categories.join(", ")}
          </p>
          <div className="d-flex justify-content-between">
            <a
              href={project.kaggleDataset}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> Dataset
            </a>
            <a
              href={project.externalLink}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> View Project
            </a>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default ProjectCard;
