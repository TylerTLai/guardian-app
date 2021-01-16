import React from 'react';
import BookmarkButton from '../BookmarkButton';
import {
  BigCard,
  MedCard,
  SmCard,
  Top,
  TopLeft,
  TopRight,
  Bottom,
  TinyCard,
  Container,
  Filter,
  Heading,
  HeadingContainer,
  Stories,
} from './styles';

import { ArticleLink } from '../../pages/styles';
import NewsCard from '../NewsCard';

function TopStories({ topArticles }) {
  console.log('from topstories ', topArticles);

  const stories = '';

  return (
    <Container>
      <HeadingContainer>
        <Heading>Top stories</Heading>
        <div>
          <BookmarkButton text="VIEW BOOKMARK" />
          <Filter defaultValue="newest">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </Filter>
        </div>
      </HeadingContainer>
      <Stories>
        <>
          <TopLeft>
            <BigCard>a</BigCard>
          </TopLeft>
          <TopRight>
            <SmCard>c</SmCard>
            <SmCard>d</SmCard>
            <TinyCard>e</TinyCard>
            <TinyCard>f</TinyCard>
          </TopRight>
        </>
        <Bottom>
          <MedCard>d</MedCard>
          <MedCard>e</MedCard>
          <MedCard>f</MedCard>
        </Bottom>
      </Stories>
    </Container>
  );
}

export default TopStories;
