import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FadingCircle } from "better-react-spinkit";
import { motion } from "framer-motion";

import { fetchArticles } from "../../store/actions/articles";
import Layout from "../../components/Layout";
import NewsCard from "../../components/NewsCard";
import NewsSection from "../../components/NewsSection";
import PageHeader from "../../components/PageHeader";

import { ArticleLink, Container, SpinnerContainer } from "../styles";
import { routeTransitionVariants } from "../../animations/routeTransitions";
import theme from "../../styles/theme";

const { colors } = theme;

function Category({ articles, fetchArticles, location, loading, section }) {
  const sectionId = location.pathname.slice(1);

  useEffect(() => {
    fetchArticles(sectionId);
  }, [sectionId]);

  const newsCards = articles.map((article) => {
    const imageUrl = article.fields.thumbnail;
    return (
      <ArticleLink to={"/" + article.id} key={article.id}>
        <NewsCard title={article.webTitle} imageSrc={imageUrl} />
      </ArticleLink>
    );
  });

  return (
    <Layout>
      <Container>
        {loading ? (
          <SpinnerContainer>
            <FadingCircle size={100} color={colors.gray} />
          </SpinnerContainer>
        ) : (
          <motion.div
            variants={routeTransitionVariants}
            animate="in"
            initial="out"
            exit="out"
          >
            <PageHeader
              title={section === "Life and style" ? "Lifestyle" : section}
              bookmarkText="VIEW BOOKMARK"
              filter={true}
            />
            <NewsSection>{newsCards}</NewsSection>
          </motion.div>
        )}
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    articles: state.articleReducer.articles,
    section: state.articleReducer.section,
    loading: state.articleReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: (section) => dispatch(fetchArticles(section)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
