import React from 'react'
import styled from 'styled-components'

import FilterForm from './FilterForm'

const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px 5%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.colors.primary};
`

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BottomContainer = styled.div`
  margin-top: 20px;
`

const Header = ({ 
  handleTypeSelection, 
  content, 
  handleSubmit, 
  handleValuesSelect, 
  values,
  handleOpenForm,
  openForm
}) => {
  const { types } = content

  return (
    <HeaderContainer>
      <TopContainer>
        <div>
          <select name="type" onChange={handleTypeSelection}>
            {types && types.map(x => (
              <option key={x.name} value={x.name}>{x.name}</option>
            ))}
          </select>
          <button onClick={handleSubmit}>Search</button>
        </div>
        <button onClick={handleOpenForm}>{openForm ? 'Less Options' : 'More Options'}</button>
      </TopContainer>
      {openForm &&
        <BottomContainer>
          <FilterForm 
            content={content} 
            handleSelect={handleValuesSelect}
            values={values}
          />
        </BottomContainer>
      }
    </HeaderContainer>
  )
}

export default Header