import { ImageList, ImageListItem, Stack } from "@mui/material";
import React from "react";
import UgcImg from "./img/ugc_approved.png";
import IsoImg from "./img/iso_certified.jpeg";
import SJIF from './img/scientific-journal-impact-factor.jpeg'

const RightBarImages = () => {
  return (
    <Stack>
      <ImageList>
        <ImageListItem>
          <img src={UgcImg} alt="UGC Approved" />
        </ImageListItem>
        <ImageListItem>
          <img src={IsoImg} alt="UGC Approved" />
        </ImageListItem>
        <ImageListItem sx={{gridColumnEnd: 'span 2 !important'}}>
          <img width={'100px'} src={SJIF} alt="scientific-journal-impact-factor" />
        </ImageListItem>
      </ImageList>
    </Stack>
  );
};

export default RightBarImages;
