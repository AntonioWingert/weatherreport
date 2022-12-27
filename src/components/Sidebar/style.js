import styled from "styled-components";

export const Container = styled.div`
  width: 28.6875rem;
  height: 100vh;
  background: ${({theme}) => theme.bgAside};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    height: 100vh;
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    height: 100vh;
    width: 100%;
  }
`;