import React, { useState, useEffect } from "react"
import useInterval from "../../hooks/useInterval"
import useOnScreen from "../../hooks/useOnScreen"
import { Paragraph } from "../typography"
import mixins from "../../mixins"
import styled from "styled-components"

const CardCounterComponent = styled.div`
  ${mixins.flexCenter}
  flex-basis: 42%;
  height: 15rem;
  background-color: #111;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='rgb(122,122,122)' stroke-width='2' stroke-dasharray='7.5%2c7.5' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 0.75rem;
  text-align: center;
  margin-bottom: 3rem;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #ff4900;
    background-image: none;
  }
  @media (min-width: ${props => props.theme.size.tablet}) {
    flex-basis: calc(25% - 8rem);
    width: 25rem;
    height: 19rem;
    margin-bottom: 0;
  }
`
const SpanComponent = styled.span`
  display: block;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const CardCounter = ({ data: { name, value } }) => {
  const maxValue = parseInt(value)
  const [counter, setCounter] = useState(0)
  const [ref, visible] = useOnScreen({ threshold: 0.5 })
  const [delay, setDelay] = useState(null)
  //set the delay value when the card is on the screen
  useEffect(() => {
    if (visible) setDelay(1000 / maxValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])
  //the interval below just runs when delay is different from null
  useInterval(() => {
    if (counter + 1 >= maxValue) setDelay(null)
    setCounter(counter + 1)
  }, delay)
  return (
    <CardCounterComponent ref={ref}>
      <Paragraph fontSize="2rem" lineHeight={1}>
        <SpanComponent>{counter}</SpanComponent> {name}
      </Paragraph>
    </CardCounterComponent>
  )
}
export default CardCounter
