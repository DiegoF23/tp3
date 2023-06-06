import React from "react";
// import { Box, Container, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from "@mui/material";
const Footer = () => {
  return (
    <>
    <Box
      component="footer"
      sx={{
        backgroundColor: "#DDE6ED",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Soy un estudiante de programacion de la UTN-FRT
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Calle Falsa 123,Tucuman,ARG
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: floresdiego2012@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +54 381 6155136
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Me
            </Typography>
            <Link href="https://github.com/DiegoF23/PortfolioUTN" color="inherit" target="_blank" sx={{  pr: 1 }}>
              <GitHubIcon/>
            </Link >
            <Link href="https://www.facebook.com/" color="inherit" target="_blank"> 
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" target="_blank">
              <Twitter />
            </Link>
            
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
     
    </>
  );
};

export default Footer;
