// Import templates and pages

import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import About from "../pages/About";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

// Then we create the routes

const routes = {
  "/": Home,
  "/:id": Character,
  about: About, // Dado que el route nos devuelve "contact" y "about" no es necesario poner comillas, directamente ponemos el nombre.
};

// We create our handler

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);

  let render = routes[route] ? routes[route] : Error404;
  // debugger;
  content.innerHTML = await render();
};

export default router;
