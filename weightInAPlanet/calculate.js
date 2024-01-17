import { gravities } from "./gravities"

export const calculateWeight = (element) => {
  const hidden = document.getElementById('content-d-w')
  const hidden2 = document.getElementById('content-fail')
  const p = document.getElementById('p-fail')

  const mass = document.getElementById('mass')
  const weight = document.getElementById('weigth')
  const description = document.getElementById('description')
  const imgPlanets = document.getElementById('imgPlanets')
  const spanPlanet = document.getElementById('spanPlanet')
  const planet = document.getElementById('planet')
  
  
  element.addEventListener('click', () => {
    let weightTotal 
    for( let value in gravities) {
      if(value == planet.value){
        weightTotal = gravities[value] * mass.value
      }
    }
    
    if(planet.value !=='none' && mass.value !== '' ){
      imgPlanets.classList.remove('hidden')
      hidden.classList.remove('hidden')
      imgPlanets.src = `./assets/${planet.value}.png`
      description.textContent = 'The weight of the object on'
      spanPlanet.textContent = planet.value
      weight.textContent = weightTotal
    } 

    if(planet.value=='none'&& mass.value !==''){
      hidden2.classList.remove('hidden')
      hidden.classList.add('hidden')
      p.textContent = 'You also need to select a planet'
    } 

    if(planet.value !=='none'&& mass.value ==''){
      hidden2.classList.remove('hidden')
      hidden.classList.add('hidden')
      p.textContent = 'Mass is required'
    }

  })
}