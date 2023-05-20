import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddVariation() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [warriorPoseId, setWarriorPoseId] = useState();
  const [warriorPoses, setWarriorPoses] = useState([]);
  const imginputref = useRef();
  const navigate = useNavigate();
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

  function onSubmit() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);

    axios
      .post("http://localhost:8090/variations/" + warriorPoseId, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("success");
        navigate("/dashboard/home");
      })
      .catch((error) => {
        console.error(error);
        alert("something went wrong");
      });
  }

  return (
    <div className="add-warrior-pose-container">
      <div className="authBox">
        <p className="inputLabel">Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          className="inputStyle"
        />
        <p className="inputLabel">Image</p>
        <div
          style={{ height: "31px", backgroundColor: "white", color: "black" }}
          className="pointer inputStyle"
          onClick={() => imginputref.current.click()}
        >
          Choose file
        </div>
        <input
          ref={imginputref}
          style={{ visibility: "hidden", height: "0px", width: "0px" }}
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="inputStyle"
        />
        <select
          onChange={(e) => setWarriorPoseId(e.target.value)}
          name="warriorposes"
          id="warriorposes"
          defaultValue={""}
        >
          <option disabled value={""}>
            Select Virabhadrasana
          </option>
          {warriorPoses.map((warrior) => (
            <option value={warrior.id}>{warrior.name}</option>
          ))}
        </select>
        <p
          onClick={() => onSubmit()}
          className="submit-btn btnclick bg-secondary"
        >
          Submit
        </p>
      </div>
    </div>
  );
}

export default AddVariation;
