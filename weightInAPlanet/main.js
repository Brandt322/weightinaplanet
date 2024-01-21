import './style.css'
import { calculateWeight } from './planets/calculate'
import { planets } from './planets/planets'
import { wordlCountries } from './wordCountries/worldCountriesData'
import { countries } from './listCountries/listCountries'


document.querySelector('#app').innerHTML = countries

// calculateWeight(document.getElementById('calculate'))