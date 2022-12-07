import React, { Component } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import { Container } from './styles';

class Display extends Component {
  render() {
    return (
      <Container>
        <Sidebar />
      </Container>
    )
  }
}

export default Display;