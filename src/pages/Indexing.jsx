import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

import indexingData from "../data/indexingData.json";
import theme from "../theme";

import impactFactorLogo from '../components/RightBar/img/scientific-journal-impact-factor.jpeg'

const Indexing = () => {
  return (
    <Box mx={2} my={2}>
      <Typography variant="h6" mb={2} align="center">
        Indexing
      </Typography>

      <img style={{margin: 'auto'}} src={impactFactorLogo} alt={"Scientific Journal Impact Factor"} />
      <Typography variant="h5" mb={2} align="center">
        Scientific Journal Impact Factor
      </Typography>

      <List>
        {indexingData.map((data) => (
          <ListItem disablePadding key={data.id}>
            <ListItemText sx={{color: theme.palette.primary.main, textAlign: 'center'}}><a href={data.link}>{data.label}</a></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Indexing;
