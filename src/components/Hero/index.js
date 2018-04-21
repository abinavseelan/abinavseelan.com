import React from 'react';

import CTA from '../CTA';
import SocialLinks from '../SocialLinks';

import '../../styles/hero.scss';

import github from '../../images/social/github.svg';
import twitter from '../../images/social/twitter.svg';
import medium from '../../images/social/medium.svg';
import linkedin from '../../images/social/linkedin.svg';
import email from '../../images/social/email.svg';

const links = [
    {
        href: 'https://github.com/abinavseelan',
        title: 'Github',
        image: github,
    },
    {
        href: 'https://twitter.com/@abinavseelan',
        title: 'Twitter',
        image: twitter,
    },
    {
        href: 'https://medium.com/@abinavseelan',
        title: 'Medium',
        image: medium,
    },
    {
        href: 'https://www.linkedin.com/in/abinavseelan/',
        title: 'Linkedin',
        image: linkedin,
    },
    {
        href: 'mailto:sayhi@abinavseelan.com',
        title: 'Email',
        image: email,
    }
]

const Hero = () => (
    <div className="hero">
        <div className="container">
            <h1 className="t-bold t-mtb-15">
                Hey! 👋 I'm Abinav Seelan
            </h1>
            <h2 className="t-regular t-mtb-15">
                UI Engineer at Flipkart.com and Author at Camp Vanilla
            </h2>

            <CTA type="primary" inline external to="/resume.pdf" title="Resume">
                My Resume
            </CTA>

            <CTA type="secondary" inline external to="https://blog.campvanilla.com" title="CampVanilla" className="chevron">
                Visit Camp Vanilla <span>›</span>
            </CTA>
            
            <hr />

            <SocialLinks links={links} />
        </div>
    </div>
);

export default Hero;