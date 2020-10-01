import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
      box-sizing: border-box;
      font-size: 62.5%;
      scroll-behavior: smooth;
      line-height: 1.15;
  }
  *,
  *:before,
  *:after {
      box-sizing: inherit;
  }
  body {
      font-family: 'Poppins', sans-serif;
      background-color: #000;
      font-size: 1.35rem;
      font-weight: 300;
      color: #fff;
      margin:0;
  }
  img {
    max-width: 100%;
}
a {
    color: #fff;
    text-decoration: none;
}
p {
    line-height: 2;
}

.fade-enter {
  opacity: 0;
  transform: scale(0.9) translateY(100%);
}
.fade-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 300ms, transform 300ms;
}
.fade-exit {
  opacity: 1;
  transform: translateY(0);
}
.fade-exit-active {
  opacity: 0;
  transform: scale(0.9) translateY(-100%);
  transition: opacity 300ms, transform 300ms;
}`;

export default GlobalStyles;
