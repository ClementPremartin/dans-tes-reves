/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Avatar from "@assets/icon_login_avatar.svg";
import Padlock from "@assets/padlock_login.png";
import { toast } from "react-toastify";
import UserExport from "../contexts/UserContext";

import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserExport.UserContext);

  const handleClick = () => {
    if (!email || !password) {
      setMsg("Veuillez renseigner vos identifiants");
      return;
    }
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        { email, password },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Bienvenue Boss !");
        setUser(res.data);
        navigate("/admin/artcreation");
      })
      .catch(() =>
        toast.warning("Votre email ou votre mot de passe est incorrect")
      );
  };

  return (
    <div>
      <form className="flex flex-col items-center">
        <label htmlFor="login">
          <div className="flex flex-row items-center justify-end">
            <div className="w-5 mb-5 mr-2">
              <img src={Avatar} alt="avatar" />
            </div>
            <input
              className="bg-white bg-opacity-0 border-b border-b-white mb-5 text-white"
              id="email"
              type="text"
              name="email"
              placeholder=""
              onChange={(event) => {
                const input = event.target;
                setEmail(input.value);
              }}
            />
          </div>
          <div className="flex flex-row items-center">
            <div className="w-9">
              <img src={Padlock} alt="padlock" />
            </div>
            <input
              className="bg-white bg-opacity-0  border-b border-b-white mt-8 mb-8 text-white
              focus-visible:shadow-none"
              id="password"
              type="password"
              name="password"
              placeholder=""
              onChange={(event) => {
                const input = event.target;
                setPassword(input.value);
              }}
            />
          </div>
        </label>
        <input
          type="button"
          value="Se connecter"
          className="px-6 py-2.5 cursor-pointer text-center text-white text-base bg-slate-900 opacity-80 hover:bg-opacity-90 rounded-full mt-6"
          onClick={handleClick}
        />
        {msg && <p>{msg}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
