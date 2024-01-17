import { gravities } from "./gravities"

export const calculateWeight = (element) => {
  const mass = document.getElementById('mass')
  const imgPlanets = document.getElementById('imgPlanets')
  const spanPlanet = document.getElementById('spanPlanet')
  const description = document.getElementById('description')
  const weight = document.getElementById('weigth')

  element.addEventListener('click', () => {
    let weightTotal 
    for( let value in gravities) {
      if(value == planet.value){
        weightTotal = gravities[value] * mass.value
        console.log(weightTotal)
      }
    }
    // ./assets/earth.png
    if(planet.value){
      imgPlanets.src = `./assets/${planet.value}.png`
    }
    
    description.textContent = 'The weight of the object on'
    spanPlanet.textContent = planet.value
    console.log(planet.value)
    weight.textContent = weightTotal

  })
}