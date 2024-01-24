import './style.css'
export const planets = `
<div class="gif h-screen w-full flex flex-col  gap-40 justify-center items-center">
  <header class="w-1/2">
    <h1 class="text-5xl w-full mt-6 mb-16">Calculate a weight of an object on a planet </h1>

    <input class="p-1 border-solid border-2 border-sky-500 text-gray-500 mr-4 text-lg" type="number" id="mass" placeholder="Mass in Kilogram" />
    <select id="planet" class="p-1 border-solid border-2 border-sky-500 mr-4 text-lg text-gray-500">
      <option class="border-solid" value='none'> --Select planet-- </option>
      <option class="border-solid" value='Mercury'>Mercury</option>
      <option class="border-solid" value='Venus'>Venus</option>
      <option class="border-solid" value='Earth'>Earth</option>
      <option class="border-solid" value='Moon'>Moon</option>
      <option class="border-solid" value='Mars'>Mars</option>
    </select>
    <button class="bg-sky-800 p-1 border-solid border-2 border-sky-500 mr-4 text-lg" id="calculate" type="button">Calculate weight</button>
  </header>

  <main class="w-1/2">
    <div id="planet-info" class="flex items-center gap-4 justife-betweend p-4 w-full hidden">
      <div class="w-1/2">
        <img class="w-96" src='./assets/earth.png' />
      </div>
      <div class="flex flex-col bg-[#242424] border-solid rounded-lg p-6 w-1/2 text-2xl items-center gap-4">
        <p>Texto de prueba <span class="text-white font-bold">Pluton</span></p>
        <div class="bg-[#454646] rounded-[50%] flex justify-center items-center min-w-32 h-32 p-2 text-white font-bold text-center"  id="weight">7.00000 N</div>
      </div>
    </div>

    <div id="massRequired" class="flex justify-center rounded-md bg-[#242424] p-4">
      <p class="text-4xl text-center rounded-md bg-[#454646] p-4">Mass is required</p>
    </div>
  </main>
</div>
`