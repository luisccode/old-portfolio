import React from "react"
import Section from "../section"
import Separator from "../separator"
import { Title, Paragraph } from "../typography"
import Article from "./article"
import Button from "../button"
import useBlog from "../../hooks/useBlog"
import styled from "styled-components"
import mixins from "../../mixins"

const ArticlesContainer = styled.div`
  ${mixins.flexAround}
  flex-wrap: wrap;
`
const Blog = () => {
  const data = useBlog()
  return (
    <Section id="blog">
      <Separator />
      <Title>Latest Blog</Title>
      <Paragraph margin="1.35rem 0">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
        repellendus exercitationem, recusandae ab corrupti cupiditate voluptatum
        impedit hic non omnis.
      </Paragraph>
      <ArticlesContainer>
        {data.map(articleData => (
          <Article data={articleData} key={articleData.id} />
        ))}
      </ArticlesContainer>
      <Button margin="2rem auto">View All</Button>
    </Section>
  )
}
export default Blog
