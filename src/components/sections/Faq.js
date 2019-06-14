import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'What Is YOPE?',
    content: () => (
      <>
        YOPE is a personal finance subscription service that assigns you a Financial Consultant from our staff to help you with your financial needs.
        YOPE also teaches you personal finance through four video modules. So whether you're trying to pay off debt, looking to maximize your investments
         or you need to know how to split up your paycheck to just live, YOPE has got you covered!
      </>
    ),
  },
  {
    title: 'How Much does YOPE cost?',
    content: () => (
      <>
        YOPE is $30 a month. Can’t see yourself spending $1 a day?
        First check out what you will learn and see if YOPE is right for you!
      </>
    ),
  },
  {
    title: 'What do i do after sign up?',
    content: () => (
      <>
        First, click on The Learning Portal and watch The Budgeting Module.
        Next, watch other modules that pertain to your financial situation.
        Then, schedule your first free 30-minute consultation with your Financial 
      </>
    ),
  },
  {
    title: 'What are Modules?',
    content: () => (
      <>
       YOPE has created four video modules harnessing the fundamentals of personal finance.
      They are The Budgeting Module, The Debt Module, The Saving Module, and The Investing Module.
      Now it is your job to review them, take notes, revisit them and most importantly, take action
      </>
    ),
  },
  {
    title: 'Are Modules free?',
    content: () => (
      <>
        Not all of them. The Budgeting Module is free because we need you to understand the foundation
        of personal finance before you start paying off debt, saving, or investing. It’s $40 for The 
        Debt Module, $25 for The Saving Module, and $60 for The Investing Module.
      </>
    ),
  },
  {
    title: 'Who are financial consultants?',
    content: () => (
      <>
        YOPE is staffed with experienced and knowledgeable Financial Consultants
         from the investment, real estate, debt relief and accounting fields. 
         Each YOPE member is assigned a dedicated Financial Consultant based on their financial needs.
      </>
    ),
  },
  {
    title: 'How do I schedule an appointment?',
    content: () => (
      <>
        You can book appointments by clicking on the MEET WITH MY FINANCIAL
         CONSULTANT tab located on your dashboard.
      </>
    ),
  },
  {
    title: 'Can I schedule an appointment with my Financial Consultant whenever I want?',
    content: () => (
      <>
        Absolutely! Each YOPE member has three FREE 30-minute consultations each year. 
        You can schedule more appointments for $40 an hour anytime you want.
      </>
    ),
  }, 
{
    title: 'Does YOPE do investing for me?',
    content: () => (
      <>
       No. YOPE teaches you what to invest in and what to consider through our Investing Module.
      </>
    ),
  }, 
{
    title: 'What do I do if I have a Financial Advisor already?',
    content: () => (
      <>
       Our Financial Consultants are big fans of collaboration, so use both! First,
      learn what to invest in and what to consider from The Investing Module. Next, 
      bounce investment strategies and weigh suggestions from your YOPE Financial Consultant.
      Then, walk right into your current Financial Advisors office and execute your plans with confidence!
      </>
    ),
  }, 


];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
