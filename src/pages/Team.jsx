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

// Faculty team with photos
const facultyTeam = [
  { role: 'Head of the Department', name: 'Dr.Shamna N.V', photo: hodImg },
  { role: 'Assistant Professor', name: 'Prof.Afeefa Nazneen N.Z', photo: afeefamamImg },
  { role: 'Assistant Professor', name: 'Prof.Thofa Aysha', photo: thofaImg },
  { role: 'Assistant Professor', name: 'Ms.Meghashree', photo: meghaImg },
  // Add more faculty as needed
];

// Core team with photos (add photo if available)
const coreTeam = [
  { role: 'President', name: 'Amna Fathima', photo: amnaImg },
  { role: 'Secretary', name: 'Vineeth SN', photo: vineethImg },
  { role: 'Vice President', name: 'Muhammed Haashid', photo: hashidImg },
  // Add more core team members as needed
];

// Sub teams with photos
const subTeams = [
  {
    team: 'Technical Team',
    members: [
      { role: 'Coordinator', name: 'Vineeth SN', photo: vineethImg },
      { role: 'Coordinator', name: 'Muhammed Haashid', photo: hashidImg },
    ],
  },
  {
    team: 'Event Team',
    members: [
      { role: 'Coordinator', name: 'Sahil', photo: sahilImg },
      { role: 'Coordinator', name: 'Hana Fathima', photo: hanaImg },
    ],
  },
  {
    team: 'Media Team',
    members: [
      { role: 'Coordinator', name: 'Afnan Fathima', photo: afnaImg },
      // Add more media team members as needed
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
            {member.photo && (
              <img src={member.photo} alt={member.name} className="team-photo" />
            )}
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
                {member.photo && (
                  <img src={member.photo} alt={member.name} className="team-photo" />
                )}
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