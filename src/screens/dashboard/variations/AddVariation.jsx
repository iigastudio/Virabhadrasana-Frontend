import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddVariation() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [warriorPoseId, setWarriorPoseId] = useState();
  const imginputref = useRef();
  const [warriorPoses, setWarriorPoses] = useState([]);
  const [selectedWarriorImg, setSelectedWarriorImg] = useState("");
  const navigate = useNavigate();
  function fetchPoses() {
    axios
      .get("http://localhost:8090/warrior-poses/")
      .then((result) => {
        setWarriorPoses(result.data);
        setSelectedWarriorImg(result.data[0].imageUrl);
      })
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
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <img src={selectedWarriorImg || ""} />
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ width: "70%" }} className="authBox">
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
          <p className="inputLabel">Select Virabhadrasana</p>
          {!warriorPoses.length == 0 && (
            <select
              onChange={(e) => {
                setWarriorPoseId(JSON.parse(e.target.value).id);
                setSelectedWarriorImg(JSON.parse(e.target.value).imageUrl);
              }}
              name="warriorposes"
              id="warriorposes"
              defaultValue={warriorPoses[0] || ""}
            >
              <option disabled value={""}>
                Select Virabhadrasana
              </option>
              {warriorPoses.map((warrior) => (
                <option value={JSON.stringify(warrior)}>{warrior.name}</option>
              ))}
            </select>
          )}
          <p
            onClick={() => onSubmit()}
            className="submit-btn btnclick bg-secondary"
          >
            Submit
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddVariation;
