import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';


import { Section, Container } from '@components/global';

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="how yope works" accent>
        <StyledContainer>
          <div>
            <h1>How Yope Works</h1>
            <br></br>
            <br></br>
                  <span>
                  <div>
                <h3>
                Your finances can get confusing sometimes. 
                So we made understanding them very simple!
                Here's what you get as a YOPE member:
                </h3>
              </div>
              </span>

          </div>
       

        </StyledContainer>
      </Section>
    )}
  />
);


const StyledContainer = styled(Container)`
  display: flex;
  align-content: center;
  justify-content: flex-end;
  position: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

export default UsedBy;
