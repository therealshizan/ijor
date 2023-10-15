import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Box mx={2} my={2}>
      <Typography variant="h6" mb={4} align="center">
        Contact Us
      </Typography>

      <Grid container sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}} columnGap={2}>
        <Grid item xs={12}>
          <Typography variant="h6" color={"primary"}>
            ADDRESS
          </Typography>
          <Typography variant="body1" color={"primary"}>
            International Journal of Research - Rizvi College of Arts, Science &
            Commerce
          </Typography>
          <Typography variant="body2">
            Rizvi Educational Complex, Off Carter Rd, Rizvi Complex, Chuim,
            Bandra West, Mumbai, Maharashtra 400050
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" color={"primary"}>
            (24 X 7 CUSTOMER SUPPORT)
          </Typography>
          <Typography variant="body1" color={"primary"}>
            <a href="tel:022 2648 0348">022 2648 0348</a>
          </Typography>
          <Typography variant="body1" color={"primary"}>
            <a href="mailto:principal.asc@rizvicollege.edu.in">
              principal.asc@rizvicollege.edu.in
            </a>
          </Typography>
        </Grid>
      </Grid>

      <Stack mt={4}>
      <iframe title="Rizvi Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15083.569190708788!2d72.824408!3d19.0684724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96dfb95423f%3A0x38026e73d00969a5!2sRizvi%20College%20of%20Arts%2C%20Science%20and%20Commerce!5e0!3m2!1sen!2sin!4v1697379586035!5m2!1sen!2sin" width="100%" height="360"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Stack>
    </Box>
  );
};

export default ContactUs;
