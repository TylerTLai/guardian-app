import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
import dayjs from 'dayjs';

import { fetchArticle } from '../../store/actions/news';
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

  return (
    <Layout>
      <Container>
        <PageHeader>
          <BookmarkButton text="REMOVE BOOKMARK" />
          <Date>{dayjs(date).format('ddd D MMM YYYY hh:mm')}</Date>
          <Title>{title}</Title>
          <Headline>{headline}</Headline>
          <Divider />
        </PageHeader>
        <ArticleContainer>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml }} />
        </ArticleContainer>
        <ImageContainer>
          <Image src={imageSrc} alt={imageAlt} />
          <Caption>{imageCaption}</Caption>
        </ImageContainer>
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
    bodyHtml: state.bodyHtml,
    imageSrc: state.imageSrc,
    imageCaption: state.imageCaption,
    imageAlt: state.imageAlt,
    headline: state.headline,
    date: state.date,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (section, articleId) =>
      dispatch(fetchArticle(section, articleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
