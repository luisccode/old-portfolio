import { useStaticQuery, graphql } from "gatsby"

const useMain = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiSections(filter: { name: { eq: "main" } }) {
        nodes {
          content
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 1900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const {
    allStrapiSections: { nodes },
  } = data
  return nodes[0]
}

export default useMain
