import styled from "styled-components";

export const Container = styled.div`
  width: 30vw;
  height: 100vh;
  background: ${({theme}) => theme.bgAside};
  display: flex;
  justify-content: center;
  align-items: center;
`;