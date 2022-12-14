import React, { Component } from 'react'
import { connect } from 'react-redux';
import ForecastItem from '../ForecastItem/ForecastItem';
import ForecastItemHighlights from '../ForecastItemHighlights/ForecastItemHightlights';
import Loader from '../Loader';
import { Container, CFContainer, ForecastContainer, ContainerLoader, ItemsHighlights, HihgligthsContainer } from './styles';

class MainContent extends Component {
  render() {
    const {dates, loading} = this.props;
    console.log(dates);
    if (loading) return (
      <ContainerLoader>
        <Loader />
      </ContainerLoader>  
    )

    return (
      <Container>
        <CFContainer>
          <div>
            ºC
          </div>
          <div className='fahrenheit'>
            ºF
          </div>
        </CFContainer>
        <ForecastContainer>
          <ForecastItem 
          day={dates.forecast.forecastday[1].date}
          icon={dates.forecast.forecastday[1].day.condition.icon}
          minTemp={dates.forecast.forecastday[1].day.mintemp_c}
          maxTemp={dates.forecast.forecastday[1].day.maxtemp_c}
          />
          <ForecastItem 
          day={dates.forecast.forecastday[2].date}
          icon={dates.forecast.forecastday[2].day.condition.icon}
          minTemp={dates.forecast.forecastday[2].day.mintemp_c}
          maxTemp={dates.forecast.forecastday[2].day.maxtemp_c}
          />
        </ForecastContainer>
        <ItemsHighlights>
          <h1>Destaques de Hoje</h1>
          <HihgligthsContainer>
            <ForecastItemHighlights 
              title="Velocidade do Vento"
              description={`${dates.current.wind_kph}`}
              medidas="Km/s"
            />
            <ForecastItemHighlights 
              title="Umidade"
              description={`${dates.current.humidity}`}
              medidas="%"
            />
            <ForecastItemHighlights 
              title="Visibilidade"
              description={`${dates.current.vis_km}`}
              medidas="Km"
            />
            <ForecastItemHighlights 
              title="Pressão do Ar"
              description={`${dates.current.pressure_mb}`}
              medidas="mb"
            />
          </HihgligthsContainer>
        </ItemsHighlights>
        <footer>
          <p>Created by <a href="https://github.com/antonioWingert" target="_blank" rel="noreferrer">Antonio Bruno Wingert</a> - devChallenges.io</p>
        </footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  dates: state.datesApi.datesApi,
  loading: state.datesApi.isLoading,
});

export default connect(mapStateToProps)(MainContent);