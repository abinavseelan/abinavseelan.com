import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero';
import Section from '../components/Section';
import CTA from '../components/CTA';

import talks from '../data/Talks';
import experience from '../data/Experience';
import work from '../data/Work';

const IndexPage = () => (
  <div>
    <Hero />
  
    <Section
      title="Talks."
      data={talks.slice(0, 3)}
    >
      <CTA
        type="inverted"
        to="/talks"
        title="View all talks"
        className="chevron"
      >
        View all talks <span> ›</span>
      </CTA>
    </Section>
  
    <Section
      title="Experience."
      data={experience.slice(0, 3)}
    >
      <CTA
        type="inverted"
        to="/experience"
        title="View more details"
        className="chevron"
      >
        View more details <span> ›</span>
      </CTA>
    </Section>
  
    <Section
      title="Work."
      data={work.slice(0, 4)}
    >
      <CTA
        type="inverted"
        to="/experience"
        title="View more details"
        className="chevron"
      >
        View more details <span> ›</span>
      </CTA>
    </Section>
  
    {/* <Section
      title="Articles."
      inverted
    /> */}
  </div>
);

export default IndexPage
