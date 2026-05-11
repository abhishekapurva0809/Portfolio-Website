import { useState } from 'react';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Personal Portfolio Website",
            category: "webapp",
            image: "/portfolio_project1.png",
            description: "A responsive, modern personal portfolio website built to showcase my skills, projects, and educational background. Features smooth scrolling, a sticky navigation sidebar, and dynamic filtering for projects. Designed with a clean, professional aesthetic and optimized for both desktop and mobile viewing.",
            tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"]
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <>
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
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <div key={project.id} className="project-card" data-category={project.category}>
                        <div className="project-img-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-img"
                            />
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Projects;
