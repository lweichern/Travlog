import styled from "styled-components";

export const FilterStyle = styled.div`
  margin: 1rem 0;
  text-align: center;

  & > button {
    transition: 0.3s;
  }

  & > button:not(:first-child) {
    margin-left: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    & > button {
      margin-top: 1rem;
    }
  }
`;
