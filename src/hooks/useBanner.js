import { useStaticQuery, graphql } from "gatsby"

const useBanner = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiSections(filter: { name: { eq: "banner" } }) {
        nodes {
          content
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 1200) {
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

export default useBanner
