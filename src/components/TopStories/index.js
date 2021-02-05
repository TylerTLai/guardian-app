import React, { useEffect } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import PageHeader from "../PageHeader";
import makeNewsArticles from "./makeNewsArticles";
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
        title="Top stories"
        bookmarkText="VIEW BOOKMARK"
        filter={true}
      />

      <motion.div
        variants={routeTransitionVariants}
        animate="display"
        initial="initial"
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
