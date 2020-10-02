import React from "react";
import "./prism.css";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../SEO";
import { Title, Paragraph } from "../typography";
import {
  ImagenComponent,
  BackgroundImageComponent,
  InfoContainer,
  Link,
  ContainerComponent,
  UlComponent,
} from "./styles";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

const components = {
  h1: (props) => <Title {...props} />,
  h2: (props) => <Title {...props} margin="1rem 0" tag="h2" />,
  h3: (props) => <Title {...props} margin="1rem 0" tag="h3" />,
  h4: (props) => <Title {...props} margin="1rem 0" tag="h4" />,
  img: (props) => <ImagenComponent {...props} />,
  p: (props) => (
    <Paragraph
      {...props}
      fontSize="1.6rem"
      textAlign="left"
      margin="1rem 0"
      lineHeight={1.7}
    />
  ),
  a: (props) => <Link {...props} />,
  ul: (props) => <UlComponent {...props} />,
};

const Article = ({ data }) => {
  const {
    title,
    seo: { metaTitle, metaDescription, keywords },
    childStrapiArticleContent: {
      childMdx: { body },
    },
    publishedAt,
    image,
  } = data.strapiArticles;
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title={metaTitle}
          description={metaDescription}
          keywords={keywords}
          image={image.publicURL}
          customScript={{
            url:
              "https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/prism.min.js",
          }}
        />
        <BackgroundImageComponent fluid={image.sharp.fluid}>
          <InfoContainer>
            <Title
              fontSize={{ small: "2.5rem", medium: "3rem", large: "5.5rem" }}
              fontWeight={400}
              textAlign="center"
            >
              {title}
            </Title>
            <Paragraph fontSize="1.5rem" textAlign="right" margin="2rem 0 0">
              @luisccode
            </Paragraph>
            <Paragraph fontSize="1.5rem" textAlign="right">
              {publishedAt}
            </Paragraph>
          </InfoContainer>
        </BackgroundImageComponent>
        <ContainerComponent tag="section">
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </ContainerComponent>
      </Layout>
    </ThemeProvider>
  );
};
export default Article;

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticles(slug: { eq: $slug }, status: { eq: "published" }) {
      seo {
        metaTitle
        metaDescription
        keywords
      }
      title
      childStrapiArticleContent {
        childMdx {
          body
        }
      }
      publishedAt(formatString: "DD MMMM, YYYY")
      image {
        publicURL
        sharp: childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
