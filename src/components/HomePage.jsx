import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () =>{
  return (
    <Container>
      <Typography variant="h5">Select what you want:</Typography>
      <Stack direction="row" spacing={3}>
        <Button component={Link} to='/borrowingrules' variant="contained" style={{width: '150px'}}>Borrowing Rules</Button>
        <Button component={Link} to='/finalseligibility' variant="outlined" style={{width: '150px'}}>Finals Eligibility</Button>
      </Stack>
    </Container>
  )
}

export default HomePage;