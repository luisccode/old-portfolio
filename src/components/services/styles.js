import styled from "styled-components";
import mixins from "../../mixins";

export const IconContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #000;
  ${mixins.flexCenter}
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    width: 7rem;
    height: 7rem;
  }
`;

export const ServiceComponent = styled.div`
  cursor: pointer;
  position: relative;
  height: 6rem;
  flex-basis: calc(50% - 2rem);
  background-color: #111;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    height: 10rem;
    flex-basis: calc(33.3% - 6rem);
    margin: 0 4rem 5rem 0;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    ${IconContainer} {
      background-color: #fff;
    }
    img {
      filter: invert(1);
    }
    .arrow-svg {
      fill: #fff;
    }
  }
`;
