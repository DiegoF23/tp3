import React from "react";
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import Footer from "../components/Footer";
import { Grid } from "@mui/material";

const Home = ({ navArrayLinks, User }) => {
  return (
    <>
      <Header navArrayLinks={navArrayLinks} User={User} />
      <Grid>
        <MainHome />
        <Footer User={User} />
      </Grid>
    </>
  );
};

export default Home;
