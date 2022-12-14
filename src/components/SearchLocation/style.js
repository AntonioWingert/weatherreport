import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 90%;
  width: 80%;
  flex-direction: column;
  gap: 4rem;

  > button {
    align-self: flex-end;
    background: none;
    border: none;
    color: ${({theme}) => theme.primary};

    > a {
      text-decoration: none;
      color: ${({theme}) => theme.primary};
    }
  }
  
  > select {
    width: 100%;
    height: 64px;
    background: none;
    border: ${({theme}) => theme.borderCityInput};
    color: ${({theme}) => theme.primary};
    font-size: 1rem;
    font-weight: 500;
    padding: 20px;
    outline: none;
  }

  a {
    cursor: pointer;
    color: ${({theme}) => theme.primary};
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
  }

  option {
    background-color: ${({theme}) => theme.bgAside};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 16rem;
    height: 3rem;
    border: 1px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.bgIconSearch};

    > svg {
      margin-left: 0.70rem;
    }

    > input {
      border: none;
      background: none;
      margin-left: 10px;
      font-weight: 500;
      font-size: 1rem;
      outline: none;
      color: ${({theme}) => theme.primary};
      width: 100%;
    }
  }

  > 
    a {
      text-decoration: none;
      color: ${({theme}) => theme.primary};

    button {
    width: 86px;
    height: 3rem;
    border: none;
    background-color: ${({theme}) => theme.bgSearch};
    color: white;
    font-size: 1rem;
    font-weight: 600;

    }
  }
`;

