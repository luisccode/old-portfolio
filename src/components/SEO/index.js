import React from "react"
import { Helmet } from "react-helmet"
import useSEO from "../../hooks/useSEO"

const SEO = ({ description, keywords, title, image, url, author }) => {
  const siteMetadata = useSEO()
  const metaDescription = description || siteMetadata.description
  const metaTitle = title || siteMetadata.title
  const metaAuthor = author || siteMetadata.author
  const metaUrl = url || siteMetadata.siteUrl
  const metaImage = `${metaUrl}${image || siteMetadata.image}`
  const metaKeywords = keywords || [
    "Luis Cortes Portfolio",
    "luisccode",
    "Web Developer",
  ]
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:email`,
          content: `luisccode@gmail.com`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? { name: `keywords`, content: metaKeywords.join(`, `) }
          : []
      )}
    />
  )
}
export default SEO
