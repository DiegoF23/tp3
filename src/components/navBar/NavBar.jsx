import React, { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import {
  AppBar,
  Button,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const NavBar = ({ navArrayLinks, User }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: User.color,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component="img"
            sx={{
              height: 70,
              width: 70,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              borderRadius: 100,
              my: 1,
              mr: 1,
            }}
            alt="perfil"
            src={User.imgPerfil}
          />

          <Typography variant="h6" color={User.CFuente} sx={{ flexGrow: 1 }}>
            {User.usuario}
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, color:User.CFuente }}>
            {navArrayLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                <IconButton color="inherit" size="large" sx={{ mt: -1 , color:User.CIcon}}>
                  {item.icon}
                </IconButton>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer
          navArrayLinks={navArrayLinks}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
};

export default NavBar;
