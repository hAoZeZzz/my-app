import React, { useState, useEffect} from "react";
import { Autocomplete, Chip, Checkbox, FormControlLabel, TextField, Stack, Radio, Grid2, Typography, FormGroup, RadioGroup } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const options = ['All', "Men's", "Women's", "Men's U23", "Women's U23", "Men's (FQPL1)", "Men's (FQPL2)"];
const rounds = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7']

const EligibilityCard =(props) => {
  const [rule, setRule] = useState(props.rule);
  const [selectedOptions, setSelectedOptions] = useState(['All']);
  const [selectedRounds, setSelectedRounds] = useState([]);
  const [isRound, setIsRound] = useState(false);
  useEffect(() => {
    setRule(props.rule);
  }, [props.rule]);

  return(
    <div>
      <label>
        <p>Select Divisions Players rules are applied to:</p>
        <Stack direction="row" spacing={1} style={{justifyItems:"center", alignItems:"center"}}>
          <Autocomplete
            style={{marginTop:'10px', width:'80%'}}
            multiple
            options={options}
            value={selectedOptions}
            onChange={(event, newValue) => setSelectedOptions(newValue)}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  label={option}
                  {...getTagProps({ index })}
                  onDelete={() => {
                    setSelectedOptions(value.filter((val) => val !== option));
                  }}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} placeholder="Click to Add" />
            )}
          />
          <DeleteOutlineIcon onClick={()=> setSelectedOptions([])} />
        </Stack>
      </label>
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
                options={options}
                value={selectedOptions}
                onChange={(event, newValue) => setSelectedOptions(newValue)}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      key={index}
                      label={option}
                      {...getTagProps({ index })}
                      onDelete={() => {
                        setSelectedOptions(value.filter((val) => val !== option));
                      }}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField {...params} placeholder="Click to Add" />
                )}
              />
              <DeleteOutlineIcon onClick={()=> setSelectedOptions([])} />
            </Stack>
          )}
        </FormGroup>
      </Stack>
    </div>
  )
}

export default EligibilityCard;