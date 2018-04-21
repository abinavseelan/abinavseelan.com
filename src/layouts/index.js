import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Favicon from 'react-favicon';

import Header from '../components/header'
import LDJSON from '../components/LDJSON';

import './index.scss'

import favicon from '../images/favicon.png';
import { siteMeta, aboutMe, aboutWebsite } from '../data/seo';

const Layout = ({ children, data }) => (
  <div>
    <Favicon url={favicon} />
    <Helmet
      title={siteMeta.title}
      meta={[
        { name: 'description', content: siteMeta.og.description },
        { name: 'keywords', content: siteMeta.keywords.join(", ") },
        { name: "author", content: siteMeta.author },
        { name: "copyright", content: siteMeta.copyright },
        { property: "og:title", name: "twitter:title", content: siteMeta.og.title },
        { property: "og:site_name", content: siteMeta.og.site_name },
        { property: "og:type", content: siteMeta.og.type },
        { property: "og:url", content: siteMeta.og.url },
        { property: "og:image", name: "twitter:image", content: siteMeta.og.image.url },
        { property: "og:image:alt", name: "twitter:image:alt", content: siteMeta.og.image.alt },
        { property: "og:image:type", content: siteMeta.og.image.type },
        { property: "og:image:width", content: siteMeta.og.image.width },
        { property: "og:image:height", content: siteMeta.og.image.height },
        { property: "og:description", content: siteMeta.og.description },
        { property: "og:locale", content: siteMeta.og.locale.main },
        { property: "og:locale:alternate", content: siteMeta.og.locale.alt },
        { name: "twitter:card", content: siteMeta.twitter.card },
        { name: "twitter:site", content: siteMeta.twitter.site },
        { name: "twitter:creator", content: siteMeta.twitter.creator },
      ]}
    />

    <LDJSON data={ aboutMe } />
    <LDJSON data={ aboutWebsite } />
    
    <Header/>

    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;
