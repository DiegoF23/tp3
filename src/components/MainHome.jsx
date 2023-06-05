import React from "react";
import Typography from "@mui/material/Typography";
import { Paper, Box, Button, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  width: 400,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

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
          {array.map((item) => (
            <Box key={item.id} textAlign="center">
              <Paper
                sx={{
                  gap: 2,
                  overflow: "hidden",
                  mt: 5,
                }}
              >
                <Img src="https://via.placeholder.com/1200x300" alt="random" />
                <Box sx={{ flexGrow: 1 }}>
                  <h2>{item.nombre}</h2>
                  <p>{item.apellido}</p>
                  {item.boton}
                </Box>
                <Box component="p" sx={{ mr: 2 }}></Box>
              </Paper>
            </Box>
          ))}
        </Carousel>
      </Grid>
    </>
  );
};

export default MainHome;
