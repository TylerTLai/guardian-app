import styled from 'styled-components';

import theme from '../../styles/theme';

const { fontSizes, colors } = theme;

export const Button = styled.button`
  color: ${colors.white};
  font-size: ${(props) => props.fontSize || fontSizes.xs};
  background-color: ${colors.royalBlue};
  padding: 0.5rem 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 30px;
  width: ${(props) => props.width || '145px'};

  & svg {
    vertical-align: text-bottom;
    margin-right: 0.5rem;
    fill: ${colors.white};
  }
`;
