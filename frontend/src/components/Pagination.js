import React from 'react'
import styled from 'styled-components'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  height: 80px;
  color: ${props => props.theme.colors.primary};
`

const PrimaryButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  display: block;
  padding: 8px 20px;
  border-radius: 2px;
  font-family: 'Source Sans Pro', 'Roboto', sans-serif;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  transition: 0.2s;

  &:disabled {
    opacity: 0;
    display: none;
  }
  
  &:hover:enabled {
    border: ${props => `1px solid ${props.theme.colors.primary}`};
    background: transparent;
    color: ${props => props.theme.colors.primary};
    transform: scale(1.1);
  }
`

const Pagination = ({ handlePagination, pagination }) => {
  const { current_page, total_pages } = pagination

  return (
    <PaginationContainer>
      <PrimaryButton 
        onClick={() => handlePagination(current_page - 1)}
        disabled={current_page === 1 ? true : false}
      >
        {`page ${current_page - 1}`}
      </PrimaryButton>
      {current_page} / {total_pages}
      <PrimaryButton 
        onClick={() => handlePagination(current_page + 1)}
        disabled={current_page === total_pages ? true : false}
      >
        {`page ${current_page + 1}`}
      </PrimaryButton>
    </PaginationContainer>
  )
}

export default Pagination