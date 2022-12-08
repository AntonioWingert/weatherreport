import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20.5rem;
  height: 9.9375rem;
  background: ${({theme}) => theme.bgAside};

  > h1 {
    align-self: center;
    color: ${({theme}) => theme.primary};
    font-size: 16px;
    font-weight: 500;
  }

  > p {
    color: ${({theme}) => theme.primary};
    font-size: 64px;
    font-weight: 700;
    margin-top: 0.3125rem;
  }

  > span {
    color: ${({theme}) => theme.primary};
    font-size: 36px;
    font-weight: 400;
  }
`;