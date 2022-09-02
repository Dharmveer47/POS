import React, { useRef } from "react";
// Redux
import {
  setLogin,
  // setnNavHide,
  POS_CONTROLLER_INITIAL_STATE,
} from "../../Store/dataSlice";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { Button } from "../Button";
import "../../Styles/Login/Login.scss";

export const authEmail = [
  { email: "admin@gmail.com", password: 123 },
  { email: "store@gmail.com", password: 123 },
  { email: "biller@gmail.com", password: 123 },
];

export const LocalStorage = {
  pms_user: "pms_user",
};

const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passRef = useRef();

  const handleSumbit = (e) => {
    e.preventDefault();

    const getInput = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    const authUser = authEmail.filter((data) => {
      if (
        data.email === getInput.email ||
        data.password === getInput.password
      ) {
        return data;
      }
      return null;
    });
    if (authUser.length !== 0) {
      localStorage.setItem(LocalStorage.pms_user, JSON.stringify(authUser[0]));
      dispatch(setLogin({ [POS_CONTROLLER_INITIAL_STATE.LOGIN]: authUser[0] }));
    }
    emailRef.current.value = "";
    passRef.current.value = "";
  };
  const url = "https://pmsnewera.com/herbal/images/logo.png";
  return (
    <div>
      <div className="login-page">
        <div className="form">
          <div className="login__desi">
            <div className="login__img">
              <img src={url} alt="loginimg" />
            </div>
          </div>
          <form onSubmit={handleSumbit} className="login_form">
            <h2 className="login_heading">SIGN IN TO YOUR ACCOUNT</h2>
            <div className="login_field">
              <input
                ref={emailRef}
                type="text"
                placeholder="Username"
                id="user"
              />
              <input ref={passRef} type="password" placeholder="Password" />
              <Button
                style={{ marginTop: "14px" }}
                w="80%"
                bg="#6ebf49"
                bName="SIGN IN"
                type="submit"
                className="login_button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
