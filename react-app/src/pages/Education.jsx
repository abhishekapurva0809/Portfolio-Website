const Education = () => {
    return (
        <>
        <div className="card">
            <div className="section-header">
                <div className="section-icon"><i className='bx bx-book-reader'></i></div>
                <h2 className="section-title">Education & Experience</h2>
            </div>

            <div className="timeline">

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h3 className="timeline-title">B.Tech in Computer Science (AI & ML)</h3>
                    <div className="timeline-subtitle">SR University | 2025 - 2029</div>
                    <div className="timeline-content">
                        <p>Currently pursuing first-year coursework specializing in Artificial Intelligence and Machine Learning.</p>
                        <ul>
                            <li>Focusing on Data Structures and Algorithms</li>
                            <li>Building foundational knowledge in Web Development</li>
                            <li>Active participation in coding clubs and hackathons</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h3 className="timeline-title">Web Development</h3>
                    <div className="timeline-subtitle">Apna College | November 2025 - March 2026</div>
                    <div className="timeline-content">
                        <p>Completed a comprehensive Web Development course at Apna College, mastering both front-end and back-end technologies.</p>
                        <ul>
                            <li>Built responsive and interactive websites using HTML, CSS, and JavaScript.</li>
                            <li>Developed dynamic user interfaces with React.js for modern web applications.</li>
                            <li>Designed and implemented RESTful APIs using Node.js and Express.js.</li>
                            <li>Managed and structured data efficiently with MongoDB and SQL databases.</li>
                            <li>Gained hands-on experience in creating full-stack applications using the MERN stack.</li>
                            <li>Applied best practices in responsive design, cross-browser compatibility, and performance optimization.</li>
                            <li>Strengthened problem-solving and debugging skills through real-world projects.</li>
                            <li>Learned version control and collaboration using Git and GitHub.</li>
                            <li>Deployed web applications using modern platforms such as Vercel and GitHub Pages.</li>
                        </ul>
                        <div style={{ marginTop: '15px' }}>
                            <a href="/web_dev_certificate.jpeg" className="btn btn-primary" style={{ padding: '8px 15px', fontSize: '0.9rem' }} download>
                                <i className='bx bx-award' style={{ marginRight: '5px' }}></i> Download Certificate
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-start' }}>
                <a href="/Abhishek_Apurva___Resume.pdf" className="btn btn-primary" download>
                    <i className='bx bx-download' style={{ marginRight: '5px' }}></i> Download Resume
                </a>
            </div>
        </div>
        </>
    );
};

export default Education;
