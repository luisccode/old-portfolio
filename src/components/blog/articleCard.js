import React from "react";
import { Title, Paragraph } from "../typography";
import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby";
import Arrow from "../arrow";
import styled from "styled-components";

const ArticleComponent = styled.article`
  flex-basis: calc(80%);
  height: 35.5rem;
  border-radius: 0.35rem;
  background-color: #111;
  overflow: hidden;
  margin: 1.5rem 0;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    flex-basis: calc(33.3% - 5rem);
    margin: 4.5rem 0;
  }
`;
const BackgroundImageComponent = styled(BackgroundImage)`
  height: 50%;
  background-position: center;
  background-size: cover;
`;
const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: left;
`;
const LinkComponent = styled(Link)`
  display: flex;
  align-items: center;
`;
const ArticleCard = ({ data: { publishedAt, title, slug, image } }) => {
  return (
    <ArticleComponent>
      <BackgroundImageComponent
        fluid={image.sharp.fluid}
      ></BackgroundImageComponent>
      <Content>
        <Paragraph margin="1.35rem 0" textAlign="left">
          {publishedAt}
        </Paragraph>
        <Link to={`/blog/${slug}`}>
          <Title
            fontSize={{ static: "1.65rem" }}
            margin="2.2rem 0"
            tag="h4"
            textAlign="left"
          >
            {title}
          </Title>
        </Link>
        <LinkComponent to={`/blog/${slug}`}>
          <Paragraph
            fontSize="1.3rem"
            margin="0 1rem 0 0"
            display="inline-block"
          >
            Learn More
          </Paragraph>
          <Arrow color="#fff" display="inline-block" hideOnSmall={false} />
        </LinkComponent>
      </Content>
    </ArticleComponent>
  );
};
export default ArticleCard;
