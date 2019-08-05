import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const AnimalPage = () => {
  return (
    <div>
      Animal Page
    </div>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(AnimalPage)