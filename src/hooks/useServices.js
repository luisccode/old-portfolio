import { useStaticQuery, graphql } from "gatsby"

const useServices = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiSections(filter: { name: { eq: "services" } }) {
        nodes {
          content
          image {
            publicURL
          }
        }
      }
      allStrapiServices {
        nodes {
          name
          icon {
            publicURL
          }
        }
      }
    }
  `)
  return data
}

export default useServices
