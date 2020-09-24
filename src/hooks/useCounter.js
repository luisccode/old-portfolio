import { useStaticQuery, graphql } from "gatsby"

const useCounter = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiSections(filter: { name: { eq: "counter" } }) {
        nodes {
          jsonData {
            name
            value
          }
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

export default useCounter
