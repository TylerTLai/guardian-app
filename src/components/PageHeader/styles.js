import styled from "styled-components";

import theme from "../../styles/theme";

const { fontSizes, colors } = theme;

export const Container = styled.div`
  align-items: flex-end;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-gap: 0px;
    justify-content: center;
  }
`;

export const Heading = styled.h1`
  font-size: ${fontSizes.xxl};
  margin-bottom: 0;
  width: 100%;

  @media (max-width: 500px) {
    font-size: ${fontSizes.xl};
    margin-bottom: 1rem;
  }
`;

export const BookmarkFilterContainer = styled.div`
  align-items: flex-end;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
  width: 100%;

  & button {
    justify-self: end;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
    justify-content: center;

    & div {
      width: 100%;
    }

    & a {
      width: 100%;
    }
  }
`;

export const FilterStyling = styled.div`
  display: inline-block;
  position: relative;
`;

export const FilterArrow = styled.span`
  background: ${colors.white};
  bottom: 5px;
  pointer-events: none;
  position: absolute;
  right: 0px;
  top: 5px;
  width: 15px;

  :after {
    content: "";
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${colors.black};
    pointer-events: none;
    margin-top: -5px;
    right: 15px;
    top: 50%;
    position: absolute;
  }
`;

export const Filter = styled.select`
  border-bottom: 1px solid ${colors.gray};
  border-left: 0;
  border-right: 0;
  border-top: 0;
  outline: none;
  padding: 0.5rem;
  width: 100%;
`;
