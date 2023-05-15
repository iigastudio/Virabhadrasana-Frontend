import React from "react";
import "./homeStyles.css";
import { useNavigate } from "react-router-dom";
function VariationCard({ pose }) {
  const { name, imageUrl } = pose;
  const navigate = useNavigate();
  return (
    <div
     
      className="warrior-pose-card-container"
    >
      <div className="img-container">
        <img src={imageUrl} className="imgFit" />
      </div>
      <p className="card-name">{name}</p>
    </div>
  );
}

export default VariationCard;
