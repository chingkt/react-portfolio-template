import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import sap from "../assets/images/sap.png"
import heyjobs from "../assets/images/heyjobs.png"
import tuBerlin from "../assets/images/tuBerlin.png"
import phytec from "../assets/images/phytec.jpeg"

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - present"
            iconStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            icon={
              <img 
                src={sap} 
                alt="SAP"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">STAR Program</h3>
            <h4 className="vertical-timeline-element-subtitle">SAP, Munich</h4>
            <p>
              Rotations every 6 months to tackle advanced Computer Science topics, like Business AI, Big Data, and Cloud Computing, in different teams
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            icon={
              <img 
                src={heyjobs} 
                alt="HeyJobs"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">HeyJobs, Berlin</h4>
            <p>
              Full Stack Development for the B2C Platform using Nextjs, Ruby on Rails, AWS, Terraform, and CircleCI
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            icon={<img
              src={tuBerlin}
              alt="TUBerlin"
              style={{
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                objectFit: 'cover',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />}
          >
            <h3 className="vertical-timeline-element-title">Student Tutor</h3>
            <h4 className="vertical-timeline-element-subtitle">Technical University of Berlin</h4>
            <p>
              Consultation hours on lectures of the Computer Science Undergraduate Program
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2018"
            iconStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            icon={
              <img 
                src={phytec} 
                alt="Phytec"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Technical Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Phytec, Mainz</h4>
            <p>
              Doubled the volume of daily data entry with automation scripts
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;