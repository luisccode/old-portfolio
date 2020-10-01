import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import About from "../components/about";
import Section from "../components/section";
import { Title, Paragraph } from "../components/typography";

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="About Me"
          description="Luisccode about me page"
          keywords={["About Luisccode", "Web Developer"]}
        />
        <About hide={true} />
        <Section>
          <Title tag="h3">Education</Title>
          <Paragraph
            margin="1.35rem 0"
            fontSize="1.6rem"
            textAlign="left"
            lineHeight={1.5}
          >
            I am a 5th-semester student of system engineering at the University
            of Los Andes. I have taken some courses related to computer science
            where I have learned things like algorithms, complexity, calculus,
            computer architecture, and problem-solving.
          </Paragraph>
          <Paragraph
            margin="1.35rem 0"
            fontSize="1.6rem"
            textAlign="left"
            lineHeight={1.5}
          >
            I usually improve my skills by studying through official
            documentation and online courses. I have taken some courses like
            javascript moderno guia definitiva and node: de cero a experto, I
            also use resource such as reactjs.org, developer.mozilla.org and
            freecodecamp.org.
          </Paragraph>
        </Section>
      </Layout>
    </ThemeProvider>
  );
};
export default AboutPage;
