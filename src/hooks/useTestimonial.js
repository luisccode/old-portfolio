import { useStaticQuery, graphql } from "gatsby"

const useTestimonial = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiTestimonials {
        nodes {
          name
          company
          testimonial
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const {
    allStrapiTestimonials: { nodes },
  } = data
  return nodes
}

export default useTestimonial
