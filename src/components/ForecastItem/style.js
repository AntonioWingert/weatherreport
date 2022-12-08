import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  height: 177px;
  background: ${({theme}) => theme.bgAside};

  p {
    color: ${({theme}) => theme.primary};
    font-size: 16px;
    font-weight: 500;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;

    .maxTemp {
      color: ${({theme}) => theme.secondary};
    }
  }
`;