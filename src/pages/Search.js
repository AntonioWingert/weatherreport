import React, { Component } from 'react'
import SearchLocation from '../components/SearchLocation/SearchLocation';
import Sidebar from '../components/Sidebar/Sidebar';

class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar>
          <SearchLocation />
        </Sidebar>
      </div>
    )
  }
}

export default Home;