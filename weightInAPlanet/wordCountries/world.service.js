export const mostSpokenLanguages = (countries) => {
  const languageCounts = {}

  countries.forEach(country => {
    country.languages.forEach(language => {
      if (languageCounts[language]) {
        languageCounts[language]++
      } else {
        languageCounts[language] = 1
      }
    })
  })

  const sortedLanguages = Object.entries(languageCounts)
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count)

  return sortedLanguages.slice(0, 10)
}

export const mostPopulatedCountries = (countries) => {
  return countries.sort((a, b) => b.population - a.population).slice(0, 10)
}
