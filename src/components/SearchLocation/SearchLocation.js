import React, { Component } from 'react'
import { Container, SearchContainer } from './style';
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai';

class SearchLocation extends Component {
  render() {
    return (
      <Container>
        <button type='button'>
        <AiOutlineClose size={35}/>
        </button>
        <SearchContainer>
          <div>
            <AiOutlineSearch size={25}/>
            <input type="text" placeholder='Pesquisar cidade' />
          </div>
          <button type='button'>Pesquisar</button>
        </SearchContainer>
        <select name="" id="">
          <option value="">London</option>
        </select>
        <p>Barcelona</p>
        <p>Long Beach</p>
      </Container>
    )
  }
}


export default SearchLocation;