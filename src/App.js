import React from 'react'
import styled from 'styled-components/macro'
import { CountrySearch } from './components/CountrySearch'

export const App = () => {
  return (
    <FlexDiv>
      <CountrySearch />
    </FlexDiv>
  )
}

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`