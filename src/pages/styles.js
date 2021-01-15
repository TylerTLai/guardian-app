import styled from 'styled-components';
import theme from '../styles/theme';
import { Link } from 'react-router-dom';

const { fontSizes } = theme;

export const Container = styled.div`
  padding: 1rem 10rem 5rem 10rem;
`;

export const Heading = styled.h1`
  font-size: ${fontSizes.xl};
`;

export const ArticleLink = styled(Link)`
  text-decoration: ${(props) => props.textDecoration || 'none'};
  cursor: pointer;
  color: ${(props) => props.color};
`;
