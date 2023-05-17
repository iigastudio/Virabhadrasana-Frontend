import React from "react";
import warrior1 from "../../assets/Virabhadrasana2.png";
import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { useApp } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useApp();
  function onSubmit() {
    axios
      .post("http://localhost:8090/login", {
        username: userName,
        password: password,
      })
      .then((result) => {
        login(result.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        if (err.response.status == 401) {
          alert("Wrong credentials");
        } else {
          alert("Something wrong happend");
        }
      });
  }
  return (
    <div className="authContainer">
      <div className="halfSide">
        <img style={{ height: "75%" }} src={warrior1}></img>
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
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="inputStyle"
          />
          <p onClick={() => onSubmit()} className="submit-btn btnclick">
            Submit
          </p>
          <p className="inputLabel" style={{ fontSize: "14px" }}>
            Don't have an account ?{" "}
            <span className="pointer" onClick={() => navigate("/signup")}>
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
