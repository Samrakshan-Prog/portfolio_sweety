import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  nodejs,
  git,
  csharp,
  java,
  python,
  php,
  cpp,
  f2h,
  dcc,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Testing',
    icon: prototyping,
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
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'git',
    icon: git,
  },

  {
    name:"csharp",
    icon: csharp,
  },
  {
    name:"java",
    icon: java,
  },
  {
    name:"python",
    icon: python,
  },
  {
    name:"php",
    icon: php,
  },
  {
    name:"cpp",
    icon: cpp,
  },
];

const experiences = [
  {
    title: 'HR Consultancy',
    company_name: 'Logos Magnus company',
    icon: dcc,
    iconBg: '#333333',
    date: 'Present - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Farm2House',
    description: 'Direct Farmer to Consumer Selling Platform',
    tags: [
      {
        name: 'c#',
        color: 'blue-text-gradient',
      },
      {
        name: 'db',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: f2h,
    repo: 'https://github.com/',
    demo: 'https://youtube.com',
  }, 
];

export { services, technologies, experiences, projects };
