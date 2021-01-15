import styled from 'styled-components';

import theme from '../../styles/theme';

const { fontSizes, colors } = theme;

export const Button = styled.button`
  color: ${colors.white};
  font-size: ${fontSizes.sm};
  background-color: ${colors.royalBlue};
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  & svg {
    vertical-align: bottom;
    margin-right: 0.5rem;
    fill: ${colors.white};
  }
`;
