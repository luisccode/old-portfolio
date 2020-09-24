import { useStaticQuery, graphql } from "gatsby"

const useSEO = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          image
          siteUrl
        }
      }
    }
  `)
  const {
    site: { siteMetadata },
  } = data
  return siteMetadata
}

export default useSEO
