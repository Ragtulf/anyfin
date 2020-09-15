import React from 'react'
import styled from 'styled-components/macro'

export const CountryInfo = ({ countryInfo }) => {
  console.log('This is countryInfo:', countryInfo)
  return (
    <InfoSection>
      <CountryHeadline>{countryInfo[0] && countryInfo[0].name}</CountryHeadline>
      <DetailInfoDiv>
        <CapitalHeading>{countryInfo[0] && countryInfo[0].capital}</CapitalHeading>
        {countryInfo.length > 0 && 
          <DetailInfo>Population:
            <BoldSpan> {(countryInfo[0] && countryInfo[0].population).toLocaleString('en')}</BoldSpan>
          </DetailInfo>}
        {countryInfo.length > 0 && 
          <DetailInfo>Currency:
            <BoldSpan> {countryInfo[0] && countryInfo[0].currencies[0].name} - {countryInfo[0] && countryInfo[0].currencies[0].code}</BoldSpan>
          </DetailInfo>}
      </DetailInfoDiv>
    </InfoSection>
  )
}

const InfoSection = styled.section`
  width: 80%;
`

const CountryHeadline = styled.h1`
  font-size: 130px;
  margin: 0;
`

const DetailInfoDiv = styled.div`
  margin: 0 0 40px 40px;
`

const CapitalHeading = styled.h2`
  font-size: 60px;
  margin: 0;
`

const DetailInfo = styled.h3`
  font-weight: 400;
  margin: 20px 0;
`

const BoldSpan = styled.span`
  font-weight: 800;
`