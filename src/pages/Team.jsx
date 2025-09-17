import React from "react";
import "./Team.css";
import hodImg from '../assets/hod.jpeg';
import thofaImg from '../assets/thofa.jpeg';
import meghaImg from '../assets/megha.jpeg';
import amnaImg from '../assets/amna.jpeg';
import vineethImg from '../assets/vineeth.jpeg';
import hashidImg from '../assets/hashid.jpeg';
import afnaImg from '../assets/afna.jpeg';
import hanaImg from '../assets/hana.jpeg';
import sahilImg from '../assets/sahil.jpeg';
import afeefamamImg from '../assets/afeefamam.jpeg';

// Example images (replace with actual URLs or import local images)
const facultyTeam = [
  { role: 'Head of the Department', name: 'Dr.Shamna N.V', photo: hodImg },
  { role: 'Assistant Professor', name: 'Prof.Afeefa Nazneen N.Z', photo: afeefamamImg },
  
  { role: 'Assistant Professor', name: 'Prof.thofa Aysha', photo: thofaImg },
  { role: 'Assistant Professor', name: 'Ms.Meghashree', photo: meghaImg },
  // Add more faculty as needed
];

const coreTeam = [
  { role: 'President', name: 'amna fathima', photo: amnaImg },

];

const subTeams = [
  {
    team: 'Technical Team',
    members: [
      { role: 'Coordinator',name: 'Vineeth SN', photo:  vineethImg },
      { role: 'Coordinator', name: 'hashid', photo: hashidImg },
     
    ],
  },
  {
    team: 'Event Team',
    members: [
      { role: 'Coordinator', name: 'Sahil', photo: sahilImg },
      { role: 'Coordinator', name: 'Hana fathima', photo: hanaImg },
    ],
  },
  {
    team: 'Media Team',
    members: [
      { role: 'Coordinator', name: 'Afnan fathima', photo: afnaImg },
      
    ],
  },
];

const Team = () => {
  return (
    <div className="team-wrapper">
      <h1 className="team">Our Team</h1>

      {/* Faculty Section */}
      <h2 className="team-title">Faculty</h2>
      <div className="team-section">
        {facultyTeam.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3>{member.role}</h3>
            <p>{member.name}</p>
          </div>
        ))}
      </div>

      {/* Core Team Section */}
      <h2 className="team-title">Core Team</h2>
      <div className="team-section">
        {coreTeam.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3>{member.role}</h3>
            <p>{member.name}</p>
          </div>
        ))}
      </div>

      {/* Sub Teams Section */}
      {subTeams.map((team, idx) => (
        <div key={idx}>
          <h2 className="team-title">{team.team}</h2>
          <div className="team-section">
            {team.members.map((member, i) => (
              <div key={i} className="team-card">
                <img src={member.photo} alt={member.name} className="team-photo" />
                <h3>{member.role}</h3>
                <p>{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;