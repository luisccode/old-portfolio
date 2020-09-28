import { useStaticQuery, graphql } from "gatsby";

const useBlog = (getAllArticles = false) => {
  const data = useStaticQuery(graphql`
    {
      allStrapiArticles {
        nodes {
          title
          publishedAt(formatString: "DD MMMM, YYYY")
          id
          featured
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  const {
    allStrapiArticles: { nodes },
  } = data;
  return getAllArticles
    ? nodes
    : nodes.filter((article) => article.featured === true);
};

export default useBlog;
