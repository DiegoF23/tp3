import React from "react";
import Header from "../components/Header";
import {Grid } from "@mui/material";
import MainAbout from "../components/MainAbout";
import Footer from "../components/Footer";
const About = ({ navArrayLinks, User }) => {
  return (
    <>
      <Header navArrayLinks={navArrayLinks} User={User} />
      <Grid>
        <MainAbout User={User} />
        <Footer User={User}/>
      </Grid>
    </>
  );
};

export default About;
