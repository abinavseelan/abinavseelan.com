import flipkart from '../images/logos/flipkart.jpg';
import hashnode from '../images/logos/hashnode.jpg';
import saltside from '../images/logos/saltside.png';

export default [
    {
        id: 3,
        heading: 'Flipkart.com',
        subHeadings: ['UI Engineer: Apr 2018 to Present'],
        description: null,
        companyLink: "https://flipkart.com",
        image: flipkart,
        main: "companyLink"
    },
    {
        id: 2,
        heading: 'Hashnode.com',
        subHeadings: ['Software Engineer: Oct 2017 to Mar 2018'],
        description: `
            <p>
                At Hashnode, I was part of the core team building a<i>Friendly and inclusive Q &amp; A community for coders</i>. My role at Hashnode was that of a<strong>Full Stack Engineer</strong>. Features required me working across the stack, with ReactJS on the frontend and NodeJS and MongoDB in the backend.
                <br />
                <br />
                Some features that I worked on here are:
            </p>
            <ul>
                <li>
                    Performance improvements to the Post Detail Page. This helped reduce the page load time from 11 seconds to just 4 seconds.
                </li>
                <li>
                    Worked on the rewrite of Hashnode.com to Next.js. Specifically focused on the writing experience on Hashnode.com
                </li>
            </ul>
        `,
        companyLink: "https://hashnode.com",
        image: hashnode,
        main: "companyLink"
    },
    {
        id: 1,
        heading: 'Saltiside Tech',
        subHeadings: ['Web Engineer: Jan 2017 to Oct 2017', 'Associate Web Engineer: Jul 2016 to Dec 2016'],
        description: `
            <p>
                Being part of the web engineering team, I contributed to the web application front-end and server-side web development, built on a Javascript stack <strong>(NodeJS &amp; React/Redux)</strong>. The workflow at Saltside involves taking a feature from design, to development, through testing and then deployment, where it impacts millions of users across the four markets - <a href="https://bikroy.com">Bikroy.com</a>, <a href="https://ikman.lk">ikman.lk</a> and <a href="https://tonaton.com">Tonaton.com</a>
                <br>
                <br>
                Some features and projects that I worked on here are:
            </p>
            <ul>
                <li>
                    Converting all listing pages to Google AMP pages
                </li>
                <li>
                    The Employer Dashboard. Employers using our sites had a tough time dealing with candidate applications. My team and I built a seamless experience for employers to view potential candidates, filter through the applications and also to shortlist candidates.
                </li>
                <li>
                    Automating the <i>listing fees</i> process for our sales teams
                </li>
                <li>
                    Improvements to the <i>Buy Now</i> feature that made using it a breeze both for end-users and for our internal sales teams.
                </li>
            </ul>
        `,
        image: saltside,
        companyLink: "https://saltside.se",
        main: "companyLink"
    },
];