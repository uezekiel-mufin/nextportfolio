import React from 'react';
import { AiFillHtml5, AiFillCodeSandboxSquare, AiFillGithub } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const skillsData = [
	{ skill: 'HTML', experience: '3 years', icon: AiFillHtml5, category: 'Frontend' },
	{ skill: 'CSS', experience: '3 years', icon: FaCss3Alt, category: 'Frontend' },
	{ skill: 'JavaScript', experience: '2 years', icon: AiFillCodeSandboxSquare, category: 'Frontend' },
	{ skill: 'React', experience: '1 year', icon: FaReact, category: 'Frontend' },
	{ skill: 'Node.js', experience: '1 year', icon: FaNodeJs, category: 'Backend' },
	{ skill: 'MySQL', experience: '2 years', icon: null, category: 'Database' },
	{ skill: 'MongoDB', experience: '1 year', icon: null, category: 'Database' },
	{ skill: 'Express.js', experience: '1 year', icon: null, category: 'Backend' },
	{ skill: 'Git', experience: '2 years', icon: AiFillGithub, category: 'Dev Tools' },
	// Add more skills here
];

const SkillsTable = () => {
	const uniqueCategories = [...new Set(skillsData.map((skill) => skill.category))];

	return <section id='about' className='mt-6'></section>;
};

export default SkillsTable;
