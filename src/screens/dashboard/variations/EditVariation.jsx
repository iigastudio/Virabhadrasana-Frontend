import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function EditVariation() {
  const location = useLocation();
  const { variation } = location.state;
  const [name, setName] = useState(variation.name);
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  function onSubmit() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);

    axios
      .put("http://localhost:8090/variations/" + variation.id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // Handle success response
        console.log(response.data);
        alert("success");
        navigate("/dashboard/home");
        // Perform any additional actions (e.g., show a success message, redirect, etc.)
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
        alert("Something went wrong");
        // Perform any additional error handling (e.g., show an error message)
      });
  }

  return (
    <div className="add-warrior-pose-container">
      <div className="authBox">
        <p className="inputLabel">Name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="inputStyle"
        />
        <p className="inputLabel">Image</p>
        <input
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

export default EditVariation;
