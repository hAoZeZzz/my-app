import { Checkbox, Container, FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import EligibilityCard from "./EligibilityCard";

const Eligibility =() => {
  const [allDivisions, setAllDivisions] = useState(true)
  const [rules, setRules] = useState([
    {
      minNumOfMatchedPlayed: 10,
      allRounds: true
    }
  ])
  const addRuleGroup = () => {
    setRules([
      ...rules,
      {
        minNumOfMatchedPlayed: 10,
        allRounds: true
      },
    ]);
  };
  return(
    <Container className="rule-group" style={{margin:"10px"}}>
      <Typography variant="h5">Finals Eligibility</Typography>
      <FormGroup>
        <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Enable Finals Eligibility Rules" />
        <FormControlLabel 
          control={<Checkbox
                      defaultChecked
                      checked={allDivisions} 
                      onChange={(e) => setAllDivisions(!allDivisions)}
                  />} 
          label="All Divisions" />
      </FormGroup>
      {!allDivisions && (
        <>
          {rules.map((rule, index) => (
            <Stack key={index} spacing={2}>
              <EligibilityCard
                rule={rule}
              />
            </Stack>
          ))}
          <button onClick={addRuleGroup}>+ Add Group/Division</button>
        </>
      )} 
    </Container>
  )
}

export default Eligibility;