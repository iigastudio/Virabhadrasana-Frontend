import axios from "axios";
import React, { useEffect, useState } from "react";
import WarriorPoseCard from "./WarriorPoseCard";

function Home() {
  const [warriorPoses, setWarriorPoses] = useState([]);

  function fetchPoses() {
    axios
      .get("http://localhost:8090/warrior-poses/")
      .then((result) => setWarriorPoses(result.data))
      .catch((err) =>
        alert("Something went wrong trying to fetch warrior poses")
      );
  }

  useEffect(() => {
    fetchPoses();
  }, []);

  return (
 
      <div className="home-big-container">
        {warriorPoses.map((pose) => (
          <WarriorPoseCard pose={pose} />
        ))}
        </div>
 
  );
}

export default Home;
