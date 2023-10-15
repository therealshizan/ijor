import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const BoardMembers = () => {
  return (
    <>
      <List>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="body1" fontWeight={600}>
            Chief Patrons
          </Typography>
          <Typography align="center">
            Dr. Akhtar Hasan Rizvi: President, Rizvi Education Society
          </Typography>
          <Typography align="center">
            Adv. (Mrs.) Rubina A. H. Rizvi: Director, Rizvi Education Society
          </Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="body1" fontWeight={600}>
            Editor-in-Chief
          </Typography>
          <Typography align="center">
            Dr. Ashfaq Ahmad Khan: Principal I/C, Rizvi College of Arts, Science
            &amp; Commerce, Bandra (West), Mumbai - 400050.
          </Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="body1" fontWeight={600}>
            Executive Editor
          </Typography>
          <Typography align="center">
            Dr. (Mrs.) Anjum Ara M. K. Ahmad: Professor, Department of
            Mathematics and Statistics, Rizvi College of Arts, Science &amp;
            Commerce, Bandra (West), Mumbai - 400050.
            <br />
            Email: executiveeditor.ijr@rizvicollege.edu.in
          </Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="body1" fontWeight={600}>
            MEMBERS
          </Typography>
          <Typography align="center">
            Dr. Rana Ansariya
            <br />
            Dr. Masooma Sayed
            <br />
            Ms. Aiman Peerzade
            <br />
            Ms. Mehvash Shaikh
            <br />
          </Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="body1" fontWeight={600}>
            TECHNICAL SUPPORT
          </Typography>
          <Typography align="center">Mr. Masoom Ali</Typography>
        </ListItem>
        <ListItem sx={{ mb: 2, flexDirection: "column" }}>
          <Typography align="center" variant="body1" fontWeight={600}>
            ADMINISTRATIVE SUPPORT
          </Typography>
          <Typography align="center">Mr. William Fargose</Typography>
        </ListItem>
      </List>
    </>
  );
};

export default BoardMembers;
