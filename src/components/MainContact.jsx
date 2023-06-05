
import { Grid, Container, Box, Button, TextField } from "@mui/material";
import React from "react";
import SendIcon from '@mui/icons-material/Send';
// import "../css/MainContact.css";
import { useState } from "react";
import { Table } from "react-bootstrap";
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
      nombre: "Enzo Gonzales",
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

  const deleteConsulta = (id) => {
    const resultado = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(resultado);
  };
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
    alert("Gracias me contactare con tigo 😉");
    e.target.reset();
  };

  

  

  return (
    <>
      <Container maxWidth={false} sx={{ bgcolor: "#526D82", color: "white" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <h1 className="text-center">Contactame</h1>
            <br />
            <br />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box textAlign='center' component="form" onSubmit={agregarConsulta} sx={{border:1,borderColor: "#9DB2BF",borderRadius:2,
            p:1,mb:2}}>
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
                sx={{ mt: 2 }}
              >
                Enviar
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={8}>
            <div className="contact">
              <div className="form-table">
                <div className="tabla">
                  <Table striped bordered hover className="container">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Nombre </th>
                        <th>Email</th>
                        <th>Descripcion</th>
                        <th>acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pedidos.map((pedido) => (
                        <tr key={pedido.id}>
                          <td>{pedido.id}</td>
                          <td>{pedido.nombre}</td>
                          <td>{pedido.email}</td>
                          <td>{pedido.descripcion}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteConsulta(pedido.id)}
                            >
                              eliminar 😕
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MainContact;
