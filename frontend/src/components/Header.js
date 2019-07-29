import React from 'react'
import styled from 'styled-components'

import DogIcon from '../assets/dog.svg'
import CatIcon from '../assets/cat.svg'
import RabbitIcon from '../assets/rabbit.svg'
import FurryIcon from '../assets/furry.svg'
import HorseIcon from '../assets/horse.svg'
import FishIcon from '../assets/fish.svg'
import PigIcon from '../assets/pig.svg'
import ChickenIcon from '../assets/chicken.svg'


const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IconsList = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const IconContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  transition: transform 0.3s ease-in-out;
    
    &:hover {
      transform: scale(1.2);
    }

  img {
    display: block;
    width: 100%;
  }  
`



const Header = ({ handleClick }) => {
  return (
    <HeaderContainer>
      <IconsList>
        <IconContainer data-type="Dog" onClick={handleClick}>
          <img src={DogIcon} alt=""/>
        </IconContainer>
        <IconContainer data-type="Cat" onClick={handleClick}>
          <img src={CatIcon} alt="" />
        </IconContainer>
        <IconContainer data-type="Rabbit" onClick={handleClick}>
          <img src={RabbitIcon} alt="" />
        </IconContainer>
        <IconContainer data-type="Small & Furry" onClick={handleClick}>
          <img src={FurryIcon} alt="" />
        </IconContainer>
        <IconContainer data-type="Horse" onClick={handleClick}>
          <img src={HorseIcon} alt="" />
        </IconContainer>
        <IconContainer data-type="Bird" onClick={handleClick}>
          <img src={ChickenIcon} alt="" />
        </IconContainer>
        <IconContainer data-type="Scales, Fins & Other" onClick={handleClick}>
          <img src={FishIcon} alt="" />
        </IconContainer>
        <IconContainer data-type="Barnyard" onClick={handleClick}>
          <img src={PigIcon} alt="" />
        </IconContainer>
      </IconsList>
    </HeaderContainer>
  )
}

export default Header