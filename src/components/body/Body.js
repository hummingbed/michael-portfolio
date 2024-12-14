import React from "react";
import "./Body.css";
import ProjectCard from "../card/ProjectCard";


const Body = () => {

  const projects = [
    {
      name: "Data Visualization with D3.js",
      description:
        "This project uses D3.js to visualize various datasets in interactive graphs.",
      dateCreated: "Jan 2024",
      categories: ["Data Visualization", "JavaScript", "Web Development"],
      image: "https://via.placeholder.com/400x250", // Replace with actual image
      kaggleDataset: "https://www.kaggle.com/dataset/xyz",
      externalLink: "https://github.com/username/project1",
    },
    {
      name: "Machine Learning with Scikit-Learn",
      description:
        "A machine learning project using scikit-learn for classification tasks.",
      dateCreated: "Feb 2024",
      categories: ["Machine Learning", "Python", "Data Science"],
      image: "https://via.placeholder.com/400x250", // Replace with actual image
      kaggleDataset: "https://www.kaggle.com/dataset/abc",
      externalLink: "https://github.com/username/project2",
    },
    {
      name: "Machine Learning with Scikit-Learn",
      description:
        "A machine learning project using scikit-learn for classification tasks.",
      dateCreated: "Feb 2024",
      categories: ["Machine Learning", "Python", "Data Science"],
      image: "https://via.placeholder.com/400x250", // Replace with actual image
      kaggleDataset: "https://www.kaggle.com/dataset/abc",
      externalLink: "https://github.com/username/project2",
    },
    {
      name: "Machine Learning with Scikit-Learn",
      description:
        "A machine learning project using scikit-learn for classification tasks.",
      dateCreated: "Feb 2024",
      categories: ["Machine Learning", "Python", "Data Science"],
      image: "https://via.placeholder.com/400x250", // Replace with actual image
      kaggleDataset: "https://www.kaggle.com/dataset/abc",
      externalLink: "https://github.com/username/project2",
    },
    {
      name: "Machine Learning with Scikit-Learn",
      description:
        "A machine learning project using scikit-learn for classification tasks.",
      dateCreated: "Feb 2024",
      categories: ["Machine Learning", "Python", "Data Science"],
      image: "https://via.placeholder.com/400x250", // Replace with actual image
      kaggleDataset: "https://www.kaggle.com/dataset/abc",
      externalLink: "https://github.com/username/project2",
    },
    {
      name: "Machine Learning with Scikit-Learn",
      description:
        "A machine learning project using scikit-learn for classification tasks.",
      dateCreated: "Feb 2024",
      categories: ["Machine Learning", "Python", "Data Science"],
      image: "https://via.placeholder.com/400x250", // Replace with actual image
      kaggleDataset: "https://www.kaggle.com/dataset/abc",
      externalLink: "https://github.com/username/project2",
    },
    {
      name: "Machine Learning with Scikit-Learn",
      description:
        "A machine learning project using scikit-learn for classification tasks.",
      dateCreated: "Feb 2024",
      categories: ["Machine Learning", "Python", "Data Science"],
      image: "https://via.placeholder.com/400x250", // Replace with actual image
      kaggleDataset: "https://www.kaggle.com/dataset/abc",
      externalLink: "https://github.com/username/project2",
    },
    {
      name: "Machine Learning with Scikit-Learn",
      description:
        "A machine learning project using scikit-learn for classification tasks.",
      dateCreated: "Feb 2024",
      categories: ["Machine Learning", "Python", "Data Science"],
      image: "https://via.placeholder.com/400x250", // Replace with actual image
      kaggleDataset: "https://www.kaggle.com/dataset/abc",
      externalLink: "https://github.com/username/project2",
    },
    {
      name: "Machine Learning with Scikit-Learn",
      description:
        "A machine learning project using scikit-learn for classification tasks.",
      dateCreated: "Feb 2024",
      categories: ["Machine Learning", "Python", "Data Science"],
      image: "https://via.placeholder.com/400x250", // Replace with actual image
      kaggleDataset: "https://www.kaggle.com/dataset/abc",
      externalLink: "https://github.com/username/project2",
    },
    // Add more projects here...
  ];


  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Grid - Scrollable */}
        <div className="col-lg-8 col-md-7 col-sm-12 mb-4 scrollable-left">
          <div className="row">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Right Grid - Sticky Categories */}
        <div className="col-lg-4 col-md-5 col-sm-12 sticky-right">
          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search portfolio..."
            />
          </div>

          {/* Categories */}
          <div className="category-container mb-3">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#data-visualization" className="text-white text-decoration-none">
                  <i className="bi bi-bar-chart-line me-2"></i> Data Visualization
                </a>
              </li>
              <li>
                <a href="#machine-learning" className="text-white text-decoration-none">
                  <i className="bi bi-gear-fill me-2"></i> Population Analysis
                </a>
              </li>
              <li>
                <a href="#web-development" className="text-white text-decoration-none">
                  <i className="bi bi-laptop me-2"></i> Sales Analysis
                </a>
              </li>
              <li>
                <a href="#data-analysis" className="text-white text-decoration-none">
                  <i className="bi bi-table me-2"></i> Forcasting
                </a>
              </li>
            </ul>
          </div>


          {/* Featured Projects */}
          <div className="category-container mb-3">
            <h5>Technologies</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#data-visualization" className="text-white text-decoration-none">
                  <i className="bi bi-bar-chart-line me-2"></i> Excel (xlsx | csv)
                </a>
              </li>
              <li>
                <a href="#machine-learning" className="text-white text-decoration-none">
                  <i className="bi bi-gear-fill me-2"></i> Python
                </a>
              </li>
              <li>
                <a href="#web-development" className="text-white text-decoration-none">
                  <i className="bi bi-laptop me-2"></i> Power Bi
                </a>
              </li>
              <li>
                <a href="#data-analysis" className="text-white text-decoration-none">
                  <i className="bi bi-table me-2"></i> SQL
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Body;
