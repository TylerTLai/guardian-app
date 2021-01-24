import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewsCard from '../NewsCard';
import PageHeader from '../PageHeader';

import { ArticleLink } from '../../pages/styles';
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
  Stories,
} from './styles';

import theme from '../../styles/theme';

const { fontSizes, colors } = theme;

function TopStories({ topArticles }) {
  const stories = [];

  // create news cards from first 8 'world' section articles
  for (let i = 7; i < topArticles.slice(0, 8).length; i++) {
    stories.push(
      <Stories key={uuidv4()}>
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
      <PageHeader
        title="Top stories"
        bookmarkText="VIEW BOOKMARK"
        filter={true}
      />
      {stories}
    </Container>
  );
}

export default TopStories;
