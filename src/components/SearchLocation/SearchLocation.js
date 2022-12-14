import React, { Component } from 'react'
import { Container, SearchContainer } from './style';
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDateCity } from '../../store/actions';

class SearchLocation extends Component {
  state = {
    city: '',
    optionsCity: 'curitiba',
  }

  handleChange = (event) => {
    const {target: {value, name}} = event;
    this.setState({
      [name]: value,
    })
  }

  handleClick = () => {
    const {city, optionsCity} = this.state;
    const {dispatch} = this.props;
    if(!city) {
     dispatch(fetchDateCity(optionsCity));
     return
    }
    dispatch(fetchDateCity(city));
    return
  }

  handleClickStatikCitys = (city) => {
    const {dispatch} = this.props;
    dispatch(fetchDateCity(city))
  }

  render() {
    const {optionsCity, city} = this.state;
    return (
      <Container>
        <button type='button'>
        <Link to="/">
          <AiOutlineClose size={35}/>
        </Link>
        </button>
        <SearchContainer>
          <div>
            <AiOutlineSearch size={25}/>
            <input
            name='city'
            onChange={this.handleChange} 
            type="text" 
            placeholder='Pesquisar cidade'
            value={city}
            />
          </div>
          <Link to='/'>
            <button 
            onClick={this.handleClick}
            type='button'>
              Pesquisar
            </button>
          </Link>
        </SearchContainer>
        <select 
        name="optionsCity" 
        onChange={this.handleChange}
        value={optionsCity}
        >
          <option value="curitiba">Curitiba - PR</option>
          <option value="recife">Recife - PE</option>
          <option value="florianopolis">Florianópolis - SC</option>
          <option value="porto alegre">Porto Alegre - RS</option>
        </select>
        <Link to="/" onClick={() => this.handleClickStatikCitys('sao paulo')}>São Paulo - SP</Link>
        <Link to="/" onClick={() => this.handleClickStatikCitys('rio de janeiro')}>Rio de Janeiro - RJ</Link>
      </Container>
    )
  }
}


export default connect()(SearchLocation);