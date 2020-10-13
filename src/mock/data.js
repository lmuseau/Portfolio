import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Leonard | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio of Leonard Museau', // e.g: Welcome to my website
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
  paragraphOne:
    "Hello! I'm a Missouri-based full stack developer. I have 2.5 years of experience working for a small company that specializes in data integrations to improve healthcare providers and payers. I also enjoy working on open source projects and developing websites for different clients.",
  paragraphTwo:
    'I have a diverse set of skills ranging from AngularJS and ReactJS with Javascript + HTML + CSS to using RESTful APIs with NodeJS and MySQL. I also have some exposure to AWS, Docker, Kubenetes, and so on.',
  paragraphThree:
    'My LinkedIn has a resume so you can view the full list of technologies I have interacted with.',
  resume: 'https://www.linkedin.com/in/leonard-museau/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fa-screenshot.png',
    title: 'St. Robert First Assembly of God Website',
    info: 'This is a church website built using ReactJS. It is currently in development.',
    info2: 'Back end technologies will be implemented soon.',
    url: 'https://quizzical-williams-74d0e2.netlify.app/',
    repo: 'https://github.com/lmuseau/st-robert-first-assembly', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fa-snake-screenshot.png',
    title: 'Snake Game',
    info: 'This is my implementation of a popular game, Snake, built using only React JS.',
    info2: "This project showcases my understanding of React's component class and their API's.",
    url: 'https://musing-jepsen-3c242a.netlify.app',
    repo: 'https://github.com/lmuseau/snake-game', // if no repo, the button will not show up
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
