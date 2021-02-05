import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  min-width: 300px;
`;
