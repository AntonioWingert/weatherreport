import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: ${({theme}) => theme.secondary};

  @media screen and (max-width: 700px) {
    text-align: center;
    height: 100vh;
  }
`;

export const ContainerLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const CFContainer = styled.div`
  display: flex;
  color: white;
  align-items: flex-start;
  justify-content: right;
  height: 6.25rem;
  width: 80%;
  gap: 1rem;
  
  div {
    cursor: pointer;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 3.375rem;
    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.celsius};
    font-size: 1.125rem;
    font-weight: 700;
  }

  .fahrenheit {
    background-color: ${({theme}) => theme.fahrenheit};
    color: ${({theme}) => theme.primary};
  }
`;

export const ForecastContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12.5rem;
  gap: 1.5rem;
`;

export const ItemsHighlights = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 500px;
  gap: 1rem;

  > h1 {
    align-self: flex-start;
    font-weight: 700;
    font-size: 24px;
    color: ${({theme}) => theme.primary};
  }

  @media screen and (max-width: 700px) {
    height: 100vh;
  }
`;

export const HihgligthsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  align-items: center;
  justify-content: center;
 
 
  @media screen and (max-width: 700px) {
    gap: 1rem;
  }
`;

export const FooterContainer = styled.footer`

  a {
      text-decoration: none;
      color: ${({theme}) => theme.secondary};
      font-weight: 700;
    }
`;