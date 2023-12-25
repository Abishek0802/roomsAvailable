import React, { useEffect } from "react";
import "./Slide.css";
import { Paper } from "@mui/material";
import Input1 from "./AddZoneInputs/Input-A.jsx";
import Input2 from "./AddZoneInputs/Input-B.jsx";
import Input3 from "./AddZoneInputs/Input-C.jsx";
import Input4 from "./AddZoneInputs/Input-D.jsx";
import Input5 from "./AddZoneInputs/Input-E.jsx";
const SignInForm = () => {
  useEffect(() => {
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");

    const handleSignupBtnClick = () => {
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    };

    const handleLoginBtnClick = () => {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    };

    const handleSignupLinkClick = (event) => {
      signupBtn.click();
      event.preventDefault();
    };

    signupBtn.addEventListener("click", handleSignupBtnClick);
    loginBtn.addEventListener("click", handleLoginBtnClick);
    // signupLink.addEventListener("click", handleSignupLinkClick);

    return () => {
      signupBtn.removeEventListener("click", handleSignupBtnClick);
      loginBtn.removeEventListener("click", handleLoginBtnClick);
      // signupLink.removeEventListener("click", handleSignupLinkClick);
    };
  }, []);

  return (
    // Your JSX structure for the form...
    <>
      <div className="wrapper">
        <div className="title-text">
          <div className="title login">Add Zone</div>
          <div className="title signup">Edit Zone</div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" checked />
            <input type="radio" name="slide" id="signup" />
            <label htmlFor="login" className="slide login">
              Add
            </label>
            <label htmlFor="signup" className="slide signup">
              Edit
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form action="#" className="login">
              <div className="lable-input">
                {" "}
                <label htmlFor=""> select Zone</label>
                <Input1 />
              </div>
              <div
                style={{ position: "relative", right: "10px" }}
                className="lable-input"
              >
                <label htmlFor=""> select Categery</label>
                <Input2 />
              </div>
              <div className="lable-input">
                <label htmlFor=""> select Floor</label>
                <Input3 />
              </div>
              <div
                style={{ position: "relative", right: "28px" }}
                className="lable-input"
              >
                <label style={{ textAlign: "center" }} htmlFor="">
                  {" "}
                  Number of rooms in floor
                </label>
                <Input4 />
              </div>
              <div className="lable-input">
                {" "}
                <label htmlFor=""> Zone Name</label>
                <Input5 />
              </div>
            </form>
            <form action="#" className="signup">
              <div>content goes here</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
