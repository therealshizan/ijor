import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const OnlineSubmission = () => {
  const [formData, setFormData] = useState({
    fullName: "Shizan",
    mobile: "9930952947",
    articleTitle: "Title",
    articleSubject: "Subject",
    address: "Kurla West",
    primaryEmail: "shizan@fmail.com",
    alternateEmail: "shaikh@fmail.com",
    file: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Handle the response as needed
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box mx={2} my={2}>
      <Typography variant="h6" mb={4} align="center">
        Online Submission
      </Typography>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label={"Full Name"}
              variant="outlined"
              fullWidth={true}
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              name="fullName"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={"Mobile No"}
              variant="outlined"
              fullWidth={true}
              required
              type="tel"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              name="mobile"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={"Article Title"}
              variant="outlined"
              fullWidth={true}
              required
              value={formData.articleTitle}
              onChange={(e) =>
                setFormData({ ...formData, articleTitle: e.target.value })
              }
              name={"articleTitle"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={"Article Subject"}
              variant="outlined"
              fullWidth={true}
              required
              value={formData.articleSubject}
              onChange={(e) =>
                setFormData({ ...formData, articleSubject: e.target.value })
              }
              name={"articleSubject"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Residential Address for Hard Copy"}
              variant="outlined"
              fullWidth={true}
              required
              multiline
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              name={"address"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={"Primary Email Id"}
              variant="outlined"
              fullWidth={true}
              required
              type="email"
              value={formData.primaryEmail}
              onChange={(e) =>
                setFormData({ ...formData, primaryEmail: e.target.value })
              }
              name={"primaryEmail"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={"Alternate Email Id"}
              variant="outlined"
              fullWidth={true}
              required
              type="email"
              value={formData.alternateEmail}
              onChange={(e) =>
                setFormData({ ...formData, alternateEmail: e.target.value })
              }
              name={"alternateEmail"}
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="article-file">
              Upload Your Article (required) (You can attach up to 2MB Word
              Document)
            </label>
            <TextField
              id="article-file"
              variant="outlined"
              fullWidth={true}
              required
              // value={formData.file}
              type="file"
              onChange={(e) =>
                setFormData({ ...formData, file: e.target.files[0] })
              }
              name={"file"}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default OnlineSubmission;
