import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
<header class="w-1/2 justify-start">
  <h1 class="text-5xl w-full mt-6 mb-16">Calculate a weight of an object on a planet</h1>

  <input type="text" id="mass" placeholder="Mass in Kilogram" />
  <select>
    <option value='none'> --select planet-- </option>
  </select>
  <button>Calculate weight</button>
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