const About = () => {
  const view = `
        <div class="Project limits">
            <div class="Project-description_el">
              <h2 class="titles">Estas son las herramientas con las cuales se realizo este proyecto:</h2>
              <div class="Project-description_content">
                <ul class="Project-description_content_ul">
                  <li>
                    <span>Html</span>
                    <img src="https://i.postimg.cc/QCh449f8/html.png" alt="Html Logo">  
                  </li>
                  <li>
                    <span>Css</span>
                    <img src="https://i.postimg.cc/zBmPhPWR/css.png" alt="Css Logo">
                  </li>
                  <li>
                    <span>Javascript Vanilla</span>
                    <img src="https://i.postimg.cc/26497FF9/js.png" alt="Javascript Logo">
                  </li>
                  <li>
                    <span>Webpack</span>
                    <img src="https://i.postimg.cc/NFDNWsn1/webpack.png" alt="Webpack Logo">
                  </li>
                  <li>
                    <span>Babel</span>
                    <img src="https://i.postimg.cc/nL9PCtsJ/babel.png" alt="Babel Logo">
                  </li>
                </ul>
                <p class="About-description">Para comenzar, este es mi primer proyecto, hecho totalmente con las herramientas mencionadas arriba, es un proyecto simple, pero un proyecto al fin. El mayor reto que me encontre con este fue manejar Webpack 100% por cuenta propia, dado que ciertas características de Webpack funcionan con versiones específicas. </p>
                <span class="About-span">Estas son las versiones de las herramientas de Webpack que utilicé:</span>
                <hr>
                <ul class="Project-description_content_ul">
                  <li>Webpack v:4.46.0</li>
                  <li>Webpack Dev Sers v:3.11.2</li>
                  <li>Webpack-Cli v:3.3.12</li>
                  <li>Babel Core v:7.12.17</li>
                  <li>Css-Loader v:2.1.1</li>
                  <li>File-Loader v:3.0.0</li>
                  <li>Html-Webpack-Plugin v:3.2.0</li>
                  <li>Prettier v:2.2.1</li>
                  <li>Style-Loader v:2.0.0</li>
                </ul>
              </div>
          </div>
        </div>
      `;
  return view;
};

export default About;
