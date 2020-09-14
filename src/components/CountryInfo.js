import React from 'react'

export const CountryInfo = ({ countryInfo }) => {
  console.log('This is countryInfo:', countryInfo)
  return (
    <section>
      <h1>{countryInfo[0] && countryInfo[0].name}</h1>
      <h2>{countryInfo[0] && countryInfo[0].capital}</h2>
      <h3>{countryInfo[0] && countryInfo[0].population}</h3>
      <h3>{countryInfo[0] && countryInfo[0].currencies[0].name}</h3>
      <h3>{countryInfo[0] && countryInfo[0].currencies[0].code}</h3>
    </section>
  )
}