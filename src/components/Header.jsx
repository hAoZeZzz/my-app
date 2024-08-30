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
            <Link to='/'>Welcome to WorldSport</Link>
          </Typography>
          {/* <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
            <Button
              key="Borrowing"
              sx={{ my: 2, color:'white', display: 'block'}}>
                  <Link to="/BorrowingRules">Borrowing Rules</Link>
            </Button>
            <Button
                key="Eligibility"
                sx={{ my: 2, color:'white', display: 'block'}}>
                    <Link to="/FinalsEligibility">Finals Eligibility</Link>
            </Button>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
    
  )
}

export default Header;