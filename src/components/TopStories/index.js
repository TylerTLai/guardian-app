import React, { useEffect } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import makeNewsArticles from "./makeNewsArticles";
import PageHeader from "../PageHeader";
import { fetchTopStories } from "../../store/actions/articles";

import { routeTransitionVariants } from "../../animations/routeTransitions";
import { Container } from "./styles";

function TopStories({ fetchTopStories, section, topStories }) {
  useEffect(() => {
    fetchTopStories(section);
  }, []);

  const selectedStories = makeNewsArticles(topStories, 8);

  return (
    <Container>
      <PageHeader
        bookmarkText="VIEW BOOKMARK"
        filter={true}
        title="Top stories"
      />

      <motion.div
        animate="display"
        initial="initial"
        variants={routeTransitionVariants}
      >
        {selectedStories}
      </motion.div>
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
