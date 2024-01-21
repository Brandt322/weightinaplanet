import { countriesData } from "./list.component";

export const countries = `
  <div class="w-full h-screen p-5 flex flex-col items-center text-center">
    <h1 class="text-4xl text-orange-500">World Countries List</h1>
    <p class="text-xl text-gray-500 mb-10">Total number of countries: <span id="total">152</span></p>
    <div class="w-screen bg-gray-700 flex flex-col items-center justify-center gap-3 p-3">
      <div class="flex gap-3">
        <button class="rounded-none border-solid border-white p-2 bg-orange-500" id="sorting">|AZ</button>
      </div>
      <input type="text" id="search" class="w-1/2 p-2 rounded-none border-solid border-white" placeholder="Search for a country">
    </div>
    <div class="w-90 h-full mt-10 grid grid-cols-6 gap-4 justify-center gap-2  p-5" id="container">
      
    </div>
  </div>
  `

document.addEventListener('DOMContentLoaded', (event) => {
  countriesData([document.getElementById('total'), document.getElementById('container'), document.getElementById('sorting'), document.getElementById('search')]);
});


