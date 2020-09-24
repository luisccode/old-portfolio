import { useStaticQuery, graphql } from "gatsby"

const usePortfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiProjects(filter: { featured: { eq: true } }) {
        nodes {
          name
          technologies
          description
          url
          demo
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
  `)
  return data
}

export default usePortfolio
