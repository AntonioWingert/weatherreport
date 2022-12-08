import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar/Sidebar';
import WeatherSideBar from '../components/WeatherSideBar/WeatherSideBar';

class Home extends Component {
  render() {
    const {loading} = this.props;
    return (
      <div>
        <Sidebar>
          {loading ? <Loader /> : <WeatherSideBar />}
        </Sidebar>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.datesApi.isLoading,
});

export default connect(mapStateToProps)(Home);