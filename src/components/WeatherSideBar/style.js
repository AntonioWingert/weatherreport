import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 95vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const ButtonContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 80%;
 height: auto;
 
 button {
    width: 10.0625rem;
    height: 2.5rem;
    background-color: ${({theme}) => theme.bgButton};
    border-radius: 4px;
    color: ${({theme}) => theme.primary};
    font-size: 1rem;
    font-weight: 500;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.primary};
  }

  .target-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
  }
`;

export const ImageContainer = styled.div`
  height: 17vh;

  > img {
    height: 12.625rem;
    width: 14.625rem;
  }
`;

export const TemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  
  h1 {
    color: ${({theme}) => theme.primary};
    font-size: 9rem;
    font-weight: 500;
  }

  span {
    font-size: 3rem;
    color: ${({theme}) => theme.secondary};
  }

  h2 {
    color: ${({theme}) => theme.secondary};
    font-size: 36px;
    font-weight: 600;
  }
`;

export const DateContainer = styled.div`
  text-align: center;
  color: ${({theme}) => theme.bgIcons};
  font-size: 1.125rem;
  font-weight: 500;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
`;