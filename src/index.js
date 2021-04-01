// Here i import router, and then created an element that will listen when the page is loaded, and will push the route that we need
import css from "./styles/style.css";
import router from "./routes/index";
import Header from "./templates/Header";
// import About from "./pages/About";


window.addEventListener("load", router);
window.addEventListener("hashchange", router);


