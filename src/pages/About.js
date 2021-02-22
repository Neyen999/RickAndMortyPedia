const About = () => {
  const view = `
        <div class="Project">
          <div class="Project-description">
            <div class="Project-description_el">
              <h2>Estas son las herramientas con las cuales se realizo este proyecto:</h2>
              <ul>
                <li>
                  Html  
                </li>
                <li>
                  Css
                </li>
                <li>
                  Javascript Vanilla
                </li>
                <li>
                  Webpack
                </li>
                <li>
                  Babel
                </li>
              </ul>
            </div>
            <div class="Tools-explanation">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta autem repellat unde, facilis culpa reprehenderit possimus porro aliquid nesciunt commodi nobis est eum iure! Velit ut autem nostrum consequatur?</p>
            </div>
          </div>
        </div>
        <div class="carousel">
          <button class="arrow arrow-left" aria-label="backward button"></button>
            <div class="window">
              <ul class="project-container">
                <li class="project1-container"><button class="project1 project"><img src="images/project1.png" class="project-img" alt="Mi primer proyecto"/></button></li>
                <li class="project2-container"><button class="project2 project"><img src="images/project2.png" class="project-img" alt="Mi segundo proyecto"/></button></li>
                <li class="project3-container"><button class="project3 project"><img src="images/project3.png"class="project-img" alt="Mi tercero proyecto"/></button></li>
                <li class="project4-container" aria-hidden="true"><button class="project4 project" tabindex="-1"><img src="images/project4.png" class="project-img" alt="Mi cuarto proyecto"/></button></li>
                <li class="project5-container" aria-hidden="true"><button class="project5 project" tabindex="-1"><img src="images/project5.png" class="project-img" alt="Mi quinto proyecto"/></button></li>
              </ul>
            </div>
          <button class="arrow arrow-right" aria-label="forward button"></button>
    </div>
      `;
  return view;
};

export default About;
