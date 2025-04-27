import React from "react";
import "./Team.css";

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
      <team>Our Team</team>

      <div className="team-section">
        {coreTeam.map((member, index) => (
          <div key={index} className="team-card">
            <h3>{member.role}</h3>
            <p>{member.name}</p>
          </div>
        ))}
      </div>

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