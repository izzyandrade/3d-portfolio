import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  madeira,
  cheesecake,
  udok,
  wiseup,
  carrent,
  jobit,
  tripguide,
  threejs,
  dentsu,
  abercrombie
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'Mobile Developer',
    icon: mobile
  },
  {
    title: '3D Web Experiences',
    icon: backend
  },
  {
    title: 'Software Architect',
    icon: creator
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'docker',
    icon: docker
  }
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'MadeiraMadeira',
    icon: madeira,
    iconBg: '#E6DEDD',
    date: 'September 2017 - March 2020',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborated with the Business Intelligence team to create a semi-automated product analysis software',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Optimized the time our team took to register new products in over 10x',
      'Developed webpages and intelligent scripts(PHP Laravel, Python, Web Crawling, JQuery, HTML, CSS) for the automation of many different tasks related to the registration intelligence sector.'
    ]
  },
  {
    title: 'Fullstack Developer',
    company_name: 'UDOK',
    icon: udok,
    iconBg: '#383E56',
    date: 'June 2020 - October 2020',
    points: [
      'Developing and maintaining web and mobile applications using ReactJS, React Native, Redux, Typescript, Golang, PostgreSQL, and more...',
      'Implemented features for the project expansion using Agile methodologies to enhance delivery speed.',
      'Created several mobile screens and webpages for a healthcare system where patients could find doctors and schedule appointments.',
      'Participated in code reviews and provided constructive feedback to other developers.'
    ]
  },
  {
    title: 'Mobile Developer',
    company_name: 'Wiser',
    icon: wiseup,
    iconBg: '#E6DEDD',
    date: 'October 2020 - June 2021',
    points: [
      'Developing and maintaining mobile applications using React Native, Context API, Redux, TypeScript, Figma, and Agile development methods.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Acting in the development of the WiseUp Online application, the biggest online english school in Brazil',
      'Also worked on the creation of a affiliate platform for people interested in working with Wiser on selling their product.'
    ]
  },
  {
    title: 'Senior Mobile Developer',
    company_name: 'Dentsu World Services Brazil',
    icon: dentsu,
    iconBg: '#383E56',
    date: 'June 2021 - October 2021',
    points: [
      'Mobile Engineer at DWS Brazil, mainly using React Native, Typescript, Redux Thunk, among other technologies.',
      'Collaborated with people from all over the world in the expansion of our projects',
      'While I was with the company, I worked for the client Enterprise Holdings Inc. (EHI), on the development of two of the giant apps on car rental market (Alamo and Enterprise).',
      'This was the first time I joined an international company and had the opportunity to work with a fully remote team from all over the world.'
    ]
  },
  {
    title: 'Tech Lead',
    company_name: 'Cheesecake Labs',
    icon: cheesecake,
    iconBg: '#E6DEDD',
    date: 'October 2021 - November 2022',
    points: [
      'Working in the technical management and leadership of one of the development teams on Cheesecake Labs, which is responsible for the projects owned by various international and national clients.',
      'Acting alongside my team I can help on the decision making, seeking for tech solutions that are best suitable for problems faced and emerging demands, and also in the selection and maintenance of better strategies to guarantee the speed and quality of releases.',
      'Provided feedback and helped every member of my team, individually, to identify and seek their carreer goals, acting as a mentor for them',
      'Also worked with giants of the banking and finance sector in creating emerging Web3 and Blockchain solutions for their needs'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Abercrombie & Fitch',
    icon: abercrombie,
    iconBg: '#383E56',
    date: 'November 2022 - Present',
    points: [
      'Working with React, Apollo Client, GraphQL, Jest, micro-frontend architecture, and several other libraries and techniques.',
      'Working simultaneously with the team in the development of new features and maintenance for over 30 web projects that are used internally at Abercrombie administration.',
      'With Scrum being our Agile methodologie, I maintain a high score of tasks delivered, always keeping quality and efficiency.',
      'Once again working with people from all over the world, I am always looking for new ways to improve my skills and get new challenges.'
    ]
  }
];

const testimonials = [
  {
    testimonial:
      'What most catches my attention about Israel is his intensity, in addition, he communicates very well with everyone and manages to provide excellent customer service, valuing quality and clarity, he is really a complete professional!',
    name: 'Joabson de Souza',
    designation: 'Tech Lead',
    company: 'WiseUp Online',
    image:
      'https://media.licdn.com/dms/image/C4D03AQEmnIZbUb64Uw/profile-displayphoto-shrink_800_800/0/1633014066685?e=1691020800&v=beta&t=p8q03DPW-1NtlMF8Dc8xMPEvJCSFtFqqvUs3yuTl6b8'
  },
  {
    testimonial:
      'Great professional! I had the opportunity to work at a time when the project needed a helping hand to complete. Israel was quickly able to understand the whole project, being able to find and fix bugs very easily. He also has an excellent personality that helps to maintain a good atmosphere in the work environment, lively, curious, and reliable. The kind of person who is a pleasure to work with.',
    name: 'Bruno Dias',
    designation: 'Software Engineer',
    company: 'Méliuz',
    image:
      'https://media.licdn.com/dms/image/D4D03AQEY_PhUyxeqVQ/profile-displayphoto-shrink_800_800/0/1669913811260?e=1691020800&v=beta&t=zFsqjPfcPXMh8Nk66PwJn8rl4UDYoeGO5DUqdqCDXKs'
  },
  {
    testimonial:
      'Israel is a person always willing to learn and has the necessary humility to achieve surprising results if motivated, great professional, I recommend!',
    name: 'Victor Hugo Gabriel',
    designation: 'Senior Software Engineer',
    company: 'Boston Globe',
    image:
      'https://media.licdn.com/dms/image/D4D03AQFZC2CRIDOZIQ/profile-displayphoto-shrink_800_800/0/1673443739912?e=1691020800&v=beta&t=c7MnOsWuB4eJ3S8xc9l7DQqZv7du6crGM0lThboiFQc'
  }
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
];

export { services, technologies, experiences, testimonials, projects };
