import React from 'react';

import CTA from '../CTA';

import '../../styles/hero.scss';

const Hero = () => (
    <div className="hero">
        <h1 className="t-bold t-mtb-15">
            Hey! 👋 I'm Abinav Seelan
        </h1>
        <h2 className="t-regular t-mtb-15">
            UI Engineer at Flipkart.com and Author at Camp Vanilla
        </h2>

        <CTA type="primary" inline>
            <a href="/resume.pdf">
                My Resume
            </a>
        </CTA>

        <CTA type="secondary" inline>
            <a href="https://blog.campvanilla.com">
                Visit Camp Vanilla ›
            </a>
        </CTA>
    </div>
);

export default Hero;