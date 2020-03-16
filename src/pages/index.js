import React from "react";
import styled from "styled-components";
import * as Mixins from "../Mixins";
import * as t from "../Typography";
import Layout, { Content } from "../components/Layout";
import C4ADS from "../images/c4ads.png";
import Spotify from "../images/spotify.png";
import { HireMe, LinkButton } from "../components/Button.js";
import HireMePopup from "../components/HireMePopup.js";
import { media } from "../MediaQueries";
import Colors from "../Colors";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { darken } from "polished";
import Python from "../images/python.png";
import Db from "../images/db.png";
import ML from "../images/ml.png";
import AWS from "../images/aws.png";
import SR from "../images/saferoutes.png";
import Twitter from "../images/twitter.png";

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;
const DivGrid = styled.div`
  padding: 80px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 16px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;
const DivGridItem = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr auto;
  grid-gap: 16px;
  align-items: center;
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  object-fit: contain;
  width: 100%;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
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
      <HomepageWrapper>
        <Layout
          theme="white"
          bigFooter
          openContactPopup={this.openContactPopup}
        >
          <AboveFold>
            <Img
              fluid={data.avatarHomepage.childImageSharp.fluid}
              alt="Name Surname"
              className="avatar"
            />
            <t.H1 primary align="center">
              Ian Forrest
            </t.H1>
            <t.LargeP align="center" max45>
              Former Accountant & Software Project Manager, Current Data Science
              Student, Future Data Scientist
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Contact
            </HireMe>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              About Me
            </t.H2>
            <t.P align="center" max70 className="who-desc">
              I am currently a Data Science student at Lambda School, an
              accelerated full-time program, preparing for work in a Data
              Scientist or Data Engineering position. I have a background in
              Software Project Management as well as several years in
              client-facing accounting roles. My technical background and my
              team setting background build upon my Data Science skills to
              prepare me for working with a multi-faceted team or clients in a
              Data Science position.
            </t.P>
            <t.H2 primary align="center" bold>
              Skills
            </t.H2>
            <t.P align="center" max70 className="who-desc">
              <DivGrid>
                <DivGridItem>
                  <ItemImage src={Python} alt="Placeholder title" />
                  Python (Numpy, pandas, sklearn, Tfidf)
                </DivGridItem>

                <DivGridItem>
                  <ItemImage src={Db} alt="Placeholder title" />
                  SQL, Postgres, Data Analysis, Data Visualization
                </DivGridItem>

                <DivGridItem>
                  {" "}
                  <ItemImage src={ML} alt="Placeholder title" />
                  Machine Learning (Keras, TensorFlow)
                </DivGridItem>

                <DivGridItem>
                  {" "}
                  <ItemImage src={AWS} alt="Placeholder title" />
                  AWS (Sagemaker, EMR, S3), Flask, Plotly Dash, Heroku
                </DivGridItem>
              </DivGrid>
            </t.P>
            <t.H1 primary align="center" bold>
              Portfolio
            </t.H1>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={C4ADS} alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Russian Arms Exporter Profiler</t.H2>
                <t.P>
                  Joint Project with the Center For Advanced Defense Studies
                </t.P>
                <t.P>
                  Built text modeling product to detect unknown Russian arms
                  exporters by analyzing trade data.
                </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/ianforrest11/russian_arms_exporters"
                >
                  Russian Arms Exporter Profiler
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Spotify Song Recommender</t.H2>
                <t.P>Lambda School Data Science Project</t.P>
                <t.P>
                  An API/Machine Learning product to recommend songs for
                  individual Users
                </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://spotirecer.herokuapp.com/"
                >
                  Spotify Song Recommender
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Spotify} alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={SR} alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Safe Routes</t.H2>
                <t.P>Lambda School Data Science Project</t.P>
                <t.P>
                  Group Project - Combined With Front End, Back End, Etc.
                </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://saferoute-visual.herokuapp.com/"
                >
                  Statistical Analysis & Visualization
                </LinkButton>
                <br></br>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://fesafe-routes.acemouty.now.sh/routes"
                >
                  Main Project
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>TwitOff</t.H2>
                <t.P>Lambda School Data Science Project</t.P>
                <t.P>
                  A Twitter analysis product designed to showcase text analysis,
                  modeling, database architecture, front-end development, and
                  back-end development skills.
                </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="#"
                >
                  TwitOff!
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Twitter} alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch</t.H1>
            <t.LargeP>Please reach out for more info! </t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup
          open={openHireMePopup}
          handleClose={this.handleRequestDemoClose}
        />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
