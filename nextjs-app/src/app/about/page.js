import PageWrapper from '@/components/PageWrapper';

export default function About() {
    return (
        <PageWrapper>
            <div className="card">
                <div className="section-header">
                    <div className="section-icon"><i className='bx bx-user'></i></div>
                    <h2 className="section-title">About Me</h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <h3 className="about-title">I&apos;m Abhishek Apurva,</h3>
                        <p>
                            a first-year B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning. I am passionate about technology, software development, and building real-world applications.
                        </p>
                        <p>
                            Currently, I am focusing on web development and learning modern technologies such as JavaScript, React, Next.js, Node.js, and Express.js. I enjoy solving problems, building projects, and exploring new tools that help create efficient and scalable applications.
                        </p>
                        <p>
                            I am also interested in open-source development and continuously improving my programming skills through projects and hands-on practice. My goal is to become a skilled software developer and contribute to impactful technology solutions.
                        </p>

                        <div className="about-details">
                            <div className="detail-item">
                                <span className="detail-label">Residence:</span>
                                <span className="detail-value">India</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Address:</span>
                                <span className="detail-value">Warangal, Telangana</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-img">
                        <img src="/profile01.jpeg" alt="Abhishek Apurva Photo" />
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}
