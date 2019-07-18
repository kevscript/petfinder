import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAnimals } from './actions'

const App = ({ animals, fetchAnimals }) => {

  const { items, loading, error, pagination } = animals

  useEffect(() => {
    fetchAnimals()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  } else if (error) {
    return <h1>{error}</h1>
  } else if (items) {
    return (
      <div>
        {items && items.map(x => {
          return <a key={x.id} href={x.url} target="blank" rel="noopener">{x.name} ({x.species})</a>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  animals: state.animals
})

const mapDispatchToProps = {
  fetchAnimals
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
