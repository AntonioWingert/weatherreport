import React, { Component } from 'react'
import { Container } from './style';

class ForecastItem extends Component {
  render() {
    const {day, icon, minTemp, maxTemp} = this.props;
    return (
      <Container>
        <p>{day}</p>
        <img src={icon} alt="icone-clima" />
        <div>
          <p>{Math.floor(+(minTemp))}ºC</p>
          <p className='maxTemp'>{Math.floor(+(maxTemp))}ºC</p>
        </div>
      </Container>
    )
  }
}

export default ForecastItem;