import React from "react";

import Container from "@mui/material/Container";

import Header from "../components/Header";
import MainHome from "../components/MainHome";
import Footer from "../components/Footer";

const Home = ({navArrayLinks,User}) => {
 
  return (
    <>
      <Header navArrayLinks={navArrayLinks}  User={User}/>
      <Container sx={{ mt: 11 }}>
        <MainHome />
        <Footer User={User}/>
      </Container>
    </>
  );
};

export default Home;
