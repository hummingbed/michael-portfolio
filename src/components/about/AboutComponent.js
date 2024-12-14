import React from "react";
import "./About.css";  // Add any custom styles in this file
import { useSpring, animated } from "react-spring";
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa";

const About = () => {

    const animationProps = useSpring({
        opacity: 1,
        transform: "translateY(0)",
        from: { opacity: 0, transform: "translateY(20px)" },
      });

  return (
    <animated.div style={animationProps} className="about-container">
      {/* Header Section */}
      <section className="about-header text-center bg-primary text-white py-5">
        <div className="container">
          <h1>Hi, I'm Michael</h1>
          <p className="lead">A passionate Data Scientist and Web Developer</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-me py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Your Image"
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-6">
              <h2>About Me</h2>
              <p>
                I'm a data scientist with a background in programming, statistical
                analysis, and data-driven decision-making. I specialize in machine
                learning, data visualization, and web development. I enjoy working with
                big data and building insightful dashboards and predictive models.
              </p>
              <p>
                My goal is to use my skills to solve real-world problems and contribute
                to impactful projects that improve lives. I am constantly learning and
                exploring new technologies to stay at the cutting edge of data science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">My Skills</h2>
          <div className="row">
            {/* Skill 1 */}
            <div className="col-md-4 mb-3">
              <div className="skill-card text-center">
                <i className="bi bi-brush fs-1 mb-3"></i>
                <h4>Data Visualization</h4>
                <p>Creating compelling visual stories with data using tools like D3.js, Power BI, and Tableau.</p>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="col-md-4 mb-3">
              <div className="skill-card text-center">
                <i className="bi bi-laptop fs-1 mb-3"></i>
                <h4>Machine Learning</h4>
                <p>Building predictive models using Python, Scikit-Learn, TensorFlow, and Keras.</p>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="col-md-4 mb-3">
              <div className="skill-card text-center">
                <i className="bi bi-code-slash fs-1 mb-3"></i>
                <h4>Web Development</h4>
                <p>Developing full-stack web applications using React, Node.js, and Django.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience py-5">
        <div className="container">
          <h2 className="text-center mb-4">My Experience</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card shadow">
                <div className="card-body">
                  <h4>Data Scientist at XYZ Company</h4>
                  <p className="text-muted">January 2023 - Present</p>
                  <p>
                    Lead data analysis projects to drive business decisions, built machine learning
                    models for predictive analytics, and created dashboards for data-driven insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card shadow">
                <div className="card-body">
                  <h4>Junior Data Analyst at ABC Corp</h4>
                  <p className="text-muted">June 2021 - December 2022</p>
                  <p>
                    Worked on data cleaning, exploratory analysis, and visualizations to help teams
                    understand key trends in customer data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact py-5 bg-primary text-white">
        <div className="container text-center">
          <h2>Get In Touch</h2>
          <p>Feel free to contact me for collaboration or any inquiries!</p>
          <a href="mailto:your.email@example.com" className="btn btn-light">
            Send Me an Email
          </a>
        </div>
      </section>
    </animated.div>
  );
};

export default About;
