import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchType, fetchBreeds } from '../actions'

import DogIcon from '../assets/dog.svg'
import CatIcon from '../assets/cat.svg'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: red;
`

const DogContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`

const CatContainer = styled(DogContainer)`
  background: ${props => props.theme.colors.secondary};
`

const IconContainer = styled(Link)`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.5)
  }
`

const Icon = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const ChoicePage = ({ fetchType, fetchBreeds }) => {

  const handleClick = (e) => {
    const type = e.currentTarget.type
    fetchType(type)
    fetchBreeds(type)
  }

  return (
    <Container>
      <DogContainer>
        <IconContainer to="/form" type="dog" onClick={handleClick}>
          <Icon src={DogIcon} />
        </IconContainer>
      </DogContainer>
      <CatContainer>
        <IconContainer to="/form" type="cat" onClick={handleClick}>
          <Icon src={CatIcon} />
        </IconContainer>
      </CatContainer>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  content: state.content
})

const mapDispatchToProps = {
  fetchType,
  fetchBreeds
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoicePage)