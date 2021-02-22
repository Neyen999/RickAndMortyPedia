const Header = () => {
  const view = `
  <div class="Header-main">
      <div class="Header-logo">
          <h1>
              <a href="/">Rick & Morty</a>
          </h1>
      </div>
      <div class="Header-nav">
          <ul>
            <li>
              <a href="/">
               Inicio
              </a>
            </li>
            <li>
              <a href="#/contact/">
               Contacto
              </a>
            </li>
            <li>
              <a href="#/about/">
               Acerca De
              </a>
            </li>
          </ul>
      </div>
  </div>
    `;
  return view;
};

export default Header;
