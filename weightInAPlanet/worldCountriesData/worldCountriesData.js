import { worldData } from "./world.component"

export const wordlCountriesData = `
  <div class="w-full h-screen p-5 flex flex-col items-center text-center">
    <h1 class="text-4xl text-orange-500">World Countries Data</h1>
    <p class="text-xl text-gray-500 mb-10">Total number of countries: <span id="total">152</span></p>
    <div class="w-screen bg-gray-700 flex flex-col items-center justify-center gap-3 p-3">
      <div class="flex gap-3">
        <button class="rounded-none border-solid border-white p-2 bg-orange-500" id="sorting">|AZ</button>
      </div>  
      <div class="flex gap-3">
        <input type="text" id="countries" class="w-96 p-2 rounded-md border-solid border-white" placeholder="Search for a country">
        <button class="rounded-none border-solid border-white p-2 bg-orange-500" id="search">Buscar</button>  
      </div>
      <div class="flex gap-3">
        <button class="rounded-none border-solid border-white p-2 bg-orange-500" id="populationButton">POPULATION</button>
        <button class="rounded-none border-solid border-white p-2 bg-orange-500" id="languagesButton">LANGUAGES</button>
      </div>
      <div>
        <p id="message"></p>
      </div>
    </div>
    <div class="w-90 h-full mt-10 grid grid-cols-6 gap-4 justify-center gap-2  p-5" id="container">
      
    </div>
    <div class="w-90 h-full mt-10">
      <canvas width="800"  id="myChart1"></canvas>
      <canvas width="800" id="myChart2"></canvas>
    </div>
  </div>
  `

document.addEventListener('DOMContentLoaded', (event) => {
  worldData([document.getElementById('populationButton'), document.getElementById('languagesButton'), document.getElementById('myChart1'), document.getElementById('myChart2'), document.getElementById('message'), document.getElementById('total'), document.getElementById('container'), document.getElementById('sorting'), document.getElementById('countries'), document.getElementById('search')]);
});