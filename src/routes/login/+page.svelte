<script>

</script>

<div class="h-screen w-screen flex justify-center content-center bg-slate-400">
    <div class="m-auto bg-slate-50 rounded-xl flex flex-col p-5 space-x-0">
        <h6 class="font-semibold text-3xl">Login</h6>
        <form class="flex flex-col gap-y-4 px-3 py-2 my-2">
            <input class="rounded p-1 outline outline-1 hover:outline-2" 
            type="text"
            placeholder="Nome de usuário"/>
            <input class="rounded p-1 outline outline-1 hover:outline-2 active:outline-blue-600 focus:outline-blue-600" 
            type="password"
            placeholder="Senha"/>
            <div class="flex sm:flex-col md:flex-row">
                <button class="px-12 py-2 max-w-fit text-teal-500 rounded bg-transparent hover:text-blue-600 ">Não tenho conta</button>
                <button class="bg-blue-600 text-white px-12 py-2 rounded hover:bg-blue-700">Entrar</button>
            </div>
        </form>
    </div>
</div>