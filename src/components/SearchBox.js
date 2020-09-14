import React, { useState } from 'react'
import { CountryInfo } from './CountryInfo'

export const SearchBox = () => {
  const [country, setCountry] = useState('')
  const [results, setResults] = useState([])

  const Search = (event) => {
    event.preventDefault()
    const COUNTRY_API = `https://restcountries.eu/rest/v2/name/${country}`

    fetch(COUNTRY_API, { method: 'GET' })
      .then((res) => res.json())
      .then((json) => setResults(json))
  }

  const handleInput = (event) => {
    event.preventDefault()
    setCountry(event.target.value)
  }

  return (
    <div>
      <h5>Please enter a country:</h5>
      <form
        onSubmit={Search}>
        <input
          type="text"
          onChange={handleInput}
          value={country} />
        <button
          type="submit"
          disabled={!country}
          value="Search">
          Search
        </button>
      </form>
      <CountryInfo countryInfo={results} />
    </div>
  )
}