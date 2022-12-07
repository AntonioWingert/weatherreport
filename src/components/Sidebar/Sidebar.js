import React, { Component } from 'react'
import SearchLocation from '../SearchLocation/SearchLocation';
import WeatherSideBar from '../WeatherSideBar/WeatherSideBar';
import { Container } from './style';

class Sidebar extends Component {
  render() {
    const clickedButton = false;

    return (
      <Container>
        {clickedButton ? <SearchLocation /> : <WeatherSideBar />}
      </Container>
    )
  }
}

export default Sidebar;