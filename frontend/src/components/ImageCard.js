import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  display: block;
  width: 130%;
  height: auto;
`

const ImageCard = ({url}) => {
  return (
    <Img src={url} alt="animal"/>
  )
}

export default ImageCard