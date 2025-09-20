import {
  css,
  cv,
  figma,
  firebase,
  git,
  githubContacts,
  html,
  instagramContacts,
  javascript,
  khpi,
  marvel,
  mobile,
  nest,
  netronic,
  next,
  optiflowCertificate,
  pulse,
  reactjs,
  redux,
  sigma,
  sneaks,
  sniffCertificate,
  step,
  table,
  tailwind,
  telegramContacts,
  threejs,
  typescript,
  udemy,
  viso,
  web,
  xopen,
} from '../assets';

export const navLinks = [
  {
    id: 'experience',
    title: 'navbar.links.experience',
  },
  {
    id: 'works',
    title: 'navbar.links.works',
  },
  {
    id: 'contact',
    title: 'navbar.links.contact',
  },
  {
    id: 'cv',
    title: 'navbar.links.cv',
    href: cv,
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'TypeScript',
    icon: typescript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: next,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'Nest JS',
    icon: nest,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'experience.timeline.elements.0.title',
    company_name: 'experience.timeline.elements.0.company_name',
    icon: step,
    iconBg: '#fff',
    date: 'experience.timeline.elements.0.date',
    points: [
      'experience.timeline.elements.0.points.0',
      'experience.timeline.elements.0.points.1',
      'experience.timeline.elements.0.points.2',
      'experience.timeline.elements.0.points.3',
    ],
  },
  {
    title: 'experience.timeline.elements.1.title',
    company_name: 'experience.timeline.elements.1.company_name',
    icon: udemy,
    iconBg: '#fff',
    date: 'experience.timeline.elements.1.date',
    points: [
      'experience.timeline.elements.1.points.0',
      'experience.timeline.elements.1.points.1',
      'experience.timeline.elements.1.points.2',
      'experience.timeline.elements.1.points.3',
    ],
  },
  {
    title: 'experience.timeline.elements.2.title',
    company_name: 'experience.timeline.elements.2.company_name',
    icon: khpi,
    iconBg: '#9f1c20',
    date: 'experience.timeline.elements.2.date',
    points: [
      'experience.timeline.elements.2.points.0',
      'experience.timeline.elements.2.points.1',
      'experience.timeline.elements.2.points.2',
      'experience.timeline.elements.2.points.3',
    ],
  },
  {
    title: 'experience.timeline.elements.3.title',
    company_name: 'experience.timeline.elements.3.company_name',
    icon: sigma,
    iconBg: '#fff',
    date: 'experience.timeline.elements.3.date',
    points: [
      'experience.timeline.elements.3.points.0',
      'experience.timeline.elements.3.points.1',
      'experience.timeline.elements.3.points.2',
      'experience.timeline.elements.3.points.3',
      'experience.timeline.elements.3.points.4',
    ],
    github: 'https://github.com/Sniff-project',
    certificate: sniffCertificate,
  },
  {
    title: 'experience.timeline.elements.4.title',
    company_name: 'experience.timeline.elements.4.company_name',
    icon: netronic,
    iconBg: '#000',
    date: 'experience.timeline.elements.4.date',
    points: [
      'experience.timeline.elements.4.points.0',
      'experience.timeline.elements.4.points.1',
      'experience.timeline.elements.4.points.2',
      'experience.timeline.elements.4.points.3',
      'experience.timeline.elements.4.points.4',
      'experience.timeline.elements.4.points.5',
    ],
    github: 'https://github.com/Skiftech-project',
    certificate: optiflowCertificate,
  },
  {
    title: 'experience.timeline.elements.5.title',
    company_name: 'experience.timeline.elements.5.company_name',
    icon: viso,
    iconBg: '#fff',
    date: 'experience.timeline.elements.5.date',
    points: [
      'experience.timeline.elements.5.points.0',
      'experience.timeline.elements.5.points.1',
      'experience.timeline.elements.5.points.2',
      'experience.timeline.elements.5.points.3',
    ],
  },
];

const projects = [
  {
    name: 'Marvel Portal',
    description: 'works.projects.0.description',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
    ],
    image: marvel,
    source_code_link: 'https://github.com/ulyagram77/Marvel-Portal-React',
    demo_link: 'https://marvel-portal-react-ten.vercel.app/',
  },
  {
    name: 'Workers Table',
    description: 'works.projects.1.description',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'CRUD',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: table,
    source_code_link: 'https://github.com/ulyagram77/Workers-Table-React',
    demo_link: 'https://workers-table-react.vercel.app/',
  },
  {
    name: 'Sneaks Store',
    description: 'works.projects.2.description',
    tags: [
      {
        name: 'vanilla-js',
        color: 'yellow-text-gradient',
      },
      {
        name: 'AJAX',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: sneaks,
    source_code_link: 'https://github.com/ulyagram77/Sneaks_Landing',
    demo_link: 'https://ulyagram77.github.io/Sneaks_Landing/',
  },
  {
    name: 'X-OPEN',
    description: 'works.projects.3.description',
    tags: [
      {
        name: 'vanilla-js',
        color: 'yellow-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: xopen,
    source_code_link: 'https://github.com/ulyagram77/X-OPEN_Landing',
    demo_link: 'https://ulyagram77.github.io/X-OPEN_Landing/',
  },
  {
    name: 'Pulse Store',
    description: 'works.projects.4.description',
    tags: [
      {
        name: 'vanilla-js',
        color: 'yellow-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: pulse,
    source_code_link: 'https://github.com/ulyagram77/Pulse_Landing',
    demo_link: 'https://ulyagram77.github.io/Pulse_Landing/',
  },
];

const validationShema = {
  name: {
    isEmpty: { message: 'validation.required' },
    min: { value: 2, message: 'validation.name' },
  },
  email: {
    isEmpty: { message: 'validation.required' },
    email: { message: 'validation.email' },
  },
  message: { isEmpty: { message: 'validation.required' } },
};

const socialIcons = [
  { icon: githubContacts, link: 'https://github.com/ulyagram77' },
  { icon: telegramContacts, link: 'https://t.me/Flaming77' },
  { icon: instagramContacts, link: 'https://www.instagram.com/ulyagram77' },
];

export {
  services,
  technologies,
  experiences,
  projects,
  socialIcons,
  validationShema,
};
