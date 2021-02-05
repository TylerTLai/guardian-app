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
import theme from "../../styles/theme";
import { routeTransitionVariants } from "../../animations/routeTransitions";

const { colors } = theme;

function Category({ articles, fetchArticles, loading, location, section }) {
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
            animate="in"
            exit="out"
            initial="out"
            variants={routeTransitionVariants}
          >
            <PageHeader
              bookmarkText="VIEW BOOKMARK"
              filter={true}
              title={section === "Life and style" ? "Lifestyle" : section}
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
    loading: state.articleReducer.loading,
    section: state.articleReducer.section,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: (section) => dispatch(fetchArticles(section)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
