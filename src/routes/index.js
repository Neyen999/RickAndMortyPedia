// Import templates and pages

import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

// Then we create the routes

const routes = {
  "/": Home,
  "/:id": Character,
};

// We create our handler

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();

  const inputSearch = document.getElementById("search");
  const sendButton = document.getElementById("send");

  // We get the data for the search input

  const getData = async (name) => {
    const API = `https://rickandmortyapi.com/api/character/?name=${name}`;
    const response = await fetch(API);
    const data = await response.json();
    return data
  };
  
  const getInfo = () => {
    getData(inputSearch.value)
      .then((data) => {
        content.innerHTML = `
          <div class="Character--inner">
            ${data.results.map(datos => `
              <article class="Character-inner">
                <a href="#/${datos.id}/" class="searched">
                  <div class="Character-card-one">
                    <img src="${datos.image}"/>
                    <h2>${datos.name}</h2>
                  </diV>
                  <div class="Character-card-two">
                    <h3>Episodios: ${datos.episode.length}</h3>
                    <h3>Estado: ${datos.status}</h3>
                    <h3>Especie: ${datos.species}</h3>
                    <h3>Género: ${datos.gender}</h3>
                    <h3>Origen: ${datos.origin.name}</h3>
                    <h3>Locación actual: ${datos.location.name}</h3>
                  </div>
                </a>
              </article>
            `)}
          </div>
        `
      })
      .then(setTimeout(() => {
        inputSearch.value = "";
        inputSearch.placeholder;
      }, 2000))
  }

  let hash = getHash();
  let route = await resolveRoutes(hash);

  document.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
      getInfo();
    }
  })
  sendButton.addEventListener("click", getInfo);

  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;
