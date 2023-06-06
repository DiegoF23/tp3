import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Perfil from "./assets/perfil.jpeg";
import { Box, Container } from "@mui/material";

const navArrayLinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Contact",
    path: "/Contact",
    icon: <ContactMailIcon />,
  },
  {
    title: "About",
    path: "/About",
    icon: <AccountCircleIcon />,
  },
  
  
  
];
const User = {
  usuario: "Flores Aguirres Diego",
  imgPerfil: Perfil,
  color: "#27374D",
  CFuente: "#DDE6ED",
  CIcon: "#DDE6ED",
};

function App() {
  return (
    <Box height={"101.7vh"} bgcolor={"#DDE6ED"} >
      <Routes>
        <Route
          path="/"
          element={<Home navArrayLinks={navArrayLinks} User={User} />}
        />
        <Route
          path="/Contact"
          element={<Contact navArrayLinks={navArrayLinks} User={User} />}
        />
        <Route
          path="/About"
          element={<About navArrayLinks={navArrayLinks} User={User} />}
        />
      </Routes>
    </Box>
  );
}

export default App;
