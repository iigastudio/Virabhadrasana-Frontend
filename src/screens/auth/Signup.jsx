import React from "react";
import warrior1 from "../../assets/warrior1.jpg";
import "./styles.css";
import { useState } from "react";
import axios from "axios";
function Signup() {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");

  function onSubmit() {
    axios.post("http://localhost:8090/register",{
      username: userName,
      fullName,
      password: password,
      userRole: role,
    }).then((result)=>alert("User added succesffully")).catch((err)=>alert("something wrong happend"))
   
    
  }
  return (
    <div className="authContainer">
      <div className="halfSide">
        <img style={{ height: "50%" }} src={warrior1}></img>
      </div>
      <div className="halfSide rightSide">
        <div className="authBox">
          <p className="inputLabel">FullName</p>
          <input
            onChange={(e) => setFullName(e.target.value)}
            className="inputStyle"
          />
          <p className="inputLabel">UserName</p>
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="inputStyle"
          />
          <p className="inputLabel">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="inputStyle"
          />
          <label className="inputLabel" for="cars">
            Role:
          </label>

          <select
            onChange={(e) => setRole(e.target.value)}
            name="role"
            id="roles"
          >
                <option value="USER">USER</option>
            <option value="ADMIN">Admin</option>
        
          </select>
          <p onClick={()=>onSubmit()} style={{ alignSelf: "center" }} className="button-secondary">
            Submit
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
