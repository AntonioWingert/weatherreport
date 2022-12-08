import React, { Component } from 'react'
import {Container} from './styles'

class ForecastItemHighlights extends Component {
  render() {
    const {title, description, medidas} = this.props;
    return (
      <Container>
        <h1>{title}</h1>
        <p>{description} <span>{medidas}</span></p>
      </Container>
    )
  }
}

export default ForecastItemHighlights;