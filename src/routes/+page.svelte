<script lang="ts">

    let clicks: number = 0;
    let found: boolean = false;
    let searchPokemonName = "";
    let pokemonName = "";
    let spriteURL = "";

    function handleClick() {
        clicks ++;
    }

    function handleChange(event: any) {
        searchPokemonName = event.target.value;
    }

    async function getPokemon() {
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${searchPokemonName}`
        );
        const pokemonData = await res.json();

        if (res.ok) {
            pokemonName = pokemonData['species']['name'];
            spriteURL = pokemonData['sprites']['front_default'];
            found = true;
        }
    };
</script>

<h1>Contador de Clique</h1>
<button on:click={() => handleClick()}>Clique Aqui</button>
<p>{clicks}</p>

<h1>Procure um pokemon</h1>
<input class="text-black border-blue-500" type="text" on:change={(event) => handleChange(event)}>
<button on:click={() => getPokemon()}>Pesquisar</button>
<br/>

    {#if found}
        <img src={spriteURL} alt={pokemonName} />
        <p>{pokemonName}</p>
    {/if}

<style>
</style>
