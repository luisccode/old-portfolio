import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import Section from "../components/section";
import { Title, Paragraph } from "../components/typography";
import ArticleCard from "../components/blog/articleCard";
import styled from "styled-components";
import useBlog from "../hooks/useBlog";
import mixins from "../mixins";

const ArticlesContainer = styled.div`
  ${mixins.flexAround}
  flex-wrap: wrap;
`;
const BlogPage = () => {
  const data = useBlog(true);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Blog" />
        <Section>
          <Title>My Blog</Title>
          <Paragraph margin="1.35rem 0" fontSize="1.5rem">
            This is my personal blog where I share articles, tutorials and
            snippets about react, gatsby, javascript, freelancing, and
            programming
          </Paragraph>
          <ArticlesContainer>
            {data.map((articleData) => (
              <ArticleCard data={articleData} key={articleData.id} />
            ))}
          </ArticlesContainer>
        </Section>
      </Layout>
    </ThemeProvider>
  );
};
export default BlogPage;
