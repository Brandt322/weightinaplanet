import { countrieNames } from "./countries.service"

export const countriesData = (elements) => {
  const [total, container, sorting, search] = elements
  let isAscending = true

  search.addEventListener('keyup', (event) => {
    const letter = event.target.value.toUpperCase()
    console.log(event.target.value.toUpperCase())
    container.innerHTML = ''
    for (const country of countrieNames) {
      if (country.includes(letter)) {
        container.innerHTML += `<div class="w-40 h-40 rounded-md border-2 border-orange-500 bg-[#242424] flex items-center justify-center"><h1 class="text-1xl text-center  text-orange-500">${country.toUpperCase()}</h1></div>`
        total.textContent = container.children.length
      }
    }
  })

  sorting.addEventListener('click', () => {
    isAscending = !isAscending;
    countrieNames.sort((a, b) => isAscending ? a.localeCompare(b) : b.localeCompare(a))
    search.dispatchEvent(new Event('keyup')) // trigger search event to update display
  })
}