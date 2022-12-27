import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: auto;
  background: ${({theme}) => theme.bgAside};

  > h1 {
    align-self: center;
    color: ${({theme}) => theme.primary};
    font-size: 24px;
    font-weight: 500;
  }

  > p {
    margin-block-start: 0;
    margin-block-end: 1.5625rem;
    color: ${({theme}) => theme.primary};
    font-size: 64px;
    font-weight: 700;
    margin-top: 0.3125rem;
    
    > span {
    color: ${({theme}) => theme.primary};
    font-size: 36px;
    font-weight: 400;
  }
}

  @media screen and (max-width: 1100px){
    justify-content: space-around;
    width: 80%;

    > h1 {
    font-size: 16px;
    font-weight: 500;
  }

  > p {
    font-size: 32px;
    font-weight: 700;
    margin-top: 1rem;

    > span {
    font-size: 18px;
    font-weight: 400;
    }
  }
  }

  @media screen and (max-width: 700px){
    justify-content: space-around;
    width: 80%;

    > h1 {
    font-size: 16px;
    font-weight: 500;
  }

  > p {
    font-size: 32px;
    font-weight: 700;
    margin-top: 1rem;

    > span {
    font-size: 18px;
    font-weight: 400;
    }
  }

}
`;

export const HumidityContainer = styled.div`
  margin-bottom: 25px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -10px;

    p {
      font-weight: 700;
      font-size: 12px;
    }
  }

  > .container {
    width: 14.3125rem;
    height: 8px;
    border-radius: 80px;
    background-color: ${({theme}) => theme.primary};

    > div {
      height: 100%;
      background-color: ${({theme}) => theme.bgHumidity};
      width: ${(props) => props.humidity}%;
      border-radius: 80px;
    }
    
    @media screen and (max-width:700px){
      width: 12rem;
    }
  }

  > .containerPorcentage {
    display: flex;
    align-items: center;
    justify-content: end;
    height: auto;
    margin-top: 15px;

    > span {
      font-weight: 700;
      font-size: 12px;
    }
  }

`;

export const WindContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  margin-bottom: 25px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: white;
    background-color: ${({theme}) => theme.secondary};
    border-radius: 999px;

    > svg {
      width: 10.55px;
      height: 12.53px;
      transform: rotate(-200deg);
    }
  }

  p {
      font-size: 14px;
      font-weight: 500;
    }
`;