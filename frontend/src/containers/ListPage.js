import React from 'react'
import { connect } from 'react-redux'

import AnimalsList from '../components/AnimalsList'
import Pagination from '../components/Pagination'

const ListPage = ({ animals }) => {

  const { loading, error, data, pagination } = animals

  if (loading) {
    return  <h1>loading...</h1>
  } else if (error) {
    return <h1>{error}</h1>
  } else {
    return (
      <div>
        ListPage
        <Pagination pagination={pagination} />
        <AnimalsList data={data} />
        <Pagination pagination={pagination} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  animals: state.animals
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)