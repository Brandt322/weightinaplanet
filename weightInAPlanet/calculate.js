import { gravities } from "./gravities"

export const calculateWeight = (element) => {
  const hiddenImgWeigth = document.getElementById('content-img-weigth')
  const hiddenMessage = document.getElementById('content-message')
  const message = document.getElementById('message')

  const mass = document.getElementById('mass')
  const weight = document.getElementById('weigth')
  const description = document.getElementById('description')
  const imgPlanets = document.getElementById('imgPlanets')
  const spanPlanet = document.getElementById('spanPlanet')
  const planet = document.getElementById('planet')
  
  
  element.addEventListener('click', () => {
    hiddenImgWeigth.classList.remove('hidden')
    hiddenMessage.classList.add('hidden')
    
    if(planet.value !=='none' && mass.value !== '' ){
      for( let value in gravities) {
        if(value == planet.value){
          weight.textContent = gravities[value] * mass.value
          imgPlanets.src = `./assets/${planet.value}.png`
          description.textContent = 'The weight of the object on'
          spanPlanet.textContent = planet.value
        }
      }
    } 

    if(planet.value=='none'&& mass.value !==''){
      hiddenMessage.classList.remove('hidden')
      hiddenImgWeigth.classList.add('hidden')
      message.textContent = 'You need to select a planet'
    } 

    if(planet.value !=='none'&& mass.value ==''){
      hiddenMessage.classList.remove('hidden')
      hiddenImgWeigth.classList.add('hidden')
      message.textContent = 'Mass is required'
    }

    if(planet.value =='none'&& mass.value ==''){
      hiddenMessage.classList.remove('hidden')
      hiddenImgWeigth.classList.add('hidden')
      message.textContent = 'You need a mass and you need to select a planet'
    }
  })
}