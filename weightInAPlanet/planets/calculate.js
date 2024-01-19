import { gravities } from "./gravities"
export const calculateWeight = (element) => {

  const planetInfo = document.getElementById('planet-info')
  const pInfo = planetInfo.querySelector('p')
  const spanInfo = planetInfo.querySelector('span')
  const weight = planetInfo.querySelector('#weight')
  const massRequired = document.getElementById('massRequired')

  element.addEventListener('click', () => {
    const mass = document.getElementById('mass')
    const planet = document.getElementById('planet').value
    const message = massRequired.querySelector('p')
    const img = document.querySelector('img')

    if (mass.value !== '' && planet !== 'none') {
      planetInfo.classList.remove('hidden')
      massRequired.classList.add('hidden')

      pInfo.firstChild.textContent = 'The weight of the object on '
      for (const gravity in gravities) {
        if (planet === gravity) {
          spanInfo.textContent = planet
          weight.textContent = `${gravities[planet] * mass.value} N`
          img.setAttribute('src', `./assets/${planet.toLowerCase()}.png`)
        }
      }
    }

    if (mass.value !== '' && planet === 'none') {
      planetInfo.classList.add('hidden')
      massRequired.classList.remove('hidden')
      message.textContent = 'You also need to select a planet'
    }

    if (mass.value === '' && planet !== 'none') {
      planetInfo.classList.add('hidden')
      massRequired.classList.remove('hidden')
      message.textContent = 'Mass is required'
    }

  })
}