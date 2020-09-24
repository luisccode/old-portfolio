import { useStaticQuery, graphql } from "gatsby"

const useContact = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiSections(filter: { name: { eq: "contact" } }) {
        nodes {
          content
          jsonData {
            name
            value
            url
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

export default useContact
