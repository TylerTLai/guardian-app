import styled from 'styled-components';

import theme from '../../styles/theme';

const { fontSizes } = theme;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Heading = styled.h1`
  font-size: ${fontSizes.xl};
`;
