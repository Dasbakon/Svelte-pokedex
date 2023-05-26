<script lang="ts">
    export let e_name: string = 'Pokémon Name';
    export let e_imageURL: string = '';
</script>

<div
    class="
                        #LAYOUT container
                        #FLEX/GRID
                        #SPACING m-auto border border-black rounded-md font-bold tracking-tighter underline justify-center break-inside-avoid-column box-border
                        #BG bg-gradient-to-t from-transparent from-10% to-slate-200 to-90%"
>
    <p class="text-center font-pokemon">
        {e_name}
    </p>
    <img
        src={e_imageURL}
        alt={e_name}
    />
</div>
