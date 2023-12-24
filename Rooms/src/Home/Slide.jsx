import React, { useState } from "react";
import {
  SwipeableDrawer,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AuthSlider = () => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleDrawer = (isOpen, isLogin) => () => {
    setOpen(isOpen);
    setIsLogin(isLogin);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        padding: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" mb={2}>
        {isLogin ? "Login" : "Sign Up"}
      </Typography>
      {/* Add your login or signup form components here */}
      <Button variant="contained" color="primary" fullWidth>
        {isLogin ? "Login" : "Sign Up"}
      </Button>
      <Box mt={2}>
        <IconButton onClick={handleToggle}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <>
      <Button
        onClick={toggleDrawer(true, false)}
        variant="outlined"
        color="secondary"
        anchor="right"
      >
        Sign Up
      </Button>
      <Button
        onClick={toggleDrawer(true, true)}
        variant="outlined"
        color="primary"
      >
        Login
      </Button>

      <SwipeableDrawer
        anchor={isLogin ? "left" : "right"}
        open={open}
        onClose={toggleDrawer(false, isLogin)}
        onOpen={toggleDrawer(true, isLogin)}
      >
        {drawerContent}
      </SwipeableDrawer>
    </>
  );
};

export default AuthSlider;
