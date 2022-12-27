import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setDegree } from '../../store/actions';
import ForecastItem from '../ForecastItem/ForecastItem';
import ForecastItemHighlights from '../ForecastItemHighlights/ForecastItemHightlights';
import Loader from '../Loader';
import { Container, CFContainer, ForecastContainer, ContainerLoader, ItemsHighlights, HihgligthsContainer, FooterContainer } from './styles';

class MainContent extends Component {

  render() {
    const {dates, loading, celsius} = this.props;
    if (loading) return (
      <ContainerLoader>
        <Loader />
      </ContainerLoader>  
    )

    const handleClick = () => {
      const {dispatch} = this.props;
      dispatch(setDegree())
    }

    return (
      <Container>
        <CFContainer>
          <div onClick={!celsius ? handleClick : null} >
            ºC
          </div>
          <div className='fahrenheit' onClick={celsius ? handleClick : null}>
            ºF
          </div>
        </CFContainer>
        <ForecastContainer>
          <ForecastItem 
          day={dates.forecast.forecastday[1].date.split('-').reverse().join('/')}
          icon={dates.forecast.forecastday[1].day.condition.icon}
          minTemp={celsius ? dates.forecast.forecastday[1].day.mintemp_c : dates.forecast.forecastday[1].day.mintemp_f}
          maxTemp={celsius ? dates.forecast.forecastday[1].day.maxtemp_c : dates.forecast.forecastday[1].day.maxtemp_f}
          degree={celsius ? 'ºC' : 'ºF'}
          />
          <ForecastItem 
          day={dates.forecast.forecastday[2].date.split('-').reverse().join('/')}
          icon={dates.forecast.forecastday[2].day.condition.icon}
          minTemp={celsius ? dates.forecast.forecastday[2].day.mintemp_c : dates.forecast.forecastday[2].day.mintemp_f}
          maxTemp={celsius ? dates.forecast.forecastday[2].day.maxtemp_c : dates.forecast.forecastday[2].day.maxtemp_f}
          degree={celsius ? 'ºC' : 'ºF'}
          />
        </ForecastContainer>
        <ItemsHighlights>
          <h1>Destaques de Hoje</h1>
          <HihgligthsContainer>
            <ForecastItemHighlights 
              title="Velocidade do Vento"
              description={`${dates.current.wind_kph}`}
              medidas="Km/s"
              windStatus = {`${dates.current.wind_dir}`}
            />
            <ForecastItemHighlights 
              title="Umidade"
              description={`${dates.current.humidity}`}
              medidas="%"
              humidity={`${dates.current.humidity}`}
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
        <FooterContainer>
          <p>Created by <a href="https://github.com/antonioWingert" target="_blank" rel="noreferrer">Antonio Bruno Wingert</a> - devChallenges.io</p>
        </FooterContainer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  dates: state.datesApi.datesApi,
  loading: state.datesApi.isLoading,
  celsius: state.datesApi.celsius,
});

export default connect(mapStateToProps)(MainContent);