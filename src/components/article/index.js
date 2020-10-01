import React from "react";
import "./prism.css";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../SEO";
import { Title, Paragraph } from "../typography";
import BackgroundImage from "gatsby-background-image";
import Container from "../container";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import styled from "styled-components";

const components = {
  h1: (props) => <Title {...props} margin="1rem 0" />,
  h2: (props) => <Title {...props} margin="1rem 0" tag="h2" />,
  h3: (props) => <Title {...props} margin="1rem 0" tag="h3" />,
  h4: (props) => <Title {...props} margin="1rem 0" tag="h4" />,
  p: (props) => <Paragraph {...props} textAlign="left" lineHeight={1.7} />,
};
const BackgroundImageComponent = styled(BackgroundImage)`
  height: 20rem;
  margin-bottom:2rem;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    height: 30rem;
    margin:1rem 0;
  }
  border-radius: 0.35rem;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  &::before,
  &::after {
   filter: opacity(0.35); !important
  }
`;
const InfoContainer = styled.div`
  width: 80%;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    p {
      font-size: 1.8rem;
    }
  }
`;
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
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/prism.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title={metaTitle}
          description={metaDescription}
          keywords={keywords}
          // add and metaImage
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
        <Container>
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </Container>
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
        sharp: childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
