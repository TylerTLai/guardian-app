import styled from 'styled-components';

// import theme from '../../styles/theme';

// const { fontSizes, colors } = theme;

export const Container = styled.div`
  display: grid;
  margin-bottom: 2rem;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TopLeft = styled.div`
  grid-area: TopLeft;
`;

export const TopRight = styled.div`
  grid-area: TopRight;
  grid-gap: 20px 30px;
  justify-content: space-between;
`;

export const Bottom = styled.div`
  grid-area: Bottom;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 330px);
`;

export const BigCard = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #b8c5d3; */

  & div {
    width: 100%;
    height: 100%;
  }
`;

export const MedCard = styled.div`
  width: 340px;
  height: 335px;
  /* background-color: #b8c5d3; */

  & div {
    width: 100%;
    height: 100%;
  }
`;

export const SmCard = styled.div`
  width: 250px;
  height: 240px;
  max-height: 100%;
  max-width: 100%;
  /* background-color: lightsalmon; */

  & div {
    width: 100%;
    height: 100%;
  }
`;

export const TinyCard = styled.div`
  width: 250px;
  height: 130px;
  /* background-color: lightseagreen; */

  & div {
    width: 100%;
    height: 100%;
  }
`;

export const Stories = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px 335px;
  grid-template-areas:
    'TopLeft TopRight'
    'Bottom Bottom';

  ${TopLeft} {
    /* background-color: pink; */
  }

  ${TopRight} {
    display: grid;
    grid-template-columns: repeat(2, 250px);
    grid-template-rows: repeat(2, 250px);
    /* background-color: lightgreen; */
  }

  ${Bottom} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* background-color: lightskyblue; */
  }
`;
