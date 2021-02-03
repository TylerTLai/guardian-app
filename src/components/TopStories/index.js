import React, { useEffect } from "react";
import { connect } from "react-redux";

import PageHeader from "../PageHeader";
import makeNewsArticles from "./makeNewsArticles";
import { fetchTopStories } from "../../store/actions/articles";

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

      <div>{selectedStories}</div>
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
