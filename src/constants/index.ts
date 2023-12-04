// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  tailwindcss,
  threads,
  typescript,
  whatsapp,
} from '../assets/icons'
import { optisol } from '../assets/images'
export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },

  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
]

export const experiences = [
  {
    title: 'Web Developer · Internship',
    company_name: 'OptiSol Business Solutions',
    icon: optisol,
    iconBg: '#F5F5F5',
    date: 'Jun 2023 - Sep 2023 · 3 mos',
    points: [
      'Developed a web application that allows users to subscribe to their favorite comic books and receive notifications when new issues are released.',
      'Created a full-stack  chat application that allows users to send and receive messages in real time.',
    ],
  },
]

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: whatsapp,
    link: 'https://wa.me/917397077276',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/sparkz-technology',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'www.linkedin.com/in/sutharsang',
  },
]

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Comic Subscription',
    description:
      'Developed a web application that allows users to subscribe to their favorite comic books and receive notifications when new issues are released.',
    link: 'https://github.com/sparkz-technology/comic_subscription.git',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: ' Chat App',
    description:
      'Created a full-stack  chat application that allows users to send and receive messages in real time.',
    link: 'https://chat-app-zeta-lyart.vercel.app/login',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Full Stack Instagram Clone',
    description:
      'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/sparkz-technology/snap.git',
  },
]
