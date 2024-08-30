import React, { useState, useEffect } from "react";
import { Stack, Grid2, Typography, FormGroup, FormControlLabel, Checkbox, RadioGroup, Autocomplete, Chip, TextField, Radio } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const rounds = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7']

const Eligible = (props) => {
  const [rule, setRule] = useState(props.rule);
  const [selectedRounds, setSelectedRounds] = useState([]);
  const [isRound, setIsRound] = useState(false);
  
  return (
    <Stack spacing={2} style={{paddingLeft:"30px"}}>
      <Grid2 container spacing={4} alignItems="center">
        <Grid2 item xs={8}>
          <Typography variant="body1">Min Number of Matches Played</Typography>
        </Grid2>
        <Grid2 item xs={2}>
          <TextField
            type="number"
            variant="outlined"
            style={{width:"80px"}}
            placeholder={`${rule.minNumOfMatchedPlayed}`}
          />
        </Grid2>
      </Grid2>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Included Borrowed Player"/>
        <FormControlLabel control={<Checkbox />} label="Included Started Matches Only"/>
      </FormGroup>
      <FormGroup>
        <Typography variant="body1">How are Eligibile Rounds Determined</Typography>
        <RadioGroup
          defaultValue="allRounds"
          onChange={()=>setIsRound(!isRound)}
        >
          <FormControlLabel value="allRounds" control={<Radio/>} label="All Rounds" />
          <FormControlLabel value="selectedRounds" control={<Radio />} label="Selected Rounds" />
        </RadioGroup>
        
        {isRound && (
          <Stack direction="row" spacing={1} style={{justifyItems:"center", alignItems:"center"}}>
            <Autocomplete
              style={{marginTop:'10px', width:'80%'}}
              multiple
              options={rounds}
              value={selectedRounds}
              onChange={(event, newValue) => setSelectedRounds(newValue)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={index}
                    label={option}
                    {...getTagProps({ index })}
                    onDelete={() => {
                      setSelectedRounds(value.filter((val) => val !== option));
                    }}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} placeholder="Click to Add" />
              )}
            />
            <DeleteOutlineIcon onClick={()=> setSelectedRounds([])} />
          </Stack>
        )}
      </FormGroup>
    </Stack>
  )
}

export default Eligible;