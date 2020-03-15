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
              Ian Forrest - Data Scientist
            </t.H1>
            <t.LargeP align="left" max70>
              I'm Ian, a music-loving workout enthusiast aspiring to be a data
              scientist! Currently, I attend Lambda School as a student.
            </t.LargeP>
            <t.LargeP align="left" max70>
              My specialties include data exploration & visualization,
              statistical analysis, predictive modeling, data engineering, deep
              learning, neural networks, data analysis, linear and multivariate
              regressions, predictive analytics, big data analytics, natural
              language processing (NLP), data mining, data wrangling, web
              scraping, ETL pipelines, API deployment, model tuning, unit tests,
              and agile development (CI/CD), quickly learning new skills,
              working well under pressure, leadership.
            </t.LargeP>
            <t.LargeP align="left" max70>
              To view my latest projects, please scroll down to the bottom of
              the homepage.
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
