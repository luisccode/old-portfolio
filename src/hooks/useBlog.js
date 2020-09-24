import { useStaticQuery, graphql } from "gatsby"

const useBlog = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiArticles {
        nodes {
          title
          date
          id
          url
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
  `)
  const {
    allStrapiArticles: { nodes },
  } = data
  return nodes
}

export default useBlog
