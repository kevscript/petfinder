import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import DogIcon from '../assets/dog.svg'
import CatIcon from '../assets/cat.svg'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: red;
`

const DogContainer = styled.div`
  cursor: pointer;
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

const Icon = styled.img`
  display: block;
  width: 30%;
  height: auto;
`

const ChoicePage = ({ content }) => {
  return (
    <Container>
      <DogContainer type="dog">
        <Icon src={DogIcon} />
      </DogContainer>
      <CatContainer type="cat">
        <Icon src={CatIcon} />
      </CatContainer>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  content: state.content
})

export default connect(mapStateToProps, null)(ChoicePage)