import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { CountryInfo } from './CountryInfo'
import { Exchange } from './Exchange'

export const CountrySearch = () => {
  const [country, setCountry] = useState('')
  const [results, setResults] = useState([])

// A function that fetches to an API to search for the country
  const Search = (event) => {
    event.preventDefault()
    const COUNTRY_API = `https://restcountries.eu/rest/v2/name/${country}`

    fetch(COUNTRY_API, { method: 'GET' })
      .then((res) => res.json())
      .then((json) => setResults(json))
  }

  return (
    <div>
      <Heading>Please enter a country:</Heading>
      <form
        onSubmit={Search}>
        <SearchInput
          type="text"
          onChange={(event) => setCountry(event.target.value)}
          value={country} />
        <SearchButton
          type="submit"
          disabled={!country}
          value="Search">
          Search
        </SearchButton>
      </form>
      {results.length > 0 && <CountryInfo countryInfo={results} />}
      {results.length > 0 && <Exchange currencyArray={results[0]} />}
    </div>
  )
}

const Heading = styled.h5`
  margin: 0; 
  font-weight: 400;
`

const SearchInput = styled.input`
  border: none;
  border-radius: 2px;
  width: 150px;
  padding: 5px;
  color: #0B5699;
`

const SearchButton = styled.button`
  border: none;
  padding: 5px;
  margin: 10px;
  border-radius: 2px;
  background: #ffa79e;
  color: white;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;

  &:hover {
    background: #F87060;
    cursor: pointer;
  }

  &:disabled {
    background-color: gray;
  }
`