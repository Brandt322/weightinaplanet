import { worldData } from "./world.component"
// import Chart from 'chart.js/auto';
export const wordlCountries = `
  <div class="w-full h-screen p-5 flex flex-col items-center text-center">
    <h1 class="text-4xl text-orange-500">World Countries Data</h1>
    <p class="text-xl text-gray-500 mb-10">Currently, we have 250 countries</p>
    <div class="w-screen bg-gray-700 flex flex-col items-center justify-center gap-3 p-3">
      <div class="flex gap-3">
        <button class="rounded-none border-solid border-white p-2 bg-orange-500" id="populationButton">POPULATION</button>
        <button class="rounded-none border-solid border-white p-2 bg-orange-500" id="languagesButton">LANGUAGES</button>
      </div>
      <div>
        <p id="message"></p>
      </div>
    </div>
    <div class="w-90 h-full mt-10">
      <canvas width="800"  id="myChart"></canvas>
    </div>
    </div>
    `

document.addEventListener('DOMContentLoaded', (event) => {
  worldData([document.getElementById('populationButton'), document.getElementById('languagesButton'), document.getElementById('myChart'), document.getElementById('message')]);
});


