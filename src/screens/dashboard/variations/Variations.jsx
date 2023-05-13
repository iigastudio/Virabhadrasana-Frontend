import React, { useEffect, useState } from "react";
import "./variationsStyles.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
import deleteIcon from "../../../assets/delete.png";
import edit from "../../../assets/edit.png";
import { useNavigate } from "react-router-dom";
function Variations() {
  const [variations, setVariations] = useState([]);
const navigate = useNavigate()
  
  function deletePose(id) {
    axios
      .delete("http://localhost:8090/warrior-poses/" + id)
      .then((result) => {
        fetchVariations();
        alert("success");
      })
      .catch((err) => alert("Something went wrong"));
  }
  function fetchVariations() {
    axios
      .get("http://localhost:8090/variations/")
      .then((result) => {console.log(result.data);setVariations(result.data)})
      .catch((err) =>
        alert("Something went wrong trying to fetch warrior poses")
      );
  }

  useEffect(() => {
    fetchVariations();
  }, []);

  return (
    <div style={{ color: "black" }}>
      <Button onClick={()=>navigate('/dashboard/add-variation')} variant="primary" style={{ margin: "20px", marginLeft: "20px" }}>
        Add variation
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Warrior Pose Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {variations.map((el, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{el.name}</td>
              <td>
                <img
                  src={el.imageUrl}
                  style={{ height: "70px", width: "70px" }}
                />
              </td>
              <td>{el.warriorPose.name}</td>
              <td>
                <img
                  className="pointer edit-delete-scale"
                  style={{ height: "30px", width: "30px" }}
                  src={edit}
                />
              </td>
              <td onClick={() => deletePose(el.id)}>
                <img
                  className="pointer edit-delete-scale"
                  style={{ height: "30px", width: "30px" }}
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

export default Variations;