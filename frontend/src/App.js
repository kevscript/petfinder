import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [animals, setAnimals] = useState(null)
  const [pagination, setPagination] = useState(null)

  useEffect(() => {
    axios.get('/api/animals/search')
      .then(res => {
        setAnimals([...res.data.animals])
        setPagination({...res.data.pagination})
      })
  }, [animals])

  return (
    <div>
      {animals && animals.map(x => {
        return <a key={x.id} href={x.url} target="blank" rel="noopener">{x.name} ({x.species})</a>
      })}
    </div>
  );
}

export default App;
