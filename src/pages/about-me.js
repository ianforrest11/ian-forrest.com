import React from "react";
import styled from "styled-components";
import * as Mixins from "../Mixins";
import * as t from "../Typography";
import Layout, { Content } from "../components/Layout";
import HireMePopup from "../components/HireMePopup.js";
import { media } from "../MediaQueries";
import Img from "gatsby-image";
import { graphql } from "gatsby";

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding-bottom: 100px;

  ${t.H1} {
    margin-bottom: 25px;
  }
  ${t.H4} {
    line-height: 1.14;
  }
  ${media.tablet`background-position: center top 0px;`};
`;

const AboutMeWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    min-height: 540px;
    ${media.phone`min-height: 620px;`};
  }
  .gatsby-image {
    ${media.tablet`text-align: center;`}
    div {
      padding: 0;
    }
    picture img {
      max-width: 85%;
      position: relative;
      ${media.tablet`max-width: 80%;`}
    }
  }
  .avatar {
    max-width: 400px;
    width: 80%;
    margin: 0 auto 100px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
`;

class AboutMe extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <AboutMeWrapper>
        <Layout theme="white" openContactPopup={this.openContactPopup}>
          <AboveFold>
            <t.H1 green align="center">
              Additional Information
            </t.H1>
            <t.LargeP align="left" max70>
              I'm Ian, a travel-loving data scientist based in New York City!
              <br></br>
              <br></br>I recently graduated from Lambda School, a 9+ month
              full-time Computer Science & Software Engineering Academy that
              provides an immersive hands-on curriculum with a track focused on
              Data Science:
              <br></br>- Developed a solid foundation of descriptive and
              predictive statistics, including linear algebra, linear
              regression, hypothesis testing, and storytelling with data
              <br></br>- Gained hands-on experience engaging with machine
              learning; able to understand unsupervised learning, natural
              language and neural networks
              <br></br>- Completed a deep dive into Data Engineering, worked
              with databases, productization and big data.
              <br></br>- Served as a data scientist on a ready to deploy
              project, working alongside UX designers, web developers, and
              mobile developers to bring the project to fruition
            </t.LargeP>
            <t.LargeP align="left" max70>
              My specialties include natural language processing (NLP), text
              vectorization, data exploration & visualization, statistical
              analysis, predictive modeling, data engineering, deep learning,
              neural networks, data analysis, linear and multivariate
              regressions, predictive analytics, big data analytics, data
              mining, data wrangling, web scraping, ETL pipelines, API
              deployment, model tuning, unit tests, and agile development
              (CI/CD), quickly learning new skills, working well under pressure,
              leadership.
            </t.LargeP>
            <t.LargeP align="left" max70>
              In past lives, I've worked as a software project manager and a Big
              Four tax accountant.
            </t.LargeP>
          </AboveFold>
          <Content>
            <Img
              fluid={data.avatarAbout.childImageSharp.fluid}
              alt="Name Surname"
              className="avatar"
            />
          </Content>
        </Layout>
        <HireMePopup
          open={openHireMePopup}
          handleClose={this.handleRequestDemoClose}
        />
      </AboutMeWrapper>
    );
  }
}

export default AboutMe;

export const pageQuery = graphql`
  query {
    avatarAbout: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
