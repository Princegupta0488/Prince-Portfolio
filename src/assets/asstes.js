import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/prince2.jpeg'
import { FaProjectDiagram } from 'react-icons/fa'
import princep from '../assets/princep.png'
import etsf from '../assets/etsf.png'



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
        description: 'Tracked daily expenses and visualized date-wise total spending with interactive bar graphs and reports.',
        images: [etsf],
        tech: ['Streamlit', 'Python', 'MySQL', 'FastAPI']
    },
    {
        title: 'Personal Portfolio Website',
        description: 'Built a responsive portfolio with an attractive design to showcase my work and technical skills.',
        images: [princep],
        tech: ['React', 'Tailwindcss', 'Vite']
    },
    {
        title: 'ShopEase - E-Commerce Website',
        description: 'A real-time collaborative platform for artists and designers to co-create digital art',
        images: [],
        tech: ['React', 'Tailwindcss', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
        title: 'StayEase - Find & Book Your Perfect Stay',
        description: 'A mood-based interior design suggestion tool that uses AI',
        images: [],
        tech: ['Bootstrap', 'Node.js', 'Express.js', 'MongoDB']
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