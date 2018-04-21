import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero';
import Section from '../components/Section';
import CTA from '../components/CTA';

import talks from '../data/Talks';
import experience from '../data/Experience';
import work from '../data/Work';
import articles from '../data/Articles';

import LDJSON from '../components/LDJSON';

import { articleSEO, aboutMe, aboutCampVanilla } from '../data/seo';

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
        to="/work"
        title="View more details"
        className="chevron"
      >
        View more details <span> ›</span>
      </CTA>
    </Section>
  
    <Section
      title="Articles."
      data={articles.filter(article => article.tag === 'new' || article.tag === 'popular')}
      inverted
    >
      <CTA
        type="white"
        to="https://blog.campvanilla.com"
        title="Visit Camp Vanilla"
        className="chevron"
        external
      >
        View more on CampVanilla <span> ›</span>
      </CTA>

      {
        articles
          .filter(article => article.tag === 'new' || article.tag === 'popular')
          .map(article => (
            <LDJSON key={article.id} data={ articleSEO(aboutMe, aboutCampVanilla, article) } />
          ))
      }
    </Section>
  </div>
);

export default IndexPage
