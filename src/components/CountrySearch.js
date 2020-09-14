import React, { useState } from 'react'
import { CountryInfo } from './CountryInfo'
import { Exchange } from './Exchange'

export const CountrySearch = () => {
  const [country, setCountry] = useState('')
  const [results, setResults] = useState([])

  const Search = (event) => {
    event.preventDefault()
    const COUNTRY_API = `https://restcountries.eu/rest/v2/name/${country}`

    fetch(COUNTRY_API, { method: 'GET' })
      .then((res) => res.json())
      .then((json) => setResults(json))
  }

  return (
    <div>
      <h5>Please enter a country:</h5>
      <form
        onSubmit={Search}>
        <input
          type="text"
          onChange={(event) => setCountry(event.target.value)}
          value={country} />
        <button
          type="submit"
          disabled={!country}
          value="Search">
          Search
        </button>
      </form>
      <CountryInfo countryInfo={results} />
      {results && <Exchange currencyArray={results[0]} />}
    </div>
  )
}