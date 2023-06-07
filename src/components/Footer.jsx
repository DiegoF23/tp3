import React from "react";
// import { Box, Container, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from "@mui/material";
const Footer = ({User}) => {
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
              Soy un estudiante de {User.carrera} de la {User.uni}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {User.direccion},{User.residencia}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: {User.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: {User.tel}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Me
            </Typography>
            <Link href={User.gitHub} color="inherit" target="_blank" sx={{  pr: 1 }}>
              <GitHubIcon sx={{fontSize: 40 }}/>
            </Link >
            <Link href={User.facebook} color="inherit" target="_blank"> 
              <Facebook sx={{fontSize: 40 }} />
            </Link>
            <Link
              href={User.instagram}
              target="_blank"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram sx={{fontSize: 40 }}/>
            </Link>
            <Link href={User.twitter} color="inherit" target="_blank">
              <Twitter sx={{fontSize: 40 }} />
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
