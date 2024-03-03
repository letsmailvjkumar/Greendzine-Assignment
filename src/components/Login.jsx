import React, { useState } from "react";
import { Group3 } from "../assets/images";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const display = (e) => {
    e.preventDefault();
    if (email != "" && password != "") {
      toast.success("User logged In");
      navigate("/Home");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen overflow-x-hidden overflow-y-hidden">
        <div className="flex flex-col items-center gap-3">
          <div>
            <img src={Group3} alt="" />
          </div>
          <div className="text-[#FFFFFFB3]">#We are Electric</div>
          <div className="flex flex-col gap-3 mt-5">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#0F2323] p-1 ps-3 rounded-lg w-64"
                placeholder="E-mail"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#0F2323] p-1 ps-3 rounded-lg w-64"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-2">
            <button
              onClick={display}
              className="bg-[#36A546] text-white w-64 h-8 rounded-lg"
            >
              Login
            </button>
          </div>

          <div className="text-[#36A546]">Forget Password?</div>
        </div>
      </div>
    </>
  );
};

export default Login;
