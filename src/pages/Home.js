const poke_container = document.getElementById("character");
const pokemon_number = 150;


const charsCount = async () => {
  for (let i = 1; i <= pokemon_number; i++) {
    await getChar(i);
  }
};

const getChar = async id => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  Home(data);
}
charsCount();


const Home = data => {
  const charEl = document.createElement("div");
  charEl.classList.add("Character--inner");

  const charInnerHTML = `
  <article class="Character-item">
    <a href="#/${data.id}/">
      <div class="img-container">
        <img src="https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg" loading="lazy" alt="${data.name}"/>
      </div>
      <div class="info">
        <span class="number">#${data.id.toString().padStart(3, "0")}</span>
        <h2 class="name">${data.name}</h2>
      </div>   
      ${data.name}
    </a>
  </article>
  `;

  charEl.innerHTML = charInnerHTML;

  poke_container.appendChild(charEl)

}
export default Home;
// https://rickandmortyapi.com/api/character/avatar/2.jpeg;