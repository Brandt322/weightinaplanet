import { gravities } from "./gravities"

export const calculateWeight = (element) => {
  const mass = document.getElementById('mass').value
  const planetInfo = document.getElementById('planet-info')
  const pInfo = planetInfo.querySelector('p')
  const spanInfo = planetInfo.querySelector('span')
  const weight = planetInfo.querySelector('#weight')
  const massRequired = document.getElementById('massRequired')
  const message = massRequired.querySelector('p')
  const img = document.querySelector('img')
  console.log(weight.textContent)
  const showPlanetInfo = (planet, mass) => {
    planetInfo.classList.remove('hidden')
    massRequired.classList.add('hidden')

    pInfo.firstChild.textContent = 'The weight of the object on '
    spanInfo.textContent = planet
    weight.textContent = `${parseInt(gravities[planet] * mass).toFixed(2)} N`
    img.setAttribute('src', `./assets/${planet.toLowerCase()}.png`)
  }

  const showErrorMessage = (text) => {

    planetInfo.classList.add('hidden')
    massRequired.classList.remove('hidden')
    message.textContent = text
  }

  element.addEventListener('click', () => {
    const mass = document.getElementById('mass')
    const planet = document.getElementById('planet').value
    if (mass.value !== '' && planet !== 'none') {
      for (const gravity in gravities) {
        if (planet === gravity) {
          showPlanetInfo(planet, mass.value)
          return
        }
      }
    }
    showErrorMessage(mass.value === '') ? 'Mass is required' : 'You also need to select a planet'
  })
}
