import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const MainHome = () => {
  const array = [
    {
      id: 1,
      nombre: "Diego",
      apellido: "Flores Aguirres",
      boton: <Button>Eliminar</Button>,
    },
    {
      id: 2,
      nombre: "Maria victoria",
      apellido: "Abraham",
      boton: <Button>Eliminar</Button>,
    },
    {
      id: 3,
      nombre: "Alvaro",
      apellido: "Albornoz",
      boton: <Button>Eliminar</Button>,
    },
    {
      id: 3,
      nombre: "Enzo",
      apellido: "Gonzales",
      boton: <Button>Eliminar</Button>,
    },
  ];

  return (
    <>
      <Grid>
        <Typography variant="h1" color="initial">
          MainHome
        </Typography>
        <Carousel>
          {array.map((item)=>(
            <Box textAlign='center'>
            <Typography variant="h1" color="initial">{item.nombre}</Typography>
            <Typography variant="h3" color="initial">{item.apellido}</Typography>
            
            {item.boton}
            </Box>
            
          ))}
        </Carousel>




      </Grid>
    </>
  );
};

export default MainHome;
