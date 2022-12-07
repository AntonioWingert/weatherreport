import React, { Component } from 'react'
import { ButtonContainer, Container, TemperatureContainer, DateContainer, ImageContainer } from './style';
import image from '../../assets/IsoRainSwrsDay.png';
import { BiTargetLock } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';

class WeatherSideBar extends Component {
  render() {
    return (
      <Container>
        <ButtonContainer>
          <button type='button'>Pesquise sua Cidade</button>
          <button type='button' className='target-button'><BiTargetLock size={30}/></button>
        </ButtonContainer>
        <ImageContainer>
          <img src={image} alt="imagem de nuvem" />
        </ImageContainer>
        <TemperatureContainer>
          <h1>15<span>ºC</span></h1>
          <h2>Shower</h2>
        </TemperatureContainer>
        <DateContainer>
          <p>Today • Fri, 5 Jun</p>
          <div>
            <MdLocationOn size={25}/>
            <p>Helsinki</p>
          </div>
        </DateContainer>
      </Container>
    )
  }
}

export default WeatherSideBar;