import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What Is YOPE?',
    content: () => (
      <>
        Yope is a personal Financial subscription service.
      </>
    ),
  },
  {
    title: 'How Much does YOPE cost?',
    content: () => (
      <>
        $1 for 30days
      </>
    ),
  },
  {
    title: 'What do i do after sign up?',
    content: () => (
      <>
        Gain access to Modules
      </>
    ),
  },
  {
    title: 'What are Modules?',
    content: () => (
      <>
       Online video contents 
      </>
    ),
  },
  {
    title: 'Are Modules free?',
    content: () => (
      <>
        For the first two weeks, yes.
      </>
    ),
  },
  {
    title: 'Who are financial consultants?',
    content: () => (
      <>
        Staffs of Yope.
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
