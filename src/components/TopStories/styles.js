import styled from 'styled-components';

import theme from '../../styles/theme';

const { fontSizes, colors } = theme;

export const Container = styled.div`
  display: grid;
`;

export const Filter = styled.select`
  border: 0;
  border-bottom: 3px soid ${colors.black};
  padding: 0.5rem;
  margin-left: 1rem;
`;

export const Heading = styled.h1`
  font-size: ${fontSizes.xxl};
  margin-bottom: 0;
`;

export const Top = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Middle = styled.div``;
export const Bottom = styled.div``;
