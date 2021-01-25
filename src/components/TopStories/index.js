import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
import { fetchTopStories } from '../../store/actions/articles';

const { fontSizes, colors } = theme;

function TopStories({ fetchTopStories, section, topStories }) {
  useEffect(() => {
    fetchTopStories(section);
  }, []);

  const stories = [];

  // create news cards from first 8 'world' section articles
  for (let i = 7; i < topStories.slice(0, 8).length; i++) {
    stories.push(
      <Stories key={uuidv4()}>
        <>
          <TopLeft>
            <BigCard>
              <ArticleLink to={'/' + topStories[0].id}>
                <NewsCard
                  borderBottom={`3px solid ${colors.green}`}
                  title={topStories[0].webTitle}
                  imageSrc={topStories[0].fields.thumbnail}
                />
              </ArticleLink>
            </BigCard>
          </TopLeft>
          <TopRight>
            <SmCard>
              <ArticleLink to={'/' + topStories[1].id}>
                <NewsCard
                  titleFontSize={fontSizes.md}
                  title={topStories[1].webTitle}
                  imageSrc={topStories[1].fields.thumbnail}
                />
              </ArticleLink>
            </SmCard>
            <SmCard>
              <NewsCard
                borderBottom={`3px solid ${colors.yellow}`}
                titleFontSize={fontSizes.md}
                title={topStories[2].webTitle}
                imageSrc={topStories[2].fields.thumbnail}
              />
            </SmCard>
            <TinyCard>
              <NewsCard
                backgroundColor={colors.royalBlue}
                borderBottom={`3px solid ${colors.blue}`}
                titleFontSize={fontSizes.md}
                title={topStories[3].webTitle}
                imageSrc={topStories[3].fields.thumbnail}
                height={'100%'}
              />
            </TinyCard>
            <TinyCard>
              <NewsCard
                backgroundColor={colors.royalBlue}
                borderBottom={`3px solid ${colors.green}`}
                titleFontSize={fontSizes.md}
                title={topStories[4].webTitle}
                imageSrc={topStories[4].fields.thumbnail}
                height={'100%'}
              />
            </TinyCard>
          </TopRight>
        </>
        <Bottom>
          <MedCard>
            <NewsCard
              title={topStories[5].webTitle}
              imageSrc={topStories[5].fields.thumbnail}
            />
          </MedCard>
          <MedCard>
            <NewsCard
              title={topStories[6].webTitle}
              imageSrc={topStories[6].fields.thumbnail}
            />
          </MedCard>
          <MedCard>
            <NewsCard
              title={topStories[6].webTitle}
              imageSrc={topStories[6].fields.thumbnail}
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

const mapStateToProps = (state) => {
  return {
    topStories: state.articleReducer.topStories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopStories: (section) => dispatch(fetchTopStories(section)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopStories);
