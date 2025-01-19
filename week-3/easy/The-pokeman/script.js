/** @format */

async function fetchPokemon() {
  const numOfCards = document.getElementById("numOfCards").value;
  const category = document.getElementById("category").value;
  const cardContainer = document.getElementById("cardContainer");

  cardContainer.innerHTML = "";

  for (let i = 1; i <= numOfCards; i++) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();

      const types = data.types.map((t) => t.type.name).join(", ");
      if (category === "all" || types.includes(category)) {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <h3>${data.name}</h3>
        `;

        cardContainer.appendChild(card);
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  }
}
