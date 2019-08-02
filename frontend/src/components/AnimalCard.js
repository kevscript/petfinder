import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import Placeholder from '../assets/placeholder.jpg'

const ImageCard = lazy(() => import('../components/ImageCard'))

const CardContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 160px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 20px 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  background: #eee;
`

const TextContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
`

const Name = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`

const Detail = styled.p`
  font-size: 12px;
`


const AnimalCard = ({ item }) => {
  return (
    <CardContainer>
      <ImgContainer>
        <Suspense fallback={<></>}>
          <ImageCard url={item.photos.length > 0 ? item.photos[0].medium : Placeholder} alt="" />
        </Suspense>
      </ImgContainer>
      <TextContainer>
        <Name>{item.name}</Name>
        <Detail>{item.age} / {item.gender}</Detail>
        <Detail>{item.contact.address.city}, {item.contact.address.state}</Detail>
      </TextContainer>
    </CardContainer>
  )
}

export default AnimalCard