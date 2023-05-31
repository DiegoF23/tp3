import { Button, Grid, Typography } from '@mui/material'

import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useState } from 'react';


const Img = styled("img")({
  width: 100,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});




const Header = () => {
  const [num,setNum]= useState(1)
   const incremento = () =>{
    num >= 3 ? setNum(1) : setNum(num + 1);

   } 
  return (
   <Grid sx={{
     border:2,
     
     p:1,
     pb:0
   }}
   item
   xs={12}
   sm={6}
   md={4}
   >
        <Img sx={{borderRadius:30}}
        src={`${num}.jpg`}
        alt="random"
      />
      <Button onClick={incremento}> hola</Button>
   </Grid>
  )
}

export default Header