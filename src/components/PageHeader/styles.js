import styled from 'styled-components';

import theme from '../../styles/theme';

const { fontSizes, colors } = theme;

export const BFContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 1rem;

  & button {
    justify-self: end;
  }
`;

export const Filter = styled.select`
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid ${colors.gray};
  outline: none;
  padding: 0.5rem;
  width: 100%;
`;

export const FilterStyling = styled.div`
  position: relative;
  display: inline-block;
`;

export const FilterArrow = styled.span`
  background: ${colors.white};
  bottom: 5px;
  position: absolute;
  right: 0px;
  top: 5px;
  width: 15px;
  pointer-events: none;

  :after {
    content: '';
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -5px;
    pointer-events: none;
    border-top: 5px solid ${colors.black};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
`;

export const Heading = styled.h1`
  font-size: ${fontSizes.xxl};
  margin-bottom: 0;
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 30px;
  margin-bottom: 1rem;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: flex-end;
`;
