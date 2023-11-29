import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import styled from "styled-components";

const xsValue = { position: "absolute", right: 20, top: { xs: 10, md: 12 } };

const AppLayout = ({ children, isLoggedIn }) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          height: "100vh",
        }}
      >
        <AppBar
          color="transparent"
          position="fixed"
          sx={{ top: 0, zIndex: 1000, width: "100%" }}
        >
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
              onClick={navigateHome}
              sx={{
                flexGrow: 1,
                display: "block",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                cursor: "pointer",
                fontFamily: "Nova Square, sans-serif",
              }}
            >
              AWESOME
            </Typography>
            {isLoggedIn ? (
              <MyButton
                text="MY CLUB"
                onClick={() => navigate("/myclub")}
                sx={xsValue}
              />
            ) : (
              <MyButton
                text="Join"
                onClick={() => navigate("/signup")}
                sx={xsValue}
              />
            )}
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: "5rem" }}>{children}</div>
      </Box>
    </Container>
  );
};

export default AppLayout;

const CustomImage = styled.img``;
