import { useStaticQuery, graphql } from "gatsby";

const usePortfolio = (getAllProjects) => {
  const data = useStaticQuery(graphql`
    {
      allStrapiProjects {
        nodes {
          name
          technologies
          description
          url
          demo
          featured
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  const {
    allStrapiProjects: { nodes },
  } = data;
  return getAllProjects
    ? nodes
    : nodes.filter((project) => project.featured === true);
};

export default usePortfolio;
