import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Perfil from "./assets/perfil.jpeg";
import { Box } from "@mui/material";

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
  }
  
  
  
];
const User = {
  usuario: "Flores Aguirres Diego",
  imgPerfil: Perfil,
  color: "#27374D",
  CFuente: "#DDE6ED",
  CIcon: "#DDE6ED",
  edad:28,
  legajo:55543,
  tel:"+54 381 6155136",
  carrera:"Programacion",
  uni:'UTN-FRT',
  email:"floresdiego2012@gmail.com",
  direccion:"calle falsa 123",
  residencia:"Tucuman,ARG",
  gitHub:"https://github.com/DiegoF23/PortfolioUTN",
  facebook:"https://www.facebook.com/",
  instagram:"https://www.instagram.com/",
  twitter:"https://www.twitter.com/"
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
