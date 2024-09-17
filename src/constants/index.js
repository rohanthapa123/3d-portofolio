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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import ecommerce from "../assets/ecommerce.png";
import coaching from "../assets/coaching.png";
import admin from "../assets/admin.png";
import srmss from "../assets/srmss.png";
import nms from "../assets/nms.png";
import { createRoutesFromChildren } from "react-router-dom";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const loggedInNoteNavLinks = [
  {
    id: "",
    title: "Logout",
    method: true,
  },
  {
    id: "admindashboard",
    title: "Dashboard",
  },
];

export const notLoggedInNoteNavLinks = [
  {
    id: "login",
    title: "Login",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Student",
    company_name: "Tribhuvan University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2022 - 2026",
    points: [
      "Bachelor of Computer Application",
      "Patan Multiple Campus",
      "Lalitpur-Nepal",
    ],
  },
];

const testimonials = [
  {
    testimonial: "...",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Student Result Management System",
    description:
      "Student Result Management System is a web-based application that designed and developed for teacher and students to maintains academic records and results that occur at any educational institute generating marksheet.",
    tags: [
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
    ],
    image: srmss,
    source_code_link:
      "https://github.com/rohanthapa123/Student_Result_management_system",
    demo: "https://srmss.netlify.app/",
  },
  {
    name: "Marriage Coacing",
    description:
      "Web application that enables users to find the coaching for marriage and relation guide, view estimated for healthy relationship, and locate available marriage compatible partner based on their current location and need.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "email-js",
        color: "green-text-gradient",
      },
    ],
    image: coaching,
    source_code_link:
      "https://github.com/rohanthapa123/project_two/tree/master",
    demo: "https://perfect-relation-solution.netlify.app",
  },
  {
    name: "NoteVault- Note Management System",
    description:
      "Web-based platform that allows users to do view different notes in the form of pdf document and download it.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: nms,
    source_code_link: "https://github.com/rohanthapa123/note-management-system",
    demo: "https://rohanthapa.com.np/notes/",
  },
  {
    name: "Ecommerce Store",
    description:
      "Web-based platform that allows users to do online Shopping,buy  and manage various products from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/rohanthapa123/EcommerseStore",
    demo: "https://rohanecommerce.netlify.app/",
  },
  {
    name: "Admin Panel",
    description:
      "A ecommerce Admin pannel that have products, user, category and email to show which can be edited deleted or added.There are further tools like Rich Text editor,Color Picker and Calender. ",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/rohanthapa123/adminpanel",
    demo: "https://dancing-kulfi-78eb0e.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
