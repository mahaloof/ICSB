import React from 'react';
import './About.css';
import { FaWifi, FaLock, FaLink, FaRocket, FaUsers, FaGlobe, FaMicrochip } from "react-icons/fa";
// Added icons for extra sections
import about_img from '../../assets/about.png';
import iot_img from '../../assets/iot.jpeg';
import cyber_security_img from '../../assets/cybersecurity.jpeg';
import blockchain_img from '../../assets/blockchain.jpeg';

const About = () => {
  return (
    <div className='about'>
      {/* Intro Section */}
      <div className="about-content">
        <div className="about-left">
          <img src={about_img} alt="About ICSB" className='about-img' />
        </div>
        <div className="about-right">
          <h2>About <span>ICSB</span></h2>
          <p>
            ICSB (IoT, Cyber Security & Blockchain) at P.A. College of Engineering is a center of excellence 
            committed to building future-ready engineers through innovation, research, and industry exposure.
          </p>

          <h3>Our Vision</h3>
          <p>
            To be a global hub of excellence in IoT, Cyber Security, and Blockchain, 
            producing ethical leaders who drive technological and societal progress.
          </p>

          <h3>Our Mission</h3>
          <ul>
            <li>Deliver cutting-edge education with strong ethical foundations.</li>
            <li>Encourage creativity, leadership, and collaboration through research and partnerships.</li>
            <li>Empower students to innovate and embrace emerging technologies for real-world impact.</li>
          </ul>
        </div>
      </div>

      {/* Specializations Cards */}
      <div className="cards-container">
        <div className="card">
          <FaWifi className="card-icon" />
          <img src={iot_img} alt="IoT" className="card-img" />
          <h3>IoT</h3>
          <p>Connecting devices, data, and people to enable smarter living and industry automation.</p>
        </div>
        <div className="card">
          <FaLock className="card-icon" />
          <img src={cyber_security_img} alt="Cyber Security" className="card-img" />
          <h3>Cyber Security</h3>
          <p>Safeguarding systems and data through ethical hacking, encryption, and secure design.</p>
        </div>
        <div className="card">
          <FaLink className="card-icon" />
          <img src={blockchain_img} alt="Blockchain" className="card-img" />
          <h3>Blockchain</h3>
          <p>Revolutionizing trust with decentralized, transparent, and secure digital ecosystems.</p>
        </div>
      </div>

      {/* Section 1: Why ICSB */}
      <div className="why-icsb">
        <h2>Why Choose ICSB?</h2>
        <div className="why-grid">
          <div className="why-card">
            <FaRocket className="why-icon" />
            <h3>Innovation Labs</h3>
            <p>Hands-on projects and hackathons to build futuristic solutions.</p>
          </div>
          <div className="why-card">
            <FaUsers className="why-icon" />
            <h3>Career Boost</h3>
            <p>Workshops, certifications, and real-world exposure to industry tools.</p>
          </div>
          <div className="why-card">
            <FaGlobe className="why-icon" />
            <h3>Community Impact</h3>
            <p>Projects that address real challenges and benefit society.</p>
          </div>
        </div>
      </div>

      {/* Section 4: Statistics */}
      <div className="stats-section">
        <h2>Our Impact in Numbers</h2>
        <div className="stats-grid">
          <div className="stat">
            <h3>150+</h3>
            <p>Students Enrolled</p>
          </div>
          <div className="stat">
            <h3>20+</h3>
            <p>Industry Collaborations</p>
          </div>
          <div className="stat">
            <h3>15+</h3>
            <p>Workshops Organized</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Invited Session</p>
          </div>
        </div>
      </div>

      {/* Section 6: Fun Facts / Did You Know */}
      <div className="funfacts-section">
        <h2>Did You Know?</h2>
        <div className="funfacts-grid">
          <div className="funfact">
            <FaMicrochip className="funfact-icon" />
            <p>By 2030, IoT devices will exceed <strong>30 billion</strong> worldwide 🌐</p>
          </div>
          <div className="funfact">
            <FaLink className="funfact-icon" />
            <p>The first blockchain was used in <strong>Bitcoin (2009)</strong> ⛓️</p>
          </div>
          <div className="funfact">
            <FaLock className="funfact-icon" />
            <p>Cybercrime damages may reach <strong>$10 trillion</strong> by 2025 🔒</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
