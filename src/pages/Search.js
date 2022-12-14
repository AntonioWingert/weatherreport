import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import MainContent from '../components/MainContent';
import SearchLocation from '../components/SearchLocation/SearchLocation';
import Sidebar from '../components/Sidebar/Sidebar';
import { MainContainer } from '../styles/MainContainer';

class Home extends Component {
  render() {
    const {loading} = this.props;
    return (
      <MainContainer>
        <Sidebar>
        {loading ? <Loader /> : <SearchLocation />}
        </Sidebar>
        {loading ? <Loader /> : <MainContent />}
      </MainContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.datesApi.isLoading,
});

export default connect(mapStateToProps)(Home);