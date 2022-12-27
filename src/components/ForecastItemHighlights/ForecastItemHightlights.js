import React, { Component } from 'react'
import { Container, HumidityContainer, WindContainer } from './styles'
import { FaLocationArrow } from 'react-icons/fa'

class ForecastItemHighlights extends Component {
  render() {
    const {title, description, medidas, humidity, windStatus} = this.props;
    return (
      <Container>
        <h1>{title}</h1>
        <p>{description} <span>{medidas}</span></p>
        {
        humidity && <HumidityContainer humidity={humidity}>
          <div>
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </div>
          <div className='container'>
            <div />
          </div>
          <div className='containerPorcentage'>
            <span>%</span>
          </div>
        </HumidityContainer>
        }
        { windStatus &&
        <WindContainer>
          <div>
            <FaLocationArrow />
          </div>
          <p>{windStatus}</p>
        </WindContainer>
        }
      </Container>
    )
  }
}

export default ForecastItemHighlights;