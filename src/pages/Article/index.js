import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';

import { fetchArticle } from '../../store/actions/news';
import {
  ArticleContainer,
  Caption,
  Date,
  Divider,
  HeadingContainer,
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
  fetchArticle,
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
        <HeadingContainer>
          <BookmarkButton text="REMOVE BOOKMARK" />
          <Date>date</Date>
          <Title>{title}</Title>
          <Headline>
            England Women will fly out to New Zealand later this month facing
            stringent new quarantine measures before their series in February.
          </Headline>
          <Divider />
        </HeadingContainer>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (section, articleId) =>
      dispatch(fetchArticle(section, articleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
