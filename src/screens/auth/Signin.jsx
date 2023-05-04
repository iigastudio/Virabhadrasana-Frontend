import React from "react";
import warrior1 from "../../assets/Warrior2.jpeg";
import "./styles.css";
import { useState } from "react";
import axios from "axios";
function SignIn() {
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
        <img style={{ height: "80%" }} src={warrior1}></img>
      </div>
      <div className="halfSide rightSide">
        <div className="authBox">
         
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
          <p onClick={()=>onSubmit()}  className="submit-btn btnclick bg-secondary">
            Submit
          </p>
        </div>
      </div>
    </div>
  );
}


export default SignIn