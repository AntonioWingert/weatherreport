import React, { Component } from 'react'
import { ButtonContainer, Container, TemperatureContainer, DateContainer, ImageContainer } from './style';
import { BiTargetLock } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class WeatherSideBar extends Component {
  render() {
    const {error, dates, celsius} = this.props;
    const date = dates.forecast.forecastday[0].date;
    const BRdate = date.split('-').reverse().join('/');

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
          <h1>{celsius ? Math.floor(+(dates.current.temp_c)) : Math.floor(+(dates.current.temp_f)) }<span>{celsius ? 'ºC' : 'ºF'}</span></h1>
          <h2>{dates.current.condition.text}</h2>
        </TemperatureContainer>
        <DateContainer>
          <p>Today • {BRdate}</p>
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
  celsius: state.datesApi.celsius,
});

export default connect(mapStateToProps)(WeatherSideBar);