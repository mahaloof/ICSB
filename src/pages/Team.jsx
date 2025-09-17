import React from "react";
import "./Team.css";
<<<<<<< HEAD
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
=======

const facultyTeam = [
  { role: 'Head of the Department', name: 'Dr.Shamna N.V' },
  { role: 'Assistant Professor', name: 'Prof.afeefa Nazreen N.Z' },
  { role: 'Assistant Professor', name: 'Prof.thofa Aysha' },
  { role: 'Assistant Professor', name: 'Ms.Meghashree' },
  { role: 'Assistant Professor', name: 'Prof.Saeedah' },
>>>>>>> 978d4c212507bb436ad7fb6ed0a7f6b644a55854
  // Add more faculty as needed
];

const coreTeam = [
<<<<<<< HEAD
  { role: 'President', name: 'amna fathima', photo: amnaImg },

=======
  { role: 'President', name: 'Muhammed Haashid' },
  { role: 'Vice President', name: 'Muhammed Zayan Sameer' },
  { role: 'Secretary', name: 'Vineeth SN' },
  { role: 'Joint Secretary', name: 'Afnan Fathima & Nawaz Rifan' },
  { role: 'Treasurer', name: 'Manas Ahmed' },
>>>>>>> 978d4c212507bb436ad7fb6ed0a7f6b644a55854
];

const subTeams = [
  {
    team: 'Technical Team',
    members: [
<<<<<<< HEAD
      { role: 'Coordinator',name: 'Vineeth SN', photo:  vineethImg },
      { role: 'Coordinator', name: 'hashid', photo: hashidImg },
     
=======
      { role: 'Lead', name: 'Zuhain Ibrahim' },
      { role: 'Co-Leads', name: 'Mahaloof & Amna Fathima' },
>>>>>>> 978d4c212507bb436ad7fb6ed0a7f6b644a55854
    ],
  },
  {
    team: 'Event Team',
    members: [
<<<<<<< HEAD
      { role: 'Coordinator', name: 'Sahil', photo: sahilImg },
      { role: 'Coordinator', name: 'Hana fathima', photo: hanaImg },
=======
      { role: 'Lead', name: 'Saahil' },
      { role: 'Co-Leads', name: 'Afthab & Muhammed KP' },
>>>>>>> 978d4c212507bb436ad7fb6ed0a7f6b644a55854
    ],
  },
  {
    team: 'Media Team',
    members: [
<<<<<<< HEAD
      { role: 'Coordinator', name: 'Afnan fathima', photo: afnaImg },
      
=======
      { role: 'Lead', name: 'Ameen' },
      { role: 'Co-Lead', name: 'Hafiz Anwar' },
>>>>>>> 978d4c212507bb436ad7fb6ed0a7f6b644a55854
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
<<<<<<< HEAD
            <img src={member.photo} alt={member.name} className="team-photo" />
=======
>>>>>>> 978d4c212507bb436ad7fb6ed0a7f6b644a55854
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
<<<<<<< HEAD
            <img src={member.photo} alt={member.name} className="team-photo" />
=======
>>>>>>> 978d4c212507bb436ad7fb6ed0a7f6b644a55854
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
<<<<<<< HEAD
                <img src={member.photo} alt={member.name} className="team-photo" />
=======
>>>>>>> 978d4c212507bb436ad7fb6ed0a7f6b644a55854
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