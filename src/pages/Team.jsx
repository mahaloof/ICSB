import React from "react";
import "./Team.css";

const teamMembers = [
  { name: "Muhammad ", role: "President", image: "path-to-image" },
  { name: "S Abdullah", role: "Vice President", image: "path-to-image" },
  { name: "Sfyhjd", role: "Vice President", image: "path-to-image" },
  { name: "Muhammad", role: "General Secretary", image: "path-to-image" },
  { name: "Rahub", role: "Treasurer", image: "path-to-image" },
  { name: "Thajmal", role: "Technical Head", image: "path-to-image" },
];

const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">Core Members 2023-2024</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
