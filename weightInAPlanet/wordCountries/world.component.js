import Chart from 'chart.js/auto';
import { mostPopulatedCountries, mostSpokenLanguages } from './world.service';
import { moreCountries } from '../../../JsIn30Days/Day9/Arrays/moreCountries';

export const worldData = (elements) => {
  const [populationButton, languagesButton, myChart, message] = elements;
  let chart = null;

  const createChart = (labels, data, label) => {
    if (chart) {
      chart.destroy();
    }

    chart = new Chart(myChart, {
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
    });
  };

  populationButton.addEventListener('click', () => {
    const countries = mostPopulatedCountries(moreCountries).map(country => country.name);
    const populations = mostPopulatedCountries(moreCountries).map(({ population }) => population);
    const worldPopulation = moreCountries.reduce((acc, country) => acc + country.population, 0);
    message.textContent = '10 Most populate countries in the world';
    createChart(['World Population', ...countries], [worldPopulation, ...populations], 'Population');
  });

  languagesButton.addEventListener('click', () => {
    const languages = mostSpokenLanguages(moreCountries).map(language => language.language);
    const counts = mostSpokenLanguages(moreCountries).map(({ count }) => count);
    message.textContent = '10 Most languages spoken in the world';
    createChart(languages, counts, 'Languages');
  });
};