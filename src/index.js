// Here i import router, and then created an element that will listen when the page is loaded, and will push the route that we need

import router from "./routes";

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
