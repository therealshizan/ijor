import { ImageList, ImageListItem, Stack } from "@mui/material";
import React from "react";
import UgcImg from "./img/ugc_approved.png";
import SJIF from "./img/scientific-journal-impact-factor.jpeg";
import IssnImg from "./img/issn-2.png";

const ListStyle = {
  display: "grid !important",
  alignItems: "center !important",
};

const RightBarImages = () => {
  return (
    <Stack>
      <ImageList>
        <ImageListItem style={ListStyle}>
          <a href="https://drive.google.com/file/d/1tkpekP1hDqAN0CLElY5Zw2cRKJNS929S/view?usp=sharing">
            <img src={UgcImg} alt="UGC Approved" />
          </a>
        </ImageListItem>
        <ImageListItem
          sx={[{ m: "auto", height: "100% !important" }, ListStyle]}
        >
          <a href="http://internationaljournalofresearch.co.in/wp-content/uploads/2018/10/ISSNCertificate.pdf">
            <img
              src={IssnImg}
              style={{ objectFit: "contain" }}
              alt="UGC Approved"
            />
          </a>
        </ImageListItem>
        <ImageListItem sx={[{ gridColumnEnd: "span 2 !important" }, ListStyle]}>
          <a href="http://www.sjifactor.com/passport.php?id=19276">
            <img
              width={"100%"}
              src={SJIF}
              alt="scientific-journal-impact-factor"
            />
          </a>
        </ImageListItem>
      </ImageList>
    </Stack>
  );
};

export default RightBarImages;
