import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 700px) {
      display: flex;
      flex-direction: column;
  }
`;