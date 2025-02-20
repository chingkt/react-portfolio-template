import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "OpenAI",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "Finetuning",
    "Ollama"
];

const labelsSecond = [
    "Terraform",
    "GitHub Actions",
    "AWS",
    "Kubernetes",
    "CircleCI",
    "Docker",
    "Azure",
    "Linux",
];

const labelsThird = [
    "Next.js",
    "TypeScript",
    "Spring Boot",
    "Flask",
    "Ruby on Rails",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Generative AI & LLM</h3>
                    <p>I stay relevant in the market by leveraging the latest AI models in my projects.
                        I have professional experience building enterprise grade GenAI-enabled solutions
                        to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps</h3>
                    <p>I wrote my bachelor thesis on Istio, a Cloud Native technology built on top of Kubernetes and Docker. I transformed my theoretical knowledge into practice by optimizing organisations' CI/CD pipeline and ensuring best practices in testing and deployment</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I built web applications professionally, designed and implemented industry-grade softwares
                        used by millions of users.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;