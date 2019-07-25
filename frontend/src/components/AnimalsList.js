import React from 'react'

import AnimalCard from '../components/AnimalCard'

const AnimalsList = ({ data }) => {
  return (
    <div>
      {data && data.map(animal => (
        <AnimalCard key={animal.id} item={animal} />
      ))}
    </div>
  )
}

export default AnimalsList