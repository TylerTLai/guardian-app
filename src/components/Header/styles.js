import styled from "styled-components";

import theme from "../../styles/theme";

const { colors } = theme;

export const Container = styled.div`
  padding: 0.5rem 10rem 0 10rem;
  background-color: ${colors.royalBlue};

  @media (max-width: 1230px) {
    padding: 0.5rem 5rem 0 5rem;
  }
  @media (max-width: 768px) {
    padding: 0.5rem 2rem 0 2rem;
  }
  @media (max-width: 500px) {
    padding: 0.5rem 1rem 0 1rem;
  }
`;
