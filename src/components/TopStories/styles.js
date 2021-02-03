import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  margin-bottom: 2rem;
  min-width: 300px;
`;

export const Top = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const TopLeft = styled.div`
  min-width: 300px;
`;

export const TopRight = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px 30px;
  min-width: 300px;
`;

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 30px;
`;

export const LgCard = styled.div`
  width: 100%;
  height: 400px;
`;

export const MdCard = styled.div`
  width: 100%;
  height: 335px;
`;

export const SmCard = styled.div`
  width: 100%;
  height: 240px;
`;

export const TinyCard = styled.div`
  width: 100%;
  height: 130px;
`;

export const Stories = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 400px 335px;
  grid-template-rows: auto auto;
  grid-row-gap: 30px;
`;
