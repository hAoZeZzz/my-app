import React, { useState, useEffect} from "react";
import { Autocomplete, Chip, Checkbox, FormControlLabel, TextField, Stack, Radio, Grid2, Typography, FormGroup, RadioGroup } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Eligible from "./Eligibile";

const options = ['All', "Men's", "Women's", "Men's U23", "Women's U23", "Men's (FQPL1)", "Men's (FQPL2)"];

const EligibilityCard =(props) => {
  const [rule, setRule] = useState(props.rule);
  const [selectedOptions, setSelectedOptions] = useState(['All']);
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
      <Eligible rule={rule} />
    </div>
  )
}

export default EligibilityCard;