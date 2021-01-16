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
                  titleFontSize={'1.2rem'}
                  title={topArticles[1].webTitle}
                  imageSrc={topArticles[1].fields.thumbnail}
                />
              </ArticleLink>
            </SmCard>
            <SmCard>
              <NewsCard
                title={topArticles[2].webTitle}
                imageSrc={topArticles[2].fields.thumbnail}
              />
            </SmCard>
            <TinyCard>
              <NewsCard
                title={topArticles[3].webTitle}
                imageSrc={topArticles[3].fields.thumbnail}
              />
            </TinyCard>
            <TinyCard>
              <NewsCard
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
        <div>
          <BookmarkButton text="VIEW BOOKMARK" />
          <Filter defaultValue="newest">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </Filter>
        </div>
      </HeadingContainer>
      {stories}
    </Container>
  );
}

export default TopStories;
