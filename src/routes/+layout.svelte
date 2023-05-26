<script>
    import "../app.css";
</script>

<h1>Svelte Pokédex</h1>
<div class="columns-2">
    <p>Well, let me tell you something, ...</p>
    <p class="break-before-column">Sure, go ahead, laugh...</p>
    <p>Maybe we can live without...</p>
    <p>Look. If you think this is...</p>
</div>
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/pokemons">All Pokémons</a></li>
</ul>

<slot />

<style>
</style>