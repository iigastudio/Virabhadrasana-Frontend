import React, { useEffect, useState } from "react";
import "./variationsStyles.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import deleteIcon from "../../../assets/delete.png";
import edit from "../../../assets/edit.png";
import { useNavigate } from "react-router-dom";
function Variations() {
  const [variations, setVariations] = useState([]);
  const navigate = useNavigate();

  function deletePose(id) {
    axios
      .delete("http://localhost:8090/variations/" + id)
      .then((result) => {
        fetchVariations();
        alert("success");
      })
      .catch((err) => alert("Something went wrong"));
  }
  function fetchVariations() {
    axios
      .get("http://localhost:8090/variations/")
      .then((result) => {
        console.log(result.data);
        setVariations(result.data);
      })
      .catch((err) =>
        alert("Something went wrong while trying to fetch Virabhadrasana")
      );
  }

  useEffect(() => {
    fetchVariations();
  }, []);

  return (
    <div style={{ color: "black" }}>
      <div
        className="addbtn pointer"
        onClick={() => navigate("/dashboard/add-variation")}
        style={{ margin: "20px", marginLeft: "20px" }}
      >
        ADD VARIATION
      </div>
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
            <th>Variation</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {variations.map((el, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{el.warriorPose.name}</td>
              <td>{el.name}</td>
              <td>
                <img
                  src={el.imageUrl}
                  style={{ height: "70px", width: "70px" }}
                />
              </td>

              <td>
                <img
                  onClick={() =>
                    navigate("/dashboard/edit-variation", {
                      state: { variation: el },
                    })
                  }
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

export default Variations;
