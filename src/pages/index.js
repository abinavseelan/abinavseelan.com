import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero';
import Section from '../components/Section';

import Talks from '../data/Talks';

const IndexPage = () => (
  <div>
    <Hero />
  
    <Section
      title="Talks."
      data={Talks.slice(0, 3)}
    />
  
    {/* <Section
      title="Experience."
    />
  
    <Section
      title="Work."
    />
  
    <Section
      title="Articles."
      inverted
    /> */}
  </div>
);

export default IndexPage
