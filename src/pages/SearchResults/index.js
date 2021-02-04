import React from "react";
import { connect } from "react-redux";
import { FadingCircle } from "better-react-spinkit";

import Layout from "../../components/Layout";
import NewsCard from "../../components/NewsCard";
import NewsSection from "../../components/NewsSection";
import PageHeader from "../../components/PageHeader";

import { ArticleLink, Container, SpinnerContainer } from "../styles";
import theme from "../../styles/theme";

const { colors } = theme;

function SearchResults({ loading, location }) {
  const { results } = location.state;

  const newsCards = results.map((result) => {
    const imageUrl = result.fields.thumbnail;
    return (
      <ArticleLink to={"/" + result.id} key={result.id}>
        <NewsCard title={result.webTitle} imageSrc={imageUrl} />
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
          <>
            <PageHeader
              title="Search Results"
              bookmarkText="VIEW BOOKMARK"
              filter={true}
            />
            <NewsSection>{newsCards}</NewsSection>
          </>
        )}
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.searchReducer.loading,
  };
};

export default connect(mapStateToProps, null)(SearchResults);
