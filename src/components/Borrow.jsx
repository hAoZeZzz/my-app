import { Button, Container, Stack, Typography } from "@mui/material";
import React, {useState} from "react";
import BorrowingRulesCard from "./BorrowRulesCard";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";

const Borrow = () => {
  const [rules, setRules] = useState([
    {
      appliesToAllDivisions: true,
      borrowingEnabled: true,
    },
  ]);
  const addRuleGroup = () => {
    setRules([
      ...rules,
      {
        appliesToAllDivisions: true,
        borrowingEnabled: true,
      },
    ]);
  };

  return(
    <Container>
      <Typography variant="h5">Player Borrowing Restrictions</Typography>
      <div className="rule-group">
        {rules.map((rule, index) => (
          <Stack direction='row' spacing={1} key={index} style={{marginBottom:'10px'}}>
            <BorrowingRulesCard 
              rule={rule}
            />
            <DeleteOutlineIcon onClick={() => setRules(rules.filter((_, i) => i !== index))} />
          </Stack>
        ))}
        <button onClick={addRuleGroup}>+ Add Group/Division</button>
      </div>
      <Button component={Link} to="/QualifiedPlayers" variant="outlined" color="error">Retrieve</Button>
    </Container>
  )
}

export default Borrow;