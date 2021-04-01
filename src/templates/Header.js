const Header = () => {
  const view = `
  <div class="Header-main limits">
      <div class="Header-logo">
        <a href="/">
          <img src="https://fontmeme.com/permalink/210223/f19e75f840228797c9eeb0f4e323f728.png" alt="fuente-get-schwifty" border="0" class="Header-logo_img"></a>
        </a>
      </div>
      <input id="search" type="text" autocomplete="off" placeholder="Busca a tu personaje favorito"/>
      <input id="send" type="submit" value="Buscar">
  </div>
    `;
  return view;
};

export default Header;
