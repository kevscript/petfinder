import React from 'react'
import styled from 'styled-components'
import AnimalCard from '../components/AnimalCard'

const ListContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const AnimalsList = ({ data }) => {
  return (
    <ListContainer>
      {data && data.map(animal => (
        <AnimalCard key={animal.id} item={animal} />
      ))}
    </ListContainer>
  )
}

export default AnimalsList