import React, { useEffect } from "react";
import { connect } from "react-redux";
import dayjs from "dayjs";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";

import { addBookmark, removeBookmark } from "../../store/actions/bookmark";
import { fetchArticle } from "../../store/actions/articles";
import BookmarkButton from "../../components/BookmarkButton";
import Layout from "../../components/Layout";
import placeholder from "../../assets/images/placeholder.svg";
import { routeTransitionVariants } from "../../animations/routeTransitions";

import {
  ArticleContainer,
  Caption,
  Container,
  Date,
  Divider,
  Headline,
  Image,
  ImageContainer,
  PageHeader,
  Title,
} from "./styles";

function Article({
  addBookmark,
  article,
  bodyHtml,
  bookmarks,
  date,
  fetchArticle,
  headline,
  imageAlt,
  imageCaption,
  imageSrc,
  location,
  removeBookmark,
  title,
}) {
  const id = location.pathname;

  useEffect(() => {
    fetchArticle(id);
  }, []);

  const sanitizeBodyHtml = DOMPurify.sanitize(bodyHtml, {
    ALLOWED_TAGS: ["h1", "p", "span"],
    ALLOWED_ATTR: ["style"],
  });

  const sanitizeHeadlineHtml = DOMPurify.sanitize(headline, {
    ALLOWED_TAGS: ["h1", "p", "span"],
    ALLOWED_ATTR: ["style"],
  });

  const handleBookmark = (article) => {
    if (bookmarked) {
      removeBookmark(article.id);
    } else {
      addBookmark(article);
    }
  };

  const bookmarked = bookmarks
    ? bookmarks.some((bookmark) => bookmark.id === article.id)
    : false;

  return (
    <Layout>
      <motion.div
        variants={routeTransitionVariants}
        animate="in"
        initial="out"
        exit="out"
      >
        <Container>
          <PageHeader>
            <BookmarkButton
              text={bookmarked ? "Remove from bookmark" : "Add to bookmark"}
              handleBookmark={() => handleBookmark(article, bookmarked)}
            />
            <Date>{dayjs(date).format("ddd D MMM YYYY hh:mm")}</Date>
            <Title>{title}</Title>
            <Headline>
              <div dangerouslySetInnerHTML={{ __html: sanitizeHeadlineHtml }} />
            </Headline>
            <Divider />
          </PageHeader>
          <ArticleContainer>
            <div dangerouslySetInnerHTML={{ __html: sanitizeBodyHtml }} />
          </ArticleContainer>
          <ImageContainer>
            {imageSrc ? (
              <Image src={imageSrc} alt={imageAlt} />
            ) : (
              <Image
                src={placeholder}
                alt="The Peaks placeholder"
                width="100%"
                height="auto"
              />
            )}
            <Caption>{imageCaption}</Caption>
          </ImageContainer>
        </Container>
      </motion.div>
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

    const { alt, caption } = article.blocks.main
      ? article.blocks.main.elements[0].imageTypeData
      : "";

    return {
      bookmarks: state.bookmarkReducer.bookmarks,
      article: article ? article : "",
      title: headline ? headline : "",
      bodyHtml: body ? body : "",
      imageSrc: thumbnail ? thumbnail : "",
      headline: trailText ? trailText : "",
      date: firstPublicationDate ? firstPublicationDate : "",
      imageAlt: alt ? alt : "",
      imageCaption: caption ? caption : "",
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (section, articleId) =>
      dispatch(fetchArticle(section, articleId)),
    addBookmark: (article) => dispatch(addBookmark(article)),
    removeBookmark: (article) => dispatch(removeBookmark(article)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
