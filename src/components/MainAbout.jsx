import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Container, Grid, Typography, Button } from "@mui/material";

const MainAbout = ({Alumno}) => {
  const [num,setNum]=useState(2)
  const interactuar=()=>{
    num >=3 ? setNum(1): setNum(num+1)
  }
  return (
    <>
      <Container  maxWidth={false} sx={{ bgcolor: "#526D82", color: "white" }}>
        <Grid sx={{mt:10.8}} container spacing={2}>
        <Grid item xs={12} sm={12} md={6} sx={{}}>
        <Box
            component="img"
            sx={{
              height: 300,
              width: 250,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              borderRadius: 30,
              display:"flex",
              
            }}
            alt="perfil"
            src={`${num}.jpg`}
          />
          <Button onClick={interactuar} sx={{mt:2,ml:5}} variant="contained" color="primary">
            cambiar Imagen
          </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{}}>
            <Box sx={{p:1}}>
              <Typography variant="body1" color="white" textAlign="justify"> Bienvenidos a la presentación de {Alumno.nombre}, estudiante
            de la carrera Tecnicatura Universitaria en Programación en la {Alumno.uni}, nacido en San José de Metán, Salta, Argentina, con {Alumno.edad} años.
            Diego ha estado desarrollando habilidades en programación durante
            los últimos años y actualmente se encuentra en su último año de la
            carrera. Ha trabajado con lenguajes como C++, Pascal, C#, SQLserver,
            mySQL, HTML, CSS, Bootstrap, JavaScript y React, entre otros. Su
            pasión por la informática lo ha llevado a tener un amplio
            conocimiento en estas áreas. Pero Diego no solo se enfoca en la
            informática, también tiene intereses en la carpintería, finanzas,
            inversiones, cocina, electrónica y disfruta de una amplia variedad
            musical. Esta diversidad de intereses ha ampliado su perspectiva y
            le ha permitido desarrollar habilidades en diferentes campos. Con su
            actitud proactiva y su constante deseo de aprendizaje, Diego está
            seguro de que puede contribuir en cualquier proyecto que se
            proponga. No dudes en contactarlo si estás buscando un profesional
            dedicado y apasionado en su trabajo.</Typography>
            </Box>
          </Grid>

        </Grid>
          
      </Container>
    </>
  );
};

export default MainAbout;
