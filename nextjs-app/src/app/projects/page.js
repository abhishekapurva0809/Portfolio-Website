"use client";

import { useState } from 'react';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';

export default function Projects() {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Personal Portfolio Website',
            desc: 'A responsive, modern personal portfolio website built to showcase my skills, projects, and educational background. Features smooth scrolling, a sticky navigation sidebar, and dynamic filtering for projects. Designed with a clean, professional aesthetic and optimized for both desktop and mobile viewing.',
            img: '/portfolio_project1.png',
            category: 'website',
            tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']
        },
        {
            id: 2,
            title: 'Unify - The Chat Website',
            desc: 'Unify is a modern full-stack real-time messaging platform powered by React, Node.js, Express, MongoDB, and Socket.IO. It delivers seamless bidirectional communication with secure JWT authentication, typing indicators, active presence tracking, file/media sharing, and a responsive, beautiful UI built with Tailwind CSS.',
            img: '/unify_project.png',
            category: 'webapp',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'JWT'],
            link: 'https://unify-delta.vercel.app/'
        },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <PageWrapper>
            <div className="card">
                <div className="section-header">
                    <div className="section-icon"><i className='bx bx-desktop'></i></div>
                    <h2 className="section-title">Projects</h2>
                </div>

                <div className="filter-tabs">
                    <button
                        onClick={() => setFilter('all')}
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('webapp')}
                        className={`filter-btn ${filter === 'webapp' ? 'active' : ''}`}
                    >
                        Web App
                    </button>
                    <button
                        onClick={() => setFilter('website')}
                        className={`filter-btn ${filter === 'website' ? 'active' : ''}`}
                    >
                        Website
                    </button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card" data-category={project.category}>
                            <div className="project-img-container">
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-img-link"
                                    >
                                        <img src={project.img} alt={project.title} className="project-img" />
                                        <div className="project-img-overlay">
                                            <span className="overlay-btn">
                                                <i className='bx bx-link-external'></i> Live Demo
                                            </span>
                                        </div>
                                    </a>
                                ) : (
                                    <img src={project.img} alt={project.title} className="project-img" />
                                )}
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
}
