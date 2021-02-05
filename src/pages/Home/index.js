import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FadingCircle } from "better-react-spinkit";
import { motion } from "framer-motion";
import { fetchArticles } from "../../store/actions/articles";
import Layout from "../../components/Layout";
import TopStories from "../../components/TopStories";

import { ArticleLink, Container, Heading, SpinnerContainer } from "../styles";
import NewsSection from "../../components/NewsSection";
import NewsCard from "../../components/NewsCard";
import { routeTransitionVariants } from "../../animations/routeTransitions";
import theme from "../../styles/theme";

const { colors } = theme;

function Home({ articles, fetchArticles, loading }) {
  useEffect(() => {
    const section = "sport";
    fetchArticles(section);
  }, []);

  const newsCards = articles.slice(0, 3).map((article) => {
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
            <TopStories section="world" />
            <Heading>Sports</Heading>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: (section) => dispatch(fetchArticles(section)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
