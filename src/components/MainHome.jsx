import React from "react";
import Typography from "@mui/material/Typography";
import { Paper, Box, Button, Grid } from "@mui/material";

import { styled } from "@mui/material/styles";
import EngineeringIcon from '@mui/icons-material/Engineering';
import ImagenC from "../assets/construccion.jpg"

const Img = styled("img")({
  width: 400,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

const MainHome = () => {
  

  return (
    <>
      <Grid>
        <Typography variant="h1" color="initial" sx={{fontFamily:'Kaushan Script'}}>
          MainHome  <EngineeringIcon style={{ fontSize: 70 }}/> 
        </Typography>
        <Box
            component="img"
            sx={{
              height: 400,
              width: 700,
              
              borderRadius: 30
             
              
            }}
            alt="construccion"
            src={ImagenC}
          />
        
      </Grid>
    </>
  );
};

export default MainHome;
