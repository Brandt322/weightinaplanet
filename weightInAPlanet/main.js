import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
<header class="w-1/2 justify-start">
  <h1 class="text-5xl w-full mt-6 mb-16">Calculate a weight of an object on a planet</h1>

  <input class="p-1 border-solid border-2 border-sky-500 mr-4 text-lg" type="text" id="mass" placeholder="Mass in Kilogram" />
  <select class="p-1 border-solid border-2 border-sky-500 mr-4 text-lg">
    <option value='none'> --Select planet-- </option>
  </select>
  <button class="bg-sky-800 p-1 border-solid border-2 border-sky-500 mr-4 text-lg">Calculate weight</button>
</header>

<main class="w-1/2 justify-end">
  <div class="flex hidden">
    <div>
      <img src='./assets/earth.png' />
    </div>
    <div class="hidden"></div>
  </div>
  <div class="flex justify-center rounded-md bg-[#242424] p-4">
    <p class="text-4xl text-center rounded-md bg-[#454646] p-4">Mass is required</p>
  </div>
</main>
`