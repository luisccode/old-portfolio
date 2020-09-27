import React, { useRef } from "react";
import Section from "../section";
import Container from "../container";
import { Title, Paragraph } from "../typography";
import Separator from "../separator";
import Testimonial from "./testimonial";
import useTestimonial from "../../hooks/useTestimonial";
import styled from "styled-components";

const SectionComponent = styled(Section)`
  overflow: hidden;
  padding-bottom: 4rem;
`;
const TestimonialsContainer = styled.div`
  position: relative;
  max-width: 80%;
  height: 30rem;
  margin: 0 auto;
  margin-top: 12rem;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    height: 37.8rem;
    max-width: 86.5rem;
  }
`;
const Slides = styled.div`
  width: 300%;
  height: 100%;
  display: flex;
  input[name="r"] {
    position: absolute;
    visibility: hidden;
  }
  #r1:checked ~ .s0 {
    margin-left: 0;
  }
  #r2:checked ~ .s0 {
    margin-left: -33.33%;
  }
  #r3:checked ~ .s0 {
    margin-left: -66.66%;
  }
`;
const Navigation = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
`;
const Bar = styled.label`
  width: 5rem;
  height: 1.2rem;
  margin: 8px;
  background: #8c8ca5;
  border-radius: 1.12rem;
  cursor: pointer;
  transition: 0.4s;
  &.orange {
    background: #ff4900;
  }
`;
const Testimonials = () => {
  const data = useTestimonial();
  const bar1 = useRef(null);
  const bar2 = useRef(null);
  const bar3 = useRef(null);
  const handleClick = (e) => {
    bar1.current.classList.remove("orange");
    bar2.current.classList.remove("orange");
    bar3.current.classList.remove("orange");
    e.target.classList.add("orange");
  };
  return (
    <SectionComponent id="testimonials" center={false}>
      <Container>
        <Separator />
        <Title tag="h4">Testimonials</Title>
        <Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam
          rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the
          quasi architecto beatae vitae dicta sunt explicabo.
        </Paragraph>
      </Container>
      <TestimonialsContainer>
        <Slides>
          <input type="radio" name="r" id="r1" />
          <input type="radio" name="r" id="r2" defaultChecked />
          <input type="radio" name="r" id="r3" />
          {data.map((testimonialData, index) => (
            <Testimonial
              data={testimonialData}
              className={`s${index}`}
              key={index}
            />
          ))}
        </Slides>
        <Navigation>
          <Bar htmlFor="r1" onClick={handleClick} ref={bar1}></Bar>
          <Bar
            htmlFor="r2"
            onClick={handleClick}
            ref={bar2}
            className="orange"
          ></Bar>
          <Bar htmlFor="r3" onClick={handleClick} ref={bar3}></Bar>
        </Navigation>
      </TestimonialsContainer>
    </SectionComponent>
  );
};
export default Testimonials;
