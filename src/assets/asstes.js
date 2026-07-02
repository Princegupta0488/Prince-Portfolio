import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/prince2.jpeg'
import { FaProjectDiagram } from 'react-icons/fa'
import ets1 from '../assets/ets1.png'
import ets2 from '../assets/ets2.png'
import ets3 from '../assets/ets3.png'
import princePortfolio from '../assets/pp.png'


export const assets = {
    profileImg,
}


export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Python', 'Node.js', 'Express.js']
    },
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['React', 'Html', 'Css', 'Tailwindcss', 'Bootstrap']
    },
    {
        icon: FaDesktop,
        title: 'Database',
        technologies: ['MongoDB', 'MySQL']
    },
    {
        icon: FaCode ,
        title: 'Tools',
        technologies: ['Visual Studio Code', 'Git', 'Github', 'Postman', 'Jupyter Notebook']
    },
    {
        icon: FaMobile,
        title: 'Analytics',
        technologies: ['Microsoft Excel', 'PowerBI', 'Python Libraries For Data Science']
    },
]



export const projectData = [
    {
        title: 'Expense Tracker',
        description: 'A full-featured application that allows users to add, update, and view expenses by category, helping manage personal finances effectively.',
        images: [ets1, ets2, ets3],
        tech: ['Streamlit', 'Python', 'MySQL']
    },
    {
        title: 'Personal Portfolio Website',
        description: 'A responsive portfolio website to showcase my work and skills.',
        images: [princePortfolio, princePortfolio, princePortfolio],
        tech: ['React', 'Tailwindcss', 'Vite']
    },
    {
        title: 'Collaboration',
        description: 'A real-time collaborative platform for artists and designers to co-create digital art',
        images: [ets1, ets2, ets3],
        tech: ['React', 'Tailwindcss', 'Python']
    },
    {
        title: 'Abmbivista',
        description: 'A mood-based interior design suggestion tool that uses AI',
        images: [ets1, ets2, ets3],
        tech: ['Django', 'Tailwindcss', 'Python', 'Rest']
    }
]

export const profileData = [
    {
        icon: FaCode ,
        title: 'Language',
        technologies : ['Python', 'Java', 'JavaScript']
    },
    {
        icon: FaSchool ,
        title: 'Education',
        technologies : ['Bachelor in Computer Applications (BCA)']
    },
    {
        icon: FaProjectDiagram ,
        title: 'Projects',
        technologies : ['Built 4 projects']
    },
]