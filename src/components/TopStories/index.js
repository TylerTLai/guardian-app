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
  BFContainer,
  Container,
  Filter,
  FilterArrow,
  FilterStyling,
  Heading,
  HeadingContainer,
  Stories,
} from './styles';

import { ArticleLink } from '../../pages/styles';
import NewsCard from '../NewsCard';

import theme from '../../styles/theme';

const { fontSizes, colors } = theme;

function TopStories({ topArticles }) {
  const stories = [];

  // create news cards from first 8 articles
  for (let i = 7; i < topArticles.slice(0, 8).length; i++) {
    stories.push(
      <Stories>
        <>
          <TopLeft>
            <BigCard>
              <ArticleLink to={'/' + topArticles[0].id}>
                <NewsCard
                  borderBottom={`3px solid ${colors.green}`}
                  title={topArticles[0].webTitle}
                  imageSrc={topArticles[0].fields.thumbnail}
                />
              </ArticleLink>
            </BigCard>
          </TopLeft>
          <TopRight>
            <SmCard>
              <ArticleLink to={'/' + topArticles[1].id}>
                <NewsCard
                  titleFontSize={fontSizes.md}
                  title={topArticles[1].webTitle}
                  imageSrc={topArticles[1].fields.thumbnail}
                />
              </ArticleLink>
            </SmCard>
            <SmCard>
              <NewsCard
                borderBottom={`3px solid ${colors.yellow}`}
                titleFontSize={fontSizes.md}
                title={topArticles[2].webTitle}
                imageSrc={topArticles[2].fields.thumbnail}
              />
            </SmCard>
            <TinyCard>
              <NewsCard
                borderBottom={`3px solid ${colors.blue}`}
                titleFontSize={fontSizes.md}
                title={topArticles[3].webTitle}
                imageSrc={topArticles[3].fields.thumbnail}
              />
            </TinyCard>
            <TinyCard>
              <NewsCard
                borderBottom={`3px solid ${colors.green}`}
                titleFontSize={fontSizes.md}
                title={topArticles[4].webTitle}
                imageSrc={topArticles[4].fields.thumbnail}
              />
            </TinyCard>
          </TopRight>
        </>
        <Bottom>
          <MedCard>
            <NewsCard
              title={topArticles[5].webTitle}
              imageSrc={topArticles[5].fields.thumbnail}
            />
          </MedCard>
          <MedCard>
            <NewsCard
              title={topArticles[6].webTitle}
              imageSrc={topArticles[6].fields.thumbnail}
            />
          </MedCard>
          <MedCard>
            <NewsCard
              title={topArticles[6].webTitle}
              imageSrc={topArticles[6].fields.thumbnail}
            />
          </MedCard>
        </Bottom>
      </Stories>
    );
  }

  return (
    <Container>
      <HeadingContainer>
        <Heading>Top stories</Heading>
        <BFContainer>
          <BookmarkButton text="VIEW BOOKMARK" />
          <FilterStyling>
            <FilterArrow/>
            <Filter defaultValue="newest">
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </Filter>
          </FilterStyling>
        </BFContainer>
      </HeadingContainer>
      {stories}
    </Container>
  );
}

export default TopStories;
