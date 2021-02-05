import styled from "styled-components";

import theme from "../../styles/theme";

const { fontSizes, colors } = theme;

export const Button = styled.button`
  background-color: ${colors.royalBlue};
  border: none;
  border-radius: 4px;
  color: ${colors.white};
  cursor: pointer;
  font-size: ${(props) => props.fontSize || fontSizes.xs};
  height: 30px;
  padding: 0.5rem 0.4rem;
  width: ${(props) => props.width || "auto"};

  & svg {
    fill: ${colors.white};
    margin-right: 0.5rem;
    vertical-align: text-bottom;
  }

  @media (max-width: 500px) {
    height: 40px;
    width: 100%;
  }
`;
