<script lang="ts">
    import { onMount } from "svelte";

    let pokemonsArray: any = [];
    let loading: boolean = true;

    onMount(async () => {
        for (let i = 1; i < 32; i++) {
            const resEachPokemon = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${i}`
            );
            let pokemon = await resEachPokemon.json();

            if (resEachPokemon.ok) {
                console.log(pokemonsArray.push(pokemon));
                //console.log("foi o pokemon" + i);
                //console.log(pokemonsArray);
            }
        }
        loading = false;
    });
    //container rounded-xl bg-slate-300 mx-auto p-5 columns-5
</script>

<h1>Pokemons</h1>
<div class="rounded-xl bg-slate-300 mx-5 p-5">
    <ul class="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-5">
        {#if !loading}
            {#each pokemonsArray as pokemon}
                <li>
                    <div class="container m-auto border border-black rounded-md font-bold underline justify-center">
                        <p class="text-center">
                            {pokemon["species"]["name"]}
                        </p>
                        <img
                            src={pokemon["sprites"]["front_default"]}
                            alt={pokemon["species"]["name"]}
                        />
                    </div>
                </li>
            {/each}
        {:else}
            <p>Loading...</p>
        {/if}
    </ul>
</div>

<style lang="postcss">
</style>
