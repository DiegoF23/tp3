import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, Container } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ImagenC from "../assets/construccion.jpg";

const MainHome = () => {
  return (
    <>
      <Container maxWidth={false} sx={{ bgcolor: "#526D82", color: "white" }}>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 13 }} textAlign="center" item xs={12} sm={12}>
            <Grid>
              <Typography
                variant="h1"
                color="initial"
                sx={{ fontFamily: "Kaushan Script" }}
              >
                MainHome <EngineeringIcon style={{ fontSize: 70 }} />
              </Typography>
              <Box
                component="img"
                sx={{
                  height: 400,
                  width: 700,

                  borderRadius: 30,
                }}
                alt="construccion"
                src={ImagenC}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MainHome;
