import Chart from 'chart.js/auto';

import { mostPopulatedCountries, mostSpokenLanguages } from './world.service';
import { moreCountries } from '../../../JsIn30Days/Day9/Arrays/moreCountries';

export const worldData = (elements) => {

  const [populationButton, languagesButton, myChart1, myChart2, message, total, container, sorting, countries, search] = elements
  let isAscending = true
  let displayedCountries = []
  let myChart = null

  search.addEventListener('click', () => {
    const letter = countries.value.toUpperCase()
    container.innerHTML = ''
    displayedCountries = []
    for (const country of moreCountries) {
      if (country.name.toUpperCase().includes(letter)) {
        // console.log(country.name)
        container.innerHTML += `<div class="w-40 h-40 rounded-md border-2 border-orange-500 bg-[#242424] flex items-center justify-center"><h1 class="text-1xl text-center  text-orange-500">${country.name.toUpperCase()}</h1></div>`
        total.textContent = container.children.length
        displayedCountries.push(country)
      }
    }
    console.log(displayedCountries)
  })

  sorting.addEventListener('click', () => {
    isAscending = !isAscending;
    displayedCountries.sort((a, b) => isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
    container.innerHTML = '' // Vacía el contenedor antes de agregar los países ordenados
    for (const country of displayedCountries) { // Llena el contenedor con los países ordenados
      container.innerHTML += `<div class="w-40 h-40 rounded-md border-2 border-orange-500 bg-[#242424] flex items-center justify-center"><h1 class="text-1xl text-center  text-orange-500">${country.name.toUpperCase()}</h1></div>`
    }
    total.textContent = container.children.length
  })


  const createChart = (labels, data, label, chart) => {
    // if (myChart) {
    //   myChart.destroy();
    // }

    myChart = new Chart(chart, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          data,
          label,
          borderWidth: 2,
          backgroundColor: 'rgb(249, 115, 22)',
          indexAxis: 'y',
          borderColor: 'rgb(249, 80, 22)',
        }],
      }
    })
    return myChart
  }

  populationButton.addEventListener('click', () => {
    console.log(displayedCountries)
    const countries = mostPopulatedCountries(displayedCountries).map(country => country.name);
    const populations = mostPopulatedCountries(displayedCountries).map(({ population }) => population);
    const worldPopulation = displayedCountries.reduce((acc, country) => acc + country.population, 0);
    console.log(countries, populations, worldPopulation)
    message.textContent = '10 Most populate countries in the world';

    if (myChart) {
      myChart.destroy();
    }
    myChart2.classList.add('hidden')
    myChart = createChart(['World Population', ...countries], [worldPopulation, ...populations], 'Population', myChart1);
  });

  languagesButton.addEventListener('click', () => {
    const languages = mostSpokenLanguages(displayedCountries).map(language => language.language);
    const counts = mostSpokenLanguages(displayedCountries).map(({ count }) => count);
    console.log(displayedCountries, languages, counts)
    message.textContent = '10 Most languages spoken in the world';

    if (myChart) {
      myChart.destroy();
    }
    myChart1.classList.add('hidden')
    myChart = createChart(languages, counts, 'Languages', myChart2);
  });
}