import React, { useState } from "react";
import "./Login.css";
import LoginImage from "../../assests/Images/login.png";

import { useNavigate } from "react-router-dom";
import { ChatState } from "../context/ContextApi";

const Login = () => {
  const [name, setName] = useState();

  const [password, setPassword] = useState();

  const { setLogged, loading, setLoading } = ChatState();
  const navigate = useNavigate();
  console.log(name);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (name === "" || password === "") {
      return;
    }

    setLogged(true);
    navigate("/");

    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div className="loginInner">
            <form onSubmit={handleSubmit}>
              <div classNameName="loginLogo"></div>
              <img src={LoginImage} alt="Image1" className="Image1" />
              <div className="inputWrapper">
                <div className="inputInner">
                  <div className="userIcon"></div>
                  <input
                    type="text"
                    value={name}
                    placeholder="USERNAME"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="inputWrapper">
                <div className="inputInner">
                  <div className="userIcon"></div>
                  <input
                    type="password"
                    value={password}
                    placeholder="PASSWORD"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="inputWrapper">
                <button>Login</button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
