import { useStaticQuery, graphql } from "gatsby"

const useAbout = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiSections(filter: { name: { eq: "about" } }) {
        nodes {
          content
          jsonData {
            name
            initialYear
          }
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 600) {
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

export default useAbout
