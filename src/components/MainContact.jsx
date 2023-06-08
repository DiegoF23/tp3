import {
  Paper,
  Grid,
  Container,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

import Carousel from "react-material-ui-carousel";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { enqueueSnackbar } from "notistack";

const sucessClick = () => {
  enqueueSnackbar("Enviado con Exito, me contactare a la brevedad 😉", {
    variant: "success",
    anchorOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  });
};
const deleteClick = () => {
  enqueueSnackbar("Se Elimino la consulta 😕", {
    variant: "error",
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  });
};
const Img = styled("img")({
  width: 100,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: 50,
});
const MainContact = () => {
  const consultas = [
    {
      id: 1,
      nombre: "Maria Abraham",
      email: "emailEjemplo@gmail.com",
      descripcion:
        "Me interesa contactarme con tigo para el desarrollo de una pag Web",
    },
    {
      id: 2,
      nombre: "Enzo Gonzalez",
      email: "enzito@gmail.com",
      descripcion: "Hola cual es el presupuesto de los proyectos en React",
    },
    {
      id: 3,
      nombre: "Nelson Lobo",
      email: "nelsonLobo@hotmail.com",
      descripcion:
        "Necesito realizar un proyecyo en C# con conexion a BD SQL Server, contactame para mas informacion",
    },
    {
      id: 4,
      nombre: "Ricardito",
      email: "helloPdf@noCode.com",
      descripcion: "Abran el PDF",
    },
  ];

  const [pedidos, setPedidos] = useState(consultas);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");
  //const [id, setId] = useState(null);

  const nuevoID = () => {
    const ultimoObjeto = pedidos[pedidos.length - 1];
    const ultimoId = ultimoObjeto ? ultimoObjeto.id : 0;
    const nuevoId = ultimoId + 1;
    return nuevoId;
  };
  const agregarConsulta = (e) => {
    e.preventDefault();
    const nuevoId = nuevoID();
    setPedidos([...pedidos, { id: nuevoId, nombre, email, descripcion }]);
   
    sucessClick();
    e.target.reset();
  };
  const deleteConsulta = (id) => {
    const resultado = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(resultado);
    deleteClick();
  };

  return (
    <>
      <Container maxWidth={false} sx={{ bgcolor: "#526D82", color: "white" }}>
        <Grid container spacing={2}>
          <Grid sx={{mt:13}} textAlign="center" item xs={12} sm={12}>
            <br />
            <Typography variant="h2" color="white" sx={{fontFamily: 'Kaushan Script'}}>
              Contactame
            </Typography>
            <br />
            <br />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              textAlign="center"
              component="form"
              onSubmit={agregarConsulta}
              sx={{
                border: 1,
                borderColor: "#9DB2BF",

                borderRadius: 2,
                p: 1,
                mb: 2,
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.06)",
                },
              }}
            >
              <TextField
                label="Nombre"
                id="nombre"
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputProps={{
                  style: {
                    color: "white",
                    borderColor: "#9DB2BF",
                  },
                }}
                type="text"
                variant="outlined"
                fullWidth
                helperText=""
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                sx={{ mt: 1 }}
              />

              <TextField
                label="E-mail"
                id="email"
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputProps={{
                  style: {
                    color: "white",
                    borderColor: "#9DB2BF",
                  },
                }}
                type="email"
                variant="outlined"
                fullWidth
                helperText=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mt: 1 }}
              />

              <TextField
                label="Descripcion"
                id="description"
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputProps={{
                  style: {
                    color: "white",
                    borderColor: "#9DB2BF",
                  },
                }}
                type="text"
                variant="outlined"
                fullWidth
                multiline
                maxRows={4}
                helperText=""
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                sx={{ mt: 1 }}
              />

              <Button
                type="submit"
                variant="contained"
                color="success"
                size="large"
                endIcon={<SendIcon />}
                
                sx={{
                  mt: 2,
                  mb:1.2,
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.06)",
                  },
                }}
              >
                Enviar
              </Button>
            </Box>
          </Grid>

          <Grid sx={{ ml: 2 }} item xs={12} sm={12} md={7.4} lg={7.8}>
            <Carousel
            
              sx={{
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.06)",
                },
              }}
            >
              {pedidos.map((item) => (
                <Box key={item.id}>
                  <Paper
                    sx={{
                      gap: 2,
                      overflow: "hidden",
                      backgroundColor: "#9DB2BF",
                      padding: 0.8,
                    }}
                  >
                    <Box sx={{ display: "flex" ,alignItems:"center" , flexDirection:"column"}}>
                      <Img
                        src={`https://picsum.photos/id/${item.id}/100`}
                        alt="random"
                      />
                      <Box textAlign={"center"} sx={{ ml: 2 }}>
                        <Typography variant="h3" sx={{ marginBottom: "2px" }}>
                          {item.nombre}
                        </Typography>
                        <Typography variant="h6" sx={{ marginTop: "2px" }}>
                          {item.email}
                        </Typography>
                      </Box>
                    </Box>
                    <Box textAlign="center" sx={{ flexGrow: 1 }}>
                      <p>{item.descripcion}</p>
                      <Button
                        size="large"
                        startIcon={<DeleteIcon />}
                        variant="contained"
                        color="error"
                        onClick={() => deleteConsulta(item.id)}
                        sx={{
                          my: 1,
                         
                          transition: "0.2s",
                          "&:hover": {
                            transform: "scale(1.07)",
                          },
                        }}
                      >
                        Eliminar
                      </Button>
                    </Box>
                    
                  </Paper>
                </Box>
              ))}
            </Carousel>
            <br></br>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MainContact;
