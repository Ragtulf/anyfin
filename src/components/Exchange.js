import React, { useState } from 'react'

export const Exchange = ({ currencyArray }) => {
  const [input, setInput] = useState('')
  const [rate, setRate] = useState([])

  const HandleExchange = (event) => {
    event.preventDefault()
    const currency = currencyArray.currencies[0].code
    console.log('This is the props:', currency)

    const EXCHANGE_API = `https://api.exchangeratesapi.io/latest?base=SEK&symbols=${currency}`

    fetch(EXCHANGE_API, { method: 'GET' })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.rates)
        setRate(json.rates)
        console.log('This is the rate:', rate)
      })
  }

  return (
    <div>
      {rate && <h3>{rate.value}</h3>}
      <form
        onSubmit={HandleExchange}>
        <input
          // name="currency"
          // id="currency"
          type="number"
          min="1"
          max="1000000"
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <button
          type="submit">
          Exchange
        </button>
      </form>
    </div>
  )
}