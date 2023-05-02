import React from "react";
import warrior1 from "../../assets/warrior1.jpg";
import "./styles.css";
function Signup() {
  return (
    <div className="authContainer">
      
      <div className="halfSide">
        <img style={{height:"50%"}} src={warrior1} ></img>
        <div className="halfSide">
  <div className="authBox">
    <p className="inputLabel">Username</p>
    <input className="inputStyle" />
    <p className="inputLabel">Password</p>
    <input className="inputStyle" />
    <p className="inputLabel">Submit</p>
    <input className="inputStyle" />
  </div>
</div>
      </div>
    </div>
  );
}

export default Signup;
