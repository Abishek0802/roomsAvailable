import { Box, Typography } from "@mui/material";

import React from "react";

const Boxstyle = {
  height: "200px",
  width: "100%",
  margin: "50px auto",
  borderRadius: "0 0 20px 20px ",
  overflow: "hidden",
  backgroundImage: "linear-gradient(to bottom, #030327, #19906F)",
  position: "relative",
};

const circleRight = {
  position: "absolute",
  top: "50px",
  right: "-50px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(33%)",
  height: "300px",
  width: "350px",
  borderRadius: "50%",
};

const circleLeft = {
  position: "absolute",
  top: "-50px",
  right: "80%",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(33%)",
  height: "150px",
  width: "400px",
  borderRadius: "60%",
};

const bigCircleLeft = {
  position: "absolute",
  top: "-40px",
  right: "-70px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(33%)",
  height: "350px",
  width: "700px",
  borderRadius: "60% 30%",
};

const bigCircleRight = {
  position: "absolute",
  top: "-20px",
  right: "60%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(33%)",
  height: "400px",
  width: "600px",
  borderRadius: "50%",
};

const topicContent = {
  position: "absolute",
  top: "25px",
  left: "45px",
};

const NavBar = () => {
  return (
    <>
      <Box sx={Boxstyle} position={"static"}>
        <Box sx={bigCircleLeft}></Box>
        <Box sx={bigCircleRight}></Box>
        <Box sx={circleRight}></Box>
        <Box sx={circleLeft}></Box>
        <Box sx={topicContent}></Box>
      </Box>
    </>
  );
};

export default NavBar;
