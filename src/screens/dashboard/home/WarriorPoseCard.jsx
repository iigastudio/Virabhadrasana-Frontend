import React from "react";
import "./homeStyles.css";
import { useNavigate } from "react-router-dom";
function WarriorPoseCard({ pose }) {
  const { name, imageUrl, variations } = pose;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/dashboard/pose-variations",{state:{warriorPose:pose}})}
      className="warrior-pose-card-container"
    >
      <div className="img-container">
        <img src={imageUrl} className="imgFit" />
      </div>
      <p className="card-name">{name}</p>
    </div>
  );
}

export default WarriorPoseCard;
