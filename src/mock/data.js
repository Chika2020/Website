import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: './file.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'titelpage.jpg',
    title: 'Personal Website',
    info: 'Developed with React',
    info2: '',
    url: '#!',
    repo: 'https://github.com/Chika2020/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Stay Tuned... More Projects on the way!',
    img: 'work.jpg',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/Chika2020/', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'chikaodiri.nwachukwu@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chikaodiri-nwachukwu-1234n/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Chika2020',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

// NAVBAR DATA
export const navbarData = {
  brand: 'CN',
  links: [
    { id: nanoid(), label: 'About', to: 'about' },
    { id: nanoid(), label: 'Projects', to: 'projects' },
    { id: nanoid(), label: 'Skills', to: 'skills' },
    { id: nanoid(), label: 'GitHub', to: 'github' },
    { id: nanoid(), label: 'Contact', to: 'contact' },
  ],
};

// SKILLS DATA
export const skillsData = {
  title: 'Skills',
  skills: [
    { id: nanoid(), name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { id: nanoid(), name: 'React', icon: 'devicon-react-original' },
    { id: nanoid(), name: 'Python', icon: 'devicon-python-plain' },
    { id: nanoid(), name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { id: nanoid(), name: 'HTML5', icon: 'devicon-html5-plain' },
    { id: nanoid(), name: 'CSS3', icon: 'devicon-css3-plain' },
    { id: nanoid(), name: 'Git', icon: 'devicon-git-plain' },
    { id: nanoid(), name: 'GitHub', icon: 'devicon-github-original' },
  ],
};

// GITHUB STATS DATA
export const githubData = {
  username: 'Chika2020',
  showStats: true,
};
