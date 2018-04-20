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

        <CTA type="primary" inline external to="/resume.pdf" title="Resume">
            My Resume
        </CTA>

        <CTA type="secondary" inline external to="https://blog.campvanilla.com" title="CampVanilla" className="chevron">
            Visit Camp Vanilla <span>›</span>
        </CTA>
    </div>
);

export default Hero;