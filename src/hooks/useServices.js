import { useStaticQuery, graphql } from "gatsby";

const useServices = (getAllServices) => {
  const data = useStaticQuery(graphql`
    {
      allStrapiSections(filter: { name: { eq: "services" } }) {
        nodes {
          content
        }
      }
      allStrapiServices {
        nodes {
          name
          featured
          icon {
            publicURL
          }
        }
      }
    }
  `);
  const {
    allStrapiSections: { nodes },
    allStrapiServices,
  } = data;
  const services = allStrapiServices.nodes.filter(
    (service) => service.featured === true
  );
  return {
    sectionData: nodes[0],
    services: services,
  };
};

export default useServices;
