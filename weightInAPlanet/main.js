import './style.css'
import { calculateWeight } from './planets/calculate'
import { planets } from './planets/planets'
import { wordlCountries } from './wordCountries/worldCountriesData'
import { countries } from './listCountries/listCountries'
import { wordlCountriesData } from './worldCountriesData/worldCountriesData'

document.querySelector('#app').innerHTML = wordlCountriesData

// calculateWeight(document.getElementById('calculate'))