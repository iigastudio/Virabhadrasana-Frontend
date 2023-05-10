import React from "react";
import "./homeStyles.css";
function WarriorPoseCard({ pose }) {
  const { name, imageUrl, variations } = pose;
  console.log(pose);
  return (
    <div className="warrior-pose-card-container">
      <div
        className="img-container"
      >
        <img src={imageUrl} className="imgFit" />
      </div>
      <p className="card-name">{name}</p>
    
    </div>
  );
}

export default WarriorPoseCard;
