import React from "react"
import styeld from "styled-components"

const ContainerComponent = styeld.div`
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
`
const Container = props => {
  return (
    <ContainerComponent {...props} as={props.tag}>
      {props.children}
    </ContainerComponent>
  )
}
export default Container
