import styled from "styled-components";

import theme from "../../styles/theme";

const { fontSizes, colors } = theme;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 5rem 10rem 5rem 10rem;
  grid-column-gap: 30px;
  grid-template-areas:
    "header ..."
    "article image";

  @media (max-width: 1045px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 5rem;
    grid-template-areas:
      "header"
      "image"
      "article";
  }
  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 320px) {
    padding: 1rem;
  }
`;

export const ArticleContainer = styled.div`
  grid-area: article;
  font-size: ${fontSizes.sm};
  line-height: 1.5;
`;

export const ImageContainer = styled.div`
  grid-area: image;
  margin-top: 1rem;
  width: 100%;
`;

export const PageHeader = styled.div`
  grid-area: header;
`;

export const Image = styled.img`

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Caption = styled.p`
  font-size: ${fontSizes.sm};
  color: ${colors.gray};
`;

export const Date = styled.p`
  font-size: ${fontSizes.sm};
  color: ${colors.gray};
  text-transform: uppercase;
  font-family: Calibri, "Trebuchet MS", sans-serif;
`;

export const Title = styled.h1`
  font-size: ${fontSizes.xl};
  letter-spacing: 0.5px;

  @media (max-width: 500px) {
    font-size: ${fontSizes.lg};
    margin-bottom: 1rem;
  }
`;

export const Headline = styled.h2`
  font-size: ${fontSizes.lg};
  letter-spacing: 0.5px;
  line-height: 1.5;

  @media (max-width: 500px) {
    font-size: ${fontSizes.md};
    margin-bottom: 1rem;
  }
`;

export const Divider = styled.hr`
  border-top: 1px solid ${colors.lightGray};
`;
