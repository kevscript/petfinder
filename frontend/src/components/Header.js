import React, { useState } from 'react'
import styled from 'styled-components'

import FilterForm from './FilterForm'

const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 5%;
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
  margin: 20px 0;
`

const BottomContainer = styled.div``

const Header = ({ 
  handleTypeSelection, 
  content, 
  handleSubmit, 
  handleValuesSelect, 
  values 
}) => {
  const [open, setOpen] = useState(false)
  const { types } = content

  const handleOpen = () => {
    setOpen(!open)
  }

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
        <button onClick={handleOpen}>{open ? 'Less Options' : 'More Options'}</button>
      </TopContainer>
      {open &&
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