import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
import dayjs from 'dayjs';

import { fetchArticle } from '../../store/actions/news';
import { addBookmark } from '../../store/actions/bookmark';
import placeholder from '../../assets/images/placeholder.svg';

import {
  ArticleContainer,
  Caption,
  Date,
  Divider,
  PageHeader,
  Headline,
  Image,
  ImageContainer,
  Container,
  Title,
} from './styles';
import Layout from '../../components/Layout';

import BookmarkButton from '../../components/BookmarkButton';

function Article({
  article,
  addBookmark,
  bookmarks,
  bodyHtml,
  date,
  fetchArticle,
  headline,
  imageAlt,
  imageCaption,
  imageSrc,
  location,
  title,
}) {
  const id = location.pathname;

  useEffect(() => {
    fetchArticle(id);
  }, []);

  const sanitizeHtml = DOMPurify.sanitize(bodyHtml, {
    ALLOWED_TAGS: ['h1', 'p', 'span'],
    ALLOWED_ATTR: ['style'],
  });

  // console.log('article bookmarks ', bookmarks);
  console.log('article page ', article);

  return (
    <Layout>
      <Container>
        <PageHeader>
          {/* <BookmarkButton text="REMOVE BOOKMARK" handleBookmark={handleBookmark} /> */}
          <button onClick={() => addBookmark(article)}>Add to bookmark</button>
          <Date>{dayjs(date).format('ddd D MMM YYYY hh:mm')}</Date>
          <Title>{title}</Title>
          <Headline>{headline}</Headline>
          <Divider />
        </PageHeader>
        <ArticleContainer>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml }} />
        </ArticleContainer>
        <ImageContainer>
          {imageSrc ? (
            <Image src={imageSrc} alt={imageAlt} />
          ) : (
            <img
              src={placeholder}
              alt="The Peaks placeholder"
              width="100%"
              height="auto"
            />
          )}
          <Caption>{imageCaption}</Caption>
        </ImageContainer>
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  const { article } = state.articleReducer;

  if (article) {
    const {
      headline,
      body,
      thumbnail,
      trailText,
      firstPublicationDate,
    } = article.fields;

    const { alt, caption } = article.blocks.main.elements[0].imageTypeData;

    return {
      title: headline ? headline : '',
      bodyHtml: body ? body : '',
      imageSrc: thumbnail,
      headline: trailText ? trailText : '',
      date: firstPublicationDate ? firstPublicationDate : '',
      imageAlt: alt ? alt : '',
      imageCaption: caption ? caption : '',
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (section, articleId) =>
      dispatch(fetchArticle(section, articleId)),
    addBookmark: (articleId) => dispatch(addBookmark(articleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
