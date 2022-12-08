import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar/Sidebar';
import WeatherSideBar from '../components/WeatherSideBar/WeatherSideBar';
import { MainContainer } from '../styles/MainContainer';

class Home extends Component {
  render() {
    const {loading} = this.props;
    return (
      <MainContainer>
        <Sidebar>
          {loading ? <Loader /> : <WeatherSideBar />}
        </Sidebar>
        <MainContent />
      </MainContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.datesApi.isLoading,
});

export default connect(mapStateToProps)(Home);