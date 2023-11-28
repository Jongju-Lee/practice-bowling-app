import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const xsValue = { position: "absolute", right: 20, top: { xs: 10, md: 12 } };

const AppLayout = ({ children }) => {
  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate("/signup");
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="transparent">
          <Toolbar>
            <IconButton
              size="string"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              AWESOME BOWLING
            </Typography>
            <MyButton text="Sign Up" onClick={navigateSignUp} sx={xsValue} />
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ marginTop: "5rem" }}>{children}</div>
    </Container>
  );
};

export default AppLayout;
