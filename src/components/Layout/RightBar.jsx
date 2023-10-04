import { Box, Button, IconButton, List, ListItem, Typography } from "@mui/material";
import React from "react";
import RightBarImages from "../RightBar/RightBarImages";
import { East, Facebook, LinkedIn, Twitter } from "@mui/icons-material";

const RightBar = ({ style }) => {
  return (
    <Box sx={[style, { display: "grid", rowGap: 3 }]} p={1}>
      <RightBarImages />

      <Button
        variant={"contained"}
        color="secondary"
        size="small"
        endIcon={<East />}
      >
        Join Us
      </Button>
      <Button
        variant={"contained"}
        color="secondary"
        size="small"
        endIcon={<East />}
      >
        Submit Your Paper Now
      </Button>

      <Typography sx={{fontWeight: 600}} color={'primary'} align="center" component={'a'} href="http://internationaljournalofresearch.co.in/wp-content/uploads/2018/10/ISSNCertificate.pdf">ISSN Certificate of Registration</Typography>

      <List className="flex justify-between" sx={{ columnGap: 1 }}>
        <ListItem sx={{ justifyContent: "center" }} disablePadding>
          <IconButton>
            <Facebook />
          </IconButton>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }} disablePadding>
          <IconButton>
            <Twitter />
          </IconButton>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }} disablePadding>
          <IconButton>
            <LinkedIn />
          </IconButton>
        </ListItem>
      </List>

    </Box>
  );
};

export default RightBar;
