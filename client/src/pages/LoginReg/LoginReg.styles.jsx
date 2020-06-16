import styled from "styled-components";

export const LoginRegContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    padding: 10px;
    *:first-child {
      margin-bottom: 50px;
    }
  }
`;
