import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/prince2.jpeg'
import { FaProjectDiagram } from 'react-icons/fa'
import expenseTracker from '../assets/ets.png'



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
        description: 'Manage your daily income and expenses',
        image: expenseTracker, expenseTracker, expenseTracker,
        tech: ['Streamlit', 'Python', 'MySQL']
    },
    {
        title: 'FurniCraft',
        description: 'A modern furniture e-commerce platform offering customizable home and office furniture .',
        image: expenseTracker, expenseTracker, expenseTracker,
        tech: ['React', 'Tailwindcss', 'Python']
    },
    {
        title: 'Collaboration',
        description: 'A real-time collaborative platform for artists and designers to co-create digital art',
        image: expenseTracker, expenseTracker, expenseTracker,
        tech: ['React', 'Tailwindcss', 'Python']
    },
    {
        title: 'Abmbivista',
        description: 'A mood-based interior design suggestion tool that uses AI',
        image: expenseTracker, expenseTracker, expenseTracker,
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