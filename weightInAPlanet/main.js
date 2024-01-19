import './style.css'
import { calculateWeight } from './planets/calculate'
import { planets } from './planets/planets'
import { wordlCountries } from './wordCountries/worldCountriesData'

document.querySelector('#app').innerHTML = wordlCountries

// calculateWeight(document.getElementById('calculate'))