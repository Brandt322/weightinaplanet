import './style.css'
import { calculateWeight } from './calculate'

document.querySelector('#app').innerHTML = `
<header class="w-1/2 justify-start">
  <h1 class="text-5xl w-full mt-6 mb-16">Calculate a weight of an object on a planet </h1>

  <input class="p-1 border-solid border-2 border-sky-500 text-gray-500 mr-4 text-lg" type="text" id="mass" placeholder="Mass in Kilogram" />
  <select id="planet" class="p-1 border-solid border-2 border-sky-500 mr-4 text-lg text-gray-500">
    <option class="border-solid" value='none'> --Select planet-- </option>
    <option class="border-solid" value='Mercury'>Mercury</option>
    <option class="border-solid" value='Venus'>Venus</option>
    <option class="border-solid" value='Earth'>Earth</option>
    <option class="border-solid" value='Moon'>Moon</option>
    <option class="border-solid" value='Mars'>Mars</option>
    <option class="border-solid" value='Jupiter'>Jupiter</option>
    <option class="border-solid" value='Saturn'>Saturn</option>
    <option class="border-solid" value='Uranus'>Uranus</option>
    <option class="border-solid" value='Neptune'>Neptune</option>
    <option class="border-solid" value='Pluto'>Pluto</option>
  </select>
  <button class="bg-sky-800 p-1 border-solid border-2 border-sky-500 mr-4 text-lg" id="calculate" type="button">Calculate weight</button>
</header>

<main id="planet-info" class="w-1/2 justify-end">
  <div class="flex items-center gap-4 justife-betweend p-4 w-full">
    <div class="w-1/2">
      <img class="w-96" src='./assets/earth.png' />
    </div>

    <div class="flex flex-col bg-[#242424] border-solid rounded-lg p-6 w-1/2 text-2xl items-center gap-4">
      <p>Texto de prueba <span class="text-white font-bold">Pluton</span></p>
      <div id="weight" class="bg-[#454646] rounded-[50%] flex justify-center items-center  w-32 h-32 text-white font-bold text-center">7.00000 N</div>
    </div>
  </div>

  <div id="massRequired" class="flex justify-center rounded-md bg-[#242424] p-4 hidden">
    <p class="text-4xl text-center rounded-md bg-[#454646] p-4">Mass is required</p>
  </div>
</main>
`

calculateWeight(document.getElementById('calculate'))