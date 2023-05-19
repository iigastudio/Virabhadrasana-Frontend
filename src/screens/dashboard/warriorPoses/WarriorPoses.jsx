import React, { useEffect, useState } from "react";
import "./warriorPosesStyles.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import deleteIcon from "../../../assets/delete.png";
import edit from "../../../assets/edit.png";
import { useNavigate } from "react-router-dom";

function WarriorPoses() {
  const [warriorPoses, setWarriorPoses] = useState([]);

  const navigate = useNavigate();
  function deletePose(id) {
    axios
      .delete("http://localhost:8090/warrior-poses/" + id)
      .then((result) => {
        fetchPoses();
        alert("success");
      })
      .catch((err) => alert("Something went wrong"));
  }
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
    <div style={{ color: "black" }}>
      <p
        className="pointer addbtn"
        onClick={() => navigate("/dashboard/add-pose")}
      >
        ADD VIRABHADRASANA
      </p>
      <Table
        style={{ borderColor: "rgb(108, 117, 125)" }}
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Virabhadrasana</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {warriorPoses.map((el, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{el.name}</td>
              <td>
                <img
                  src={el.imageUrl}
                  style={{ height: "70px", width: "70px" }}
                />
              </td>
              <td>
                <img
                  onClick={() => {
                    navigate("/dashboard/edit-pose", { state: { pose: el } });
                  }}
                  className="pointer edit-delete-scale"
                  style={{ height: "20px", width: "20px" }}
                  src={edit}
                />
              </td>
              <td onClick={() => deletePose(el.id)}>
                <img
                  className="pointer edit-delete-scale"
                  style={{ height: "20px", width: "20px" }}
                  src={deleteIcon}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default WarriorPoses;
