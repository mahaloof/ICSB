import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import iot_img from '../../assets/iot.jpeg'; // Corrected path for IoT image
import cyber_security_img from '../../assets/cybersecurity.jpeg'; // Corrected path for Cyber Security image
import blockchain_img from '../../assets/blockchain.jpeg'; // Corrected path for Blockchain image
import iot_detailed_img from '../../assets/iot.jpeg'; // Corrected path for IoT Detailed image
import cyber_security_detailed_img from '../../assets/cybersecurity.jpeg'; // Corrected path for Cybersecurity Detailed image

const About = () => {
  return (
    <div className='about'>
      <div className="about-content">
        <div className="about-left">
          <img src={about_img} alt='' className='about-img' />
        </div>
        <div className="about-right">
          <h3>ICSB</h3>
          <h2>Our Mission & Vision</h2>
          <h3>DEPARTMENT VISION</h3>
          <ul>
            <li>
              <p>To be a leading centre of excellence in the field of Computer Science and Engineering, with
                specialization in IoT, Cyber Security, and Blockchain Technology, dedicated to developing innovative,
                ethically grounded professionals who can contribute to global technological advancement.</p>
            </li>
          </ul>
          <h3>DEPARTMENT MISSION</h3>
          <ul>
            <li>
              <p>To provide comprehensive education in Computer Science & Engineering with specialization in
                IoT, Cyber Security, and Blockchain Technology, equipping students with the knowledge, skills,
                and ethical foundation to excel in their careers.</p>
            </li>
            <li>
              <p>To foster a collaborative and inclusive learning environment that encourages creativity, critical
                thinking, and leadership through interdisciplinary research and partnerships with industry,
                academia, and government.</p>
            </li>
            <li>
              <p>To nurture entrepreneurial abilities and empower students to embrace evolving technologies,
                contributing to technological progress and societal welfare, while ensuring competence across
                various aspects of Computer Science and Engineering.</p>
            </li>
          </ul>
        </div>
      </div>
      {/* Add Cards Section */}
      <div className="cards-container">
        <div className="card">
          <img src={iot_img} alt="IoT" className="card-img" />
          <h3>IoT</h3>
          <p>Explore the world of Internet of Things, connecting devices and enabling smarter solutions.</p>
        </div>
        <div className="card">
          <img src={cyber_security_img} alt="Cyber Security" className="card-img" />
          <h3>Cyber Security</h3>
          <p>Learn how to protect systems, networks, and data from cyber threats and vulnerabilities.</p>
        </div>
        <div className="card">
          <img src={blockchain_img} alt="Blockchain" className="card-img" />
          <h3>Blockchain</h3>
          <p>Dive into the decentralized world of blockchain technology and its transformative potential.</p>
        </div>
      </div>
      
      {/* New IoT Section */}
      <div className="iot-section">
        <div className="iot-image">
          <img src={iot_detailed_img} alt="IoT Detailed" className="detailed-img" />
        </div>
        <div className="iot-content">
          <h2>IoT (Internet of Things)</h2>
          <div className="iot-definition">
            <h3>What is IoT?</h3>
            <p>IoT connects everyday physical objects to the internet, enabling them to collect, send, and receive data for smarter operations and automation.</p>
          </div>
          <div className="iot-highlights">
            <h3>Key Features</h3>
            <ul>
              <li>Smart device integration and automation</li>
              <li>Real-time data collection and analysis</li>
              <li>Cloud-based monitoring and control</li>
              <li>Wireless connectivity (Wi-Fi, Bluetooth, etc.)</li>
            </ul>
          </div>
          <div className="iot-applications">
            <h3>Applications</h3>
            <div className="application-grid">
              <div>
                <strong>Smart Homes</strong>
                <p>Automated lighting, security, appliances</p>
              </div>
              <div>
                <strong>Healthcare</strong>
                <p>Patient monitoring, smart medical devices</p>
              </div>
              <div>
                <strong>Industry</strong>
                <p>Factory automation, predictive maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Cybersecurity Section */}
      <div className="cyber-section">
        <div className="cyber-image">
          <img src={cyber_security_detailed_img} alt="Cybersecurity Detailed" className="detailed-img" />
        </div>
        <div className="cyber-content">
          <h2>Cybersecurity</h2>
          <div className="cyber-definition">
            <h3>What is Cybersecurity?</h3>
            <p>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks, ensuring the confidentiality, integrity, and availability of data.</p>
          </div>
          <div className="cyber-highlights">
            <h3>Key Features</h3>
            <ul>
              <li>Network & System Security</li>
              <li>Ethical Hacking & Penetration Testing</li>
              <li>Cryptography & Data Protection</li>
              <li>Security Operations & Incident Response</li>
            </ul>
          </div>
          <div className="cyber-applications">
            <h3>Career Paths</h3>
            <div className="application-grid">
              <div>
                <strong>Security Analyst</strong>
                <p>Threat monitoring and defense</p>
              </div>
              <div>
                <strong>Ethical Hacker</strong>
                <p>Vulnerability assessment</p>
              </div>
              <div>
                <strong>Security Engineer</strong>
                <p>Infrastructure protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blockchain Section */}
      <div className="blockchain-section">
        <div className="blockchain-content">
          <h2>Blockchain Technology</h2>
          <div className="blockchain-definition">
            <h3>What is Blockchain?</h3>
            <p>Blockchain is a decentralized digital ledger that stores information in a secure, transparent, and immutable way across a network of computers.</p>
          </div>
          <div className="blockchain-highlights">
            <h3>Key Features</h3>
            <ul>
              <li>Decentralized & Transparent Systems</li>
              <li>Smart Contracts & DApps Development</li>
              <li>Cryptographic Security</li>
              <li>Distributed Consensus Mechanisms</li>
            </ul>
          </div>
          <div className="blockchain-applications">
            <h3>Applications</h3>
            <div className="application-grid">
              <div>
                <strong>Finance</strong>
                <p>Digital currencies and DeFi</p>
              </div>
              <div>
                <strong>Supply Chain</strong>
                <p>Product tracking and verification</p>
              </div>
              <div>
                <strong>Smart Contracts</strong>
                <p>Automated agreement execution</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blockchain-image">
          <img src={blockchain_img} alt="Blockchain Technology" className="detailed-img" />
        </div>
      </div>
    </div>
  );
};

export default About;