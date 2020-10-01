import React from "react";
import Section from "../section";
import Separator from "../separator";
import { Title, Paragraph } from "../typography";
import ArticleCard from "./articleCard";
import Button from "../button";
import { Link } from "gatsby";
import useBlog from "../../hooks/useBlog";
import styled from "styled-components";
import mixins from "../../mixins";

const ArticlesContainer = styled.div`
  ${mixins.flexAround}
  flex-wrap: wrap;
`;
const Blog = () => {
  const data = useBlog();
  return (
    <Section id="blog">
      <Separator />
      <Title>Latest Blog</Title>
      <Paragraph margin="1.35rem 0" fontSize="1.5rem">
        Check out <Link to="/blog">my blog</Link> where I share articles,
        tutorials and snippets about react, gatsby, javascript, freelancing, and
        programming. Let me know what you think in the comments section.
      </Paragraph>
      <ArticlesContainer>
        {data.map((articleData) => (
          <ArticleCard data={articleData} key={articleData.id} />
        ))}
      </ArticlesContainer>
      <Button margin="2rem auto" tag={Link} to="/blog">
        View All
      </Button>
    </Section>
  );
};
export default Blog;
