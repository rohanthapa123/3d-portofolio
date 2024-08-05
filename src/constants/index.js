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
  
  import ecommerce from '../assets/ecommerce.png';
  import coaching from '../assets/coaching.png';
  import admin from '../assets/admin.png';
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

  export const noteNavLinks = [
    {
      id: "login",
      title: "Login",
    },
  ]
  
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
    {
      title: "UI/ UX",
      icon: creator,
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
      title: "React.js Developer",
      company_name: "coming soom",
      icon: starbucks,
      iconBg: "#383E56",
      date: "abcd XXXX - abcd XXXX",
      points: [
        "Coming Soom",
        "Coming Soon",
        "Coming Soon",
        "Coming Soon",
      ],
    },
    {
      title: "Coming Soon",
      company_name: "Coming soon",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "abcd XXXX - abcd XXXX",
      points: [
        "Coming Soom",
        "Coming Soon",
        "Coming Soon",
        "Coming Soon",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Coming soon",
      icon: shopify,
      iconBg: "#383E56",
      date: "abcd XXXX - abcd XXXX",
      points: [
        "Coming Soom",
        "Coming Soon",
        "Coming Soon",
        "Coming Soon",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Coming soon",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "abcd XXXX - abcd XXXX",
      points: [
        "Coming Soom",
        "Coming Soon",
        "Coming Soon",
        "Coming Soon",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "...",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "...",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "...",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce Store",
      description:
        "Web-based platform that allows users to do online Shopping,buy  and manage various products from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/rohanthapa123/EcommerseStore",
      demo:"https://rohanecommerce.netlify.app/"
    },
    {
      name: "Marriage Coacing",
      description:
        "Web application that enables users to find the coaching for marriage and relation guide, view estimated for healthy relationship, and locate available marriage compatible partner based on their current location and need.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "email-js",
          color: "green-text-gradient",
        },
        
      ],
      image: coaching,
      source_code_link: "https://github.com/rohanthapa123/project_two/tree/master",
      demo:"https://perfect-relation-solution.netlify.app"
    },
    {
      name: "Admin Panel",
      description:
        "A ecommerce Admin pannel that have products, user, category and email to show which can be edited deleted or added.There are further tools like Rich Text editor,Color Picker and Calender. ",
      tags: [
        {
          name: "React Js",
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
      demo :"https://dancing-kulfi-78eb0e.netlify.app"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };