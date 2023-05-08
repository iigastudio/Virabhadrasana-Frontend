import React from "react";
import "./homeStyles.css";
function WarriorPoseCard({ pose }) {
  const { name, description, imageUrl, variations } = pose;
  console.log(pose);
  return (
    <div className="warrior-pose-card-container">
      <p>name: {name}</p>
      <p>description: {description}</p>
      <img src={imageUrl} style={{ height: "100px", width: "100px" }} />
    </div>
  );
}

export default WarriorPoseCard;
