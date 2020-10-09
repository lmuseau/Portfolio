import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Leonard | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome! I am',
  name: 'Leonard Museau',
  subtitle: 'Full Stack Developer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hello! I'm a Missouri-based full stack developer. I have 2.5 years of experience working for a small company that specializes data integrations to improve healthcare providers and payers. I also enjoy working on open source projects and developing websites for different clients.",
  paragraphTwo: "I have a diverse set of skills ranging from AngularJS and ReactJS with Javascript + HTML + CSS to using RESTful APIs with NodeJS and MySQL. I also have some exposure to AWS, Docker, Kubenetes, and so on.",
  paragraphThree: 'Check out my resume below for a full list of technologies I have interacted with.',
  resume: 'https://www.linkedin.com/in/leonard-museau/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACt6sL0BaoA1v8_XdDNn1fVbK5UStngTbO4,1600379278992)/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fa-screenshot.png',
    title: 'St. Robert First Assembly of God Website',
    info: 'My old home church website built using ReactJS. It is currently being developed right now.',
    info2: "Will release the full url to the site when it gets deployed.",
    url: 'https://github.com/lmuseau/st-robert-first-assembly',
    repo: 'https://github.com/lmuseau/st-robert-first-assembly', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "I'd be happy to connect and work with you!",
  btn: "Let's Chat",
  email: 'lmuseau@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/leonardmuseau/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/leonardmuseau/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/leonard-museau/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lmuseau/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
