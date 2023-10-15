import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

import indexingData from "../data/indexingData.json";
import theme from "../theme";

const Indexing = () => {
  return (
    <Box mx={2} my={2}>
      <Typography variant="h6" mb={2} align="center">
        Indexing
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
