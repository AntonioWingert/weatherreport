import React, { Component } from 'react'
import MainContent from '../components/MainContent';
import SearchLocation from '../components/SearchLocation/SearchLocation';
import Sidebar from '../components/Sidebar/Sidebar';
import { MainContainer } from '../styles/MainContainer';

class Home extends Component {
  render() {
    return (
      <MainContainer>
        <Sidebar>
          <SearchLocation />
        </Sidebar>
        <MainContent />
      </MainContainer>
    )
  }
}

export default Home;