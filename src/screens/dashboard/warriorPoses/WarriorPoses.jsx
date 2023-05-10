import React, { useEffect, useState } from "react";
import "./warriorPosesStyles.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
import deleteIcon from "../../../assets/delete.png"
import edit from "../../../assets/edit.png"
function WarriorPoses() {
  const [warriorPoses, setWarriorPoses] = useState([]);


  function deletePose(id){
    axios.delete("http://localhost:8090/warrior-poses/"+id).then((result)=>{fetchPoses();alert("success")}).catch((err)=>alert("Something went wrong"))
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
         <Button variant="primary" style={{margin:"20px",marginLeft:"20px"}}>Add Warrior Pose</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
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
              <td ><img className="pointer edit-delete-scale" style={{height:"30px",width:"30px"}} src={edit}/></td>
              <td  onClick={()=>deletePose(el.id)}><img className="pointer edit-delete-scale" style={{height:"30px",width:"30px"}} src={deleteIcon}/></td>
            </tr>
          ))}
        </tbody>
      </Table>
   
    </div>
  );
}

export default WarriorPoses;
