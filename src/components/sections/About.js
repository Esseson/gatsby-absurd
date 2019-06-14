import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Welcome To Yope</h2>
              <p>
               The purpose of Yope is to help people make 
               better financial decisions and to eliminate 
               money-related stress & anxiety from their lives.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Assisting our members since 2016!</h2>
              <p>
                Yope is a personal finance subscription service. We assign members a consultant 
                from our staff to help them pay their bills & debt more efficiently and guide them
                on becoming a more knowledgeable investor for <strong>$1</strong> a day. 
              </p>
            </div>
          </Grid>
       
          <Grid>
            <div>
              <h2>Here's what we noticed</h2>
              <p>
              Most individuals looking to learn the basics of personal finance don’t know where to begin. 
              We all read amazing ‘tip articles’ on personal finance and investing, yet still, remain confused on HOW to manage our money.
              This is because there is no proper framework for personal finance. So, we try to seek professional help. 
              However, most people are reluctant because it can be very costly and most professionals only deal with matters of investing.
              Not personal finance as a whole.
              <br></br>
              <br></br>
          YOPE is the answer to both of those problems.
          Not only have we developed a curriculum for personal finance, but we also provide professional help for each YOPE member, all for an affordable monthly subscription.
          YOPE empowers every individual on how to manage their money so when they read articles or are confronted with different financial products they know exactly what it means and how it will benefit them.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
      

          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Boosting the people of the community.</h2>
              <p>
              A portion of everyone's membership goes toward OUR financial goals. 
              Check out we try to accomplish every month!. 
              <br></br>
              <br></br>
              <div>
                <a class="f6 link dim br2 ba bw2 ph3 pv2 mb2 dib blue" href="#0">Here's what we Planned</a>
              </div>
              <br></br>
              <br></br>

              <p>
              YOPE gives members a consultant to help them become better
              at using their money PLUS we provide communities with more
              opportunities to make their money go further.
              </p>
              
              </p>
            </div>
          </Grid>

        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
