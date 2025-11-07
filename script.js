const fetchData = async () => {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const errorElement = document.getElementById("errorMessage");
        const imgElement = document.getElementById("pokemonSprite");
    try {
      if (!pokemonName) {
      throw new Error("Please enter a Pokémon name");
    }

         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error("Pokemon not found");
        }
 
          const data = await response.json();
         
          const pokemonSprite = data.sprites.front_default;
          
          imgElement.src = pokemonSprite;
          imgElement.style.display = "block";
          
           errorElement.textContent = "";
    
    
    } catch (error) {
         errorElement.textContent = error.message;
         imgElement.style.display = "none";
    }
};