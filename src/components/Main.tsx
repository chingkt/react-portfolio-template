import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/64973878" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/chingkt" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tangchingkei/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ching Kei Tang</h1>
          <p>Software Engineer</p>
          <h4>Computer Science M.Sc. @ Technical University of Munich</h4>
          <h4>Computer Science B.Sc. @ Technical University of Berlin</h4>
          <div className="mobile_social_icons">
            <a href="https://github.com/chingkt" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tangchingkei/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;