import React, { Component } from 'react'
import { ButtonContainer, Container, TemperatureContainer, DateContainer, ImageContainer } from './style';
import { BiTargetLock } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class WeatherSideBar extends Component {
  render() {
    const {error, dates} = this.props;

    return (
      <Container>
        <ButtonContainer>
          <button>
            <Link to="/search">Pesquise sua Cidade</Link>
          </button>
          <button type='button' className='target-button'><BiTargetLock size={30}/></button>
        </ButtonContainer>
        <ImageContainer>
          <img src={dates.current.condition.icon} alt="imagem do tempo" />
        </ImageContainer>
        <TemperatureContainer>
          <h1>{Math.floor(+(dates.current.temp_c))}<span>ºC</span></h1>
          <h2>{dates.current.condition.text}</h2>
        </TemperatureContainer>
        <DateContainer>
          <p>Today • {dates.forecast.forecastday[0].date}</p>
          <div>
            <MdLocationOn size={25}/>
            <p>{dates.location.name} - {dates.location.region}</p>
          </div>
        </DateContainer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.datesApi.error,
  dates: state.datesApi.datesApi,
});

export default connect(mapStateToProps)(WeatherSideBar);