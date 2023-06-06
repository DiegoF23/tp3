import React from "react";
import Header from "../components/Header";
import {Grid } from "@mui/material";
import MainAbout from "../components/MainAbout";
import Footer from "../components/Footer";
const Alumno={
  'nombre':"Diego Flores Aguirres",
  'edad':28,
  'legajo':55543,
  'tel':3816155136,
  'uni':'UTN FRT'
  
}
const About = ({ navArrayLinks, User }) => {
  return (
    <>
      <Header navArrayLinks={navArrayLinks} User={User} />
      <Grid>
        <MainAbout Alumno={Alumno} />
        <Footer />
      </Grid>
    </>
  );
};

export default About;
