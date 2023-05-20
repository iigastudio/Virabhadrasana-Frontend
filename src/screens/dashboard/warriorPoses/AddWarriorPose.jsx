import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddWarriorPose() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const imginputref = useRef();
  const navigate = useNavigate();
  function onSubmit() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);

    axios
      .post("http://localhost:8090/warrior-poses/", formData, {
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
        alert("Something went wrong");
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

export default AddWarriorPose;
