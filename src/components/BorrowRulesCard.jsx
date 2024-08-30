import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Chip, Container, Stack } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const options = ['All', "Men's", "Women's", "Men's U23", "Women's U23", "Men's (FQPL1)", "Men's (FQPL2)"];

function BorrowingRulesCard(props) {
  const [rule, setRule] = useState(props.rule);
  const [selectedOptions, setSelectedOptions] = useState(['All']);
  const [isAllDivisions, setIsAllDivisions] = useState(true);

  useEffect(() => {
    setRule(props.rule);
  }, [props.rule]);

  const updateRule = (field, value) => {
    const newRule = { ...rule, [field]: value };
    setRule(newRule);
  };
  return (
    <Container>
      <Stack direction="row" spacing={2} >
      <div style={{width:'45%'}}>
        <label>
          <input
            type="checkbox"
            checked={rule.appliesToAllDivisions}
            onChange={(e) =>
              {updateRule('appliesToAllDivisions', e.target.checked);
                setIsAllDivisions(!isAllDivisions)}
            }
          />
          All Divisions
        </label>

        {!rule.appliesToAllDivisions && (
          <>
            <label>
              Select Divisions Players rules are applied to:
              <Autocomplete
                style={{marginTop:'10px'}}
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
            </label>
          </>
        )}
      </div>
      
      <div style={{width:'45%'}}>
        <Stack direction='row' spacing={3} style={{paddingTop: isAllDivisions ? 0 : "80px"}}>
          <label>
            <input
              type="radio"
              checked={rule.borrowingEnabled}
              onChange={() => updateRule('borrowingEnabled', true)}
            />
            Borrowing
          </label>
          <label>
            <input
              type="radio"
              checked={!rule.borrowingEnabled}
              onChange={() => updateRule('borrowingEnabled', false)}
            />
            No Borrowing
          </label>
        </Stack>
        

        {rule.borrowingEnabled && (
          <label>
            Select Divisions Players can be borrowed from:
            <Autocomplete
              style={{marginTop:'10px'}}
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
                      // 删除功能，更新选中的选项
                      setSelectedOptions(value.filter((val) => val !== option));
                    }}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} placeholder="Click to Add" />
              )}
            />
          </label>
        )}
      </div>
      
    </Stack>
    
    </Container>
  );
}

export default BorrowingRulesCard;