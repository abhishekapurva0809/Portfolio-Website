const Skills = () => {
    return (
        <>
        <div className="card">
            <div className="section-header">
                <div className="section-icon" style={{ background: 'none', borderRadius: 0, marginRight: '15px' }}>
                    <i className='bx bxl-sketch' style={{ color: 'var(--primary-color)' }}></i>
                </div>
                <h2 className="section-title">Skills</h2>
            </div>

            <div className="skills-container">

                <div className="skill-category">
                    <h3 className="skill-category-title">Languages</h3>
                    <div className="skills-list">
                        <div className="skill-item"><i className='bx bx-code-alt'></i> C++</div>
                        <div className="skill-item"><i className='bx bxl-python'></i> Python</div>
                        <div className="skill-item"><i className='bx bxl-html5'></i> HTML</div>
                        <div className="skill-item"><i className='bx bxl-css3'></i> CSS</div>
                        <div className="skill-item"><i className='bx bxl-javascript'></i> Javascript</div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3 className="skill-category-title">Frameworks</h3>
                    <div className="skills-list">
                        <div className="skill-item"><i className='bx bxl-react'></i> React</div>
                        <div className="skill-item"><i className='bx bxl-stripe'></i> Next.js</div>
                        <div className="skill-item"><i className='bx bx-code-curly'></i> Express.js</div>
                        <div className="skill-item"><i className='bx bxl-nodejs'></i> Node.js</div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3 className="skill-category-title">Databases</h3>
                    <div className="skills-list">
                        <div className="skill-item"><i className='bx bxl-mongodb'></i> MongoDB</div>
                        <div className="skill-item"><i className='bx bx-data'></i> MySQL</div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3 className="skill-category-title">Tools</h3>
                    <div className="skills-list">
                        <div className="skill-item"><i className='bx bxl-git'></i> Git</div>
                        <div className="skill-item"><i className='bx bxl-github'></i> Github</div>
                        <div className="skill-item"><i className='bx bx-code-block'></i> VS Code</div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default Skills;
