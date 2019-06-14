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
                So we made understanding them <strong> very simple! </strong>
                <br></br>
                <br></br>
                Here's what you get as a YOPE member:
                </h3>
              </div>
              </span>
              <br></br>
              <br></br>
              
              <img src="https://i1.wp.com/yopetoday.com/wp-content/uploads/2019/03/learning-portal-how-to-pg.png?w=820&ssl=1" alt="Smiley face" />

              <br></br>
              <br></br>

              <h3 className="center">

              YOPE has created a curriculum for personal finance which is translated into four video modules.
              Each module ranges from 14 minutes to 35 minutes total and it breaks down the areas of personal finance into easy-to-understand sections.
              <br></br>
              <br></br>
              Most sections consist of short quizzes to reinforce what you’ve learned. 
              Even though everyone's financial situation is different, The Budgeting Module is included with your membership because Yope wants you to first learn how to manage your money!
              <br></br>
              <br></br>
              <a class="f6 link dim br2 ba bw2 ph3 pv2 mb2 dib darkblue" href="#0">SEE THE MODULE LESSONS</a>

              </h3>
              <br></br>
              <br></br>


              <img src="https://i2.wp.com/yopetoday.com/wp-content/uploads/2018/12/meeting.png?w=820&ssl=1" alt="Smiley face" />
              <br></br>
              <br></br>
              <h3>

              Your assigned Financial Consultant assesses your financial situation, creates a budget and develops an individualized plan to help you achieve your financial goals.
              Every year you will get three FREE 30-minute consultations via phone, in-person, or video-chat. Limit one free consultation per month. Feel free to schedule longer consultations or more appointments for just $40 an hour.
              Our staff is very knowledgeable, very discrete and very understanding of everyone's financial situation.
              <br></br>
              <br></br>
              <strong>
              We pride ourselves on empowering and supporting each and every member.
              </strong>
              </h3>

              <br></br>
              <br></br>
              <img src="https://i2.wp.com/yopetoday.com/wp-content/uploads/2019/03/egifts.png?w=820&ssl=1" alt="Smiley face" />
              
              <h3>
              Aid to encourage your financial journey in the form of FREE e-gift cards and much more!
              </h3>


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
