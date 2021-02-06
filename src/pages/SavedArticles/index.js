import React, { useEffect } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import { getBookmarks, removeBookmark } from "../../store/actions/bookmark";
import Layout from "../../components/Layout";
import NewsCard from "../../components/NewsCard";
import NewsSection from "../../components/NewsSection";
import PageHeader from "../../components/PageHeader";

import { ArticleLink, Container } from "../styles";
import { routeTransitionVariants } from "../../animations/routeTransitions";

function SavedArticles({ bookmarks, getBookmarks }) {
  useEffect(() => {
    getBookmarks();
  }, []);

  const newsCards = bookmarks
    ? bookmarks.map((bookmark) => {
        if (bookmark) {
          const imageUrl = bookmark.fields.thumbnail
            ? bookmark.fields.thumbnail
            : "";

          return (
            <ArticleLink to={"/" + bookmark.id} key={bookmark.id}>
              <NewsCard title={bookmark.webTitle} imageSrc={imageUrl} />
            </ArticleLink>
          );
        }
      })
    : null;

  return (
    <Layout>
      <motion.div
        animate="in"
        exit="out"
        initial="out"
        variants={routeTransitionVariants}
      >
        <Container>
          <PageHeader title="All bookmarks" sort={false} />
          <NewsSection>{newsCards}</NewsSection>
        </Container>
      </motion.div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  const { bookmarks } = state.bookmarkReducer;

  if (bookmarks) {
    return {
      bookmarks,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBookmarks: () => dispatch(getBookmarks()),
    removeBookmark: (articleId) => dispatch(removeBookmark(articleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedArticles);
