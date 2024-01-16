import { gravities } from "./gravities"
export const calculateWeight = (element) => {
  const planetInfo = document.getElementById('planet-info')
  const span = planetInfo.querySelector('span')
  element.addEventListener('click', () => {
    let planet = document.getElementById('planet').value
    planet !== 'none' ? span.textContent = planet : span.textContent = 'miau'
    console.log(planet)
  })
}