import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
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
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <AppBar color="transparent">
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
        </Box>
      </Grid>
      <Grid item xs={12}>
        <div style={{ marginTop: "4rem" }}>{children}</div>
      </Grid>
    </Grid>
  );
};

export default AppLayout;

const CustomImage = styled.img``;
