import React, { useState } from 'react'
import styled from 'styled-components/macro'

export const Exchange = ({ currencyArray }) => {
  const [input, setInput] = useState('')
  const [rate, setRate] = useState([])

  const HandleExchange = (event) => {
    event.preventDefault()
    const currency = currencyArray.currencies[0].code

    const EXCHANGE_API = `https://api.exchangeratesapi.io/latest?base=SEK&symbols=${currency}`

    fetch(EXCHANGE_API, { method: 'GET' })
      .then((res) => res.json())
      .then((json) => {
        setRate(Object.values(json.rates))
      })
  }

  return (
    <div>
      <FlexDiv>
        <Heading>Convert SEK into local currency:</Heading>
        {rate.length > 0 && input && <h3>{`${input} SEK = ${(rate.map((item) => (item)) * input).toFixed(2)}`}</h3>}
      </FlexDiv>

      <form
        onSubmit={HandleExchange}>
        <ExchangeInput
          type="number"
          min="1"
          max="1000000"
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <ExchangeButton
          type="submit">
          Exchange
        </ExchangeButton>
      </form>
    </div>
  )
}

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const Heading = styled.h4`
  margin-bottom: 0px;
  font-weight: 400;
`

const ExchangeInput = styled.input`
  border: none;
  border-radius: 2px;
  width: 150px;
  padding: 5px;
  color: #0B5699;
`

const ExchangeButton = styled.button`
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