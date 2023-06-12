import React from "react";
import Header from "../components/Header";

import MainAbout from "../components/MainAbout";
import Footer from "../components/Footer";
import { Grid } from "@mui/material";
const About = ({ navArrayLinks, User }) => {
  return (
    <>
      <Header navArrayLinks={navArrayLinks} User={User} />
      <Grid>
        <MainAbout User={User} />
        <Footer User={User} />
      </Grid>
    </>
  );
};

export default About;
