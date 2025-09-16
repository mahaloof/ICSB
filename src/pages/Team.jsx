import React from "react";
import "./Team.css";

const facultyTeam = [
  { role: 'Head of the Department', name: 'Dr.Shamna N.V' },
  { role: 'Assistant Professor', name: 'Prof.afeefa Nazreen N.Z' },
  { role: 'Assistant Professor', name: 'Prof.thofa Aysha' },
  { role: 'Assistant Professor', name: 'Ms.Meghashree' },
  { role: 'Assistant Professor', name: 'Prof.Saeedah' },
  // Add more faculty as needed
];

const coreTeam = [
  { role: 'President', name: 'Muhammed Haashid' },
  { role: 'Vice President', name: 'Muhammed Zayan Sameer' },
  { role: 'Secretary', name: 'Vineeth SN' },
  { role: 'Joint Secretary', name: 'Afnan Fathima & Nawaz Rifan' },
  { role: 'Treasurer', name: 'Manas Ahmed' },
];

const subTeams = [
  {
    team: 'Technical Team',
    members: [
      { role: 'Lead', name: 'Zuhain Ibrahim' },
      { role: 'Co-Leads', name: 'Mahaloof & Amna Fathima' },
    ],
  },
  {
    team: 'Event Team',
    members: [
      { role: 'Lead', name: 'Saahil' },
      { role: 'Co-Leads', name: 'Afthab & Muhammed KP' },
    ],
  },
  {
    team: 'Media Team',
    members: [
      { role: 'Lead', name: 'Ameen' },
      { role: 'Co-Lead', name: 'Hafiz Anwar' },
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