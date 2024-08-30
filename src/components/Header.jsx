import { Container, Toolbar, Typography, Box, Button, AppBar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
                mr: 2,
                display: {xs: "none", md:"flex"},
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing:".3rem",
                textDecoration: "none"
            }}
          >
            <Link to='/'>Welcome to WorldSportAction</Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    
  )
}

export default Header;