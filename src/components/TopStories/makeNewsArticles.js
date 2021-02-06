import { v4 as uuidv4 } from "uuid";

import NewsCard from "../NewsCard";

import { ArticleLink } from "../../pages/styles";
import {
  Bottom,
  LgCard,
  MdCard,
  SmCard,
  Stories,
  TinyCard,
  Top,
  TopLeft,
  TopRight,
} from "./styles";

import theme from "../../styles/theme";

const { fontSizes, colors } = theme;

export const makeNewsArticles = (topStories, numberOfArticles) => {
  const stories = [];

  //todo abstract out some of these

  for (
    let i = numberOfArticles - 1;
    i < topStories.slice(0, numberOfArticles).length;
    i++
  ) {

    //todo implement better solution for BigCard headline
    const cleanHeadline = topStories[0].fields.trailText.replace(
      /<\/?[^>]+(>|$)/g,
      ""
    );

    stories.push(
      <Stories key={uuidv4()}>
        <Top>
          <TopLeft>
            <LgCard>
              <ArticleLink to={"/" + topStories[0].id}>
                <NewsCard
                  borderBottom={`3px solid ${colors.green}`}
                  title={topStories[0].webTitle}
                  titlePadding={"0.3rem 1rem 0 1rem"}
                  imageSrc={topStories[0].fields.thumbnail}
                  headline={cleanHeadline}
                />
              </ArticleLink>
            </LgCard>
          </TopLeft>
          <TopRight>
            <SmCard>
              <ArticleLink to={"/" + topStories[1].id}>
                <NewsCard
                  titleFontSize={fontSizes.md}
                  title={topStories[1].webTitle}
                  titleLength={90}
                  imageSrc={topStories[1].fields.thumbnail}
                />
              </ArticleLink>
            </SmCard>
            <SmCard>
              <ArticleLink to={"/" + topStories[2].id}>
                <NewsCard
                  borderBottom={`3px solid ${colors.yellow}`}
                  titleFontSize={fontSizes.md}
                  title={topStories[2].webTitle}
                  imageSrc={topStories[2].fields.thumbnail}
                />
              </ArticleLink>
            </SmCard>
            <TinyCard>
              <ArticleLink to={"/" + topStories[3].id}>
                <NewsCard
                  backgroundColor={colors.royalBlue}
                  borderBottom={`3px solid ${colors.blue}`}
                  titleFontSize={fontSizes.md}
                  title={topStories[3].webTitle}
                  titlePosition={"absolute"}
                  imageSrc={topStories[3].fields.thumbnail}
                  height={"100%"}
                />
              </ArticleLink>
            </TinyCard>
            <TinyCard>
              <ArticleLink to={"/" + topStories[4].id}>
                <NewsCard
                  backgroundColor={colors.royalBlue}
                  borderBottom={`3px solid ${colors.green}`}
                  titleFontSize={fontSizes.md}
                  title={topStories[4].webTitle}
                  titlePosition={"absolute"}
                  imageSrc={topStories[4].fields.thumbnail}
                  height={"100%"}
                />
              </ArticleLink>
            </TinyCard>
          </TopRight>
        </Top>

        <Bottom>
          <ArticleLink to={"/" + topStories[5].id}>
            <MdCard>
              <NewsCard
                title={topStories[5].webTitle}
                imageSrc={topStories[5].fields.thumbnail}
              />
            </MdCard>
          </ArticleLink>

          <MdCard>
            <ArticleLink to={"/" + topStories[6].id}>
              <NewsCard
                title={topStories[6].webTitle}
                imageSrc={topStories[6].fields.thumbnail}
              />
            </ArticleLink>
          </MdCard>
          <MdCard>
            <ArticleLink to={"/" + topStories[7].id}>
              <NewsCard
                title={topStories[7].webTitle}
                imageSrc={topStories[7].fields.thumbnail}
              />
            </ArticleLink>
          </MdCard>
        </Bottom>
      </Stories>
    );
  }

  return stories;
};

export default makeNewsArticles;
