import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const SectionComponent = styled.section`
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  ${(props) =>
    !props.isInternalPage
      ? css`
          padding-top: 2rem;
          margin-top: 2rem;
        `
      : ``}
  text-align: ${(props) => props.textAlign};
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    padding-top: 0;
    margin-top: 6rem;
  }
  .separator {
    display: none;
  }
  ${(props) =>
    !props.isInternalPage
      ? css`
          @media (min-width: 768px) {
            .separator {
              display: inline;
            }
          }
        `
      : ``}
`;
const Section = (props) => {
  return <SectionComponent {...props}>{props.children}</SectionComponent>;
};
export default Section;

Section.propTypes = {
  textAlign: PropTypes.string,
  isInternalPage: PropTypes.bool,
};
Section.defaultProps = {
  textAlign: "center",
  isInternalPage: false,
};
