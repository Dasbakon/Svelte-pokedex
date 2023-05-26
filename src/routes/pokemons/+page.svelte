<script lang="ts">
    import { onMount } from "svelte";
    import PokemonCard from "../../PokemonCard/PokemonCard.svelte";
    import { to_number } from "svelte/internal";

    let pokemonsArray: any = [];
    let loading: boolean = true;
    let from: number = 1;
    let to: number = 20;

    onMount(() => getPokemons());

    async function getPokemons() {
        pokemonsArray = [];
        for (let i = from; i <= to; i++) {
            try {
                const resEachPokemon = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${i}`
                );
                let pokemon = await resEachPokemon.json();
    
                if (resEachPokemon.ok) {
                    console.log(pokemonsArray.push(pokemon));
                }
            } 
            catch (error) {
                console.log(error);
                break;
            }
        }
        loading = false;
    }
    //container rounded-xl bg-slate-300 mx-auto p-5 columns-5
    function handleChangeFrom(_value: string) {
        if (_value.length == 0) {
            from = to | 1;
            return;
        }
        from = Number.parseInt(_value);
    }

    function handleChangeTo(_value: string) {
        if (_value.length == 0) {
            to = from | 10;
            return;
        }
        to = Number.parseInt(_value);
    }
</script>

<h1>Pokemons</h1>
<p>Escolha o range dos pokemons</p>
<div class="flex-col flex w-48 columns-2">
    <label for="">De</label>
    <input type="number" on:change={(event) => handleChangeFrom((event.target)?.value)}/>
    <label for="">Até</label>
    <input type="number" on:change={(event) => handleChangeTo((event.target)?.value)}/>
    <button
        class="bg-gray-400"
        on:click={() => {
            loading = true;
            getPokemons();
        }}>Mostrar</button
    >
</div>

<div class="rounded-xl bg-slate-300 mx-5 p-5">
    <ul
        class="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-5"
    >
        {#if !loading}
            {#each pokemonsArray as pokemon}
                <li>
                    <PokemonCard
                        e_name={pokemon["species"]["name"]}
                        e_imageURL={pokemon["sprites"]["front_default"]}
                    />
                </li>
            {/each}
        {:else}
            <p>Loading...</p>
        {/if}
    </ul>
</div>

<style lang="postcss">
</style>
