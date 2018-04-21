export const siteMeta = {
    title: 'Abinav Seelan | UI Engineer',
    favicon: 'https://user-images.githubusercontent.com/6417910/39085832-38879a66-45a6-11e8-84d5-1c8bb3dec14c.png',
    og: {
        description: "Hello! I'm Abinav Seelan, a UI engineer based out of BLR.",
        title: "Abinav Seelan | UI Engineer",
        site_name: "Abinav Seelan | UI Engineer",
        type: "website",
        url: "https://abinavseelan.com",
        image: {
            url: "https://user-images.githubusercontent.com/6417910/39085830-34161bd8-45a6-11e8-896b-dcfd9deccfe5.jpeg",
            alt: "Abinav Seelan | UI Engineer",
            type: "image/jpeg",
            width: "400",
            height: "400",
        },
        description: "Hello! I'm Abinav Seelan, a UI engineer based out of BLR.",
        locale: {
            main: "en_IN",
            alt: "en_US",
        }
    },
    twitter: {
        card: "summary",
        site: "@abinavseelan",
        creator: "@abinavseelan"
    },
    author: "Abinav Seelan",
    copyright: "Abinav Seelan, Copyright (c) 2018",
    keywords: [
        "Abinav Seelan",
        "Abinav Nithya Seelan",
        "Flipkart",
        "frontend engineer",
        "fullstack engineer",
        "web engineer",
        "bangalore",
        "saltside",
        "housing.com",
        "gr8fynd",
        "inquizit",
        "xelpmoc",
        "software engineer",
        "engineer",
        "ui engineer"
    ],
}

export const aboutMe = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Abinav Seelan",
    "jobTitle": "UI Engineer",
    "url": "https://abinavseelan.com",
    "sameAs": [
        "https://medium.com/@abinavseelan",
        "https://github.com/abinavseelan",
        "https://www.linkedin.com/in/abinavseelan",
        "https://twitter.com/abinavseelan",
        "https://www.facebook.com/abinav.seelan",
        "https://www.youtube.com/abinavseelan",
        "https://plus.google.com/+AbinavSeelan"
    ],
    "worksFor": {
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": "https://flipkart.com/"
    },
    "workLocation": {
        "@type": "City",
        "name": "Bangalore"
    },
    "gender": "male",
    "birthDate": "1994-09-23",
    "image": "https://abinavseelan.com/images/me.jpeg",
    "alumniOf": "PESIT Bangalore South Campus"
}

export const aboutWebsite = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "https://abinavseelan.com",
    "name": "Abinav Seelan | UI Engineer, Flipkart.com",
    "author": {
        "@type": "Person",
        "name": "Abinav Seelan"
    }
}

export const aboutCampVanilla = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Camp Vanilla",
    "logo": "https://cdn-images-1.medium.com/max/184/1*Ibh2GzBpGrbOiXRD9o5-IA@2x.png"
}

export const articleSEO = (author, publisher, articleInfo) => ({
    "@context": "http://schema.org",
    "@type": "Article",
    "headline": articleInfo.heading,
    "description": articleInfo.subHeadings[0],
    "datePublished": articleInfo.publishedDate,
    "author": author,
    "publisher": publisher,
    "image": articleInfo.heroImage,
    "dateModified": articleInfo.publishedDate,
    "mainEntityOfPage": articleInfo.articleLink,
    "url": articleInfo.articleLink,
});