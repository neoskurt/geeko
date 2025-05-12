import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const FRONTEND_SKILL = [
  {
    skill_name: "Vue.js",
    image: "vue.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "github.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const SKILL_DATA = [
  ...FRONTEND_SKILL,
  ...BACKEND_SKILL,
  ...FULLSTACK_SKILL,
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/company/geekoweb",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/geekoweb",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com/geekoweb",
  },
] as const;

export const PROJECTS = [
  {
    title: "Application E-commerce Vue.js",
    description:
      "Une application e-commerce moderne développée avec Vue.js, offrant une expérience utilisateur fluide et intuitive. Intégration de paiements sécurisés, gestion des stocks en temps réel et interface responsive.",
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Application Mobile React Native",
    description:
      "Application mobile cross-platform développée avec React Native pour une entreprise de services. Fonctionnalités de géolocalisation, notifications push et synchronisation en temps réel des données.",
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Plateforme Web Full-Stack",
    description:
      "Plateforme web complète développée avec Node.js et React, incluant un système d'authentification, un tableau de bord administrateur et une API RESTful. Optimisée pour les performances et la scalabilité.",
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Communauté",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/geekoweb",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/company/geekoweb",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com/geekoweb",
      },
    ],
  },
  {
    title: "Ressources",
    data: [
      {
        name: "Blog",
        icon: null,
        link: "https://blog.geekoweb.com",
      },
      {
        name: "Documentation",
        icon: null,
        link: "https://docs.geekoweb.com",
      },
      {
        name: "Support",
        icon: null,
        link: "mailto:support@geekoweb.com",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Devenir Client",
        icon: null,
        link: "https://geekoweb.com/contact",
      },
      {
        name: "À propos",
        icon: null,
        link: "https://geekoweb.com/about",
      },
      {
        name: "Nous contacter",
        icon: null,
        link: "mailto:contact@geekoweb.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "À propos",
    link: "#about-me",
  },
  {
    title: "Compétences",
    link: "#skills",
  },
  {
    title: "Projets",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/geekoweb/portfolio",
};
