import React, { useEffect } from "react";
import "./Slide.css";
import Button from "@mui/material/Button";
import ReplyIcon from "@mui/icons-material/Reply";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddInput1 from "../AddZoneInputs/AddInput-A.jsx";
import AddInput2 from "../AddZoneInputs/AddInput-B.jsx";
import AddInput3 from "../AddZoneInputs/AddInput-C.jsx";
import AddInput4 from "../AddZoneInputs/AddInput-D.jsx";
import AddInput5 from "../AddZoneInputs/AddInput-E.jsx";
import EditInput1 from "../EditZoneInputs/EditInput-A.jsx";
import EditInput2 from "../EditZoneInputs/EditInput-B.jsx";
import EditInput3 from "../EditZoneInputs/EditInput-C.jsx";
import EditInput4 from "../EditZoneInputs/EditInput-D.jsx";
import EditInput5 from "../EditZoneInputs/EditInput-E.jsx";
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
                <AddInput1 />
              </div>
              <div
                style={{ position: "relative", right: "10px" }}
                className="lable-input"
              >
                <label htmlFor=""> select Categery</label>
                <AddInput2 />
              </div>
              <div className="lable-input">
                <label htmlFor=""> select Floor</label>
                <AddInput3 />
              </div>
              <div
                style={{ position: "relative", right: "20px" }}
                className="lable-input"
              >
                <label style={{ textAlign: "center" }} htmlFor="">
                  {" "}
                  Num of rooms in floor
                </label>
                <AddInput4 />
              </div>
              <div className="lable-input">
                {" "}
                <label htmlFor=""> Zone Name</label>
                <AddInput5 />
              </div>
              <div className="button-one">
                <Button
                  size="large"
                  style={{
                    backgroundColor: "#19906F",
                    color: "black",
                    borderRadius: "20px",
                  }}
                >
                  <ReplyIcon />
                  Back
                </Button>
                <Button
                  size="large"
                  style={{
                    backgroundColor: "#19906F",
                    color: "black",
                    borderRadius: "20px",
                  }}
                >
                  Update
                </Button>
              </div>
            </form>
            {/* EditZone */}
            <form action="#" className="signup">
              <div className="lable-input">
                {" "}
                <label htmlFor=""> select Zone</label>
                <EditInput1 />
              </div>
              <div
                style={{ position: "relative", right: "10px" }}
                className="lable-input"
              >
                <label htmlFor=""> select Categery</label>
                <EditInput2 />
              </div>
              <div className="lable-input">
                <label htmlFor=""> select Floor</label>
                <EditInput3 />
              </div>
              <div
                style={{ position: "relative", right: "20px" }}
                className="lable-input"
              >
                <label
                  style={{
                    textAlign: "center",
                  }}
                  htmlFor=""
                >
                  {" "}
                  Num of rooms in floor
                </label>
                <EditInput4 />
              </div>
              <div className="lable-input">
                {" "}
                <label htmlFor=""> Zone Name</label>
                <EditInput5 />
              </div>
              <div className="button-one">
                <Button
                  size="large"
                  style={{
                    backgroundColor: "#19906F",
                    color: "black",
                    borderRadius: "20px",
                  }}
                >
                  <ReplyIcon />
                  Back
                </Button>
                <Button
                  size="large"
                  style={{
                    backgroundColor: "#19906F",
                    color: "black",
                    borderRadius: "20px",
                  }}
                >
                  Update
                </Button>
                <IconButton
                  style={{ backgroundColor: "red", color: "black" }}
                  size="larger"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
