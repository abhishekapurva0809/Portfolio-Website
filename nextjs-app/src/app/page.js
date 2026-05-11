import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';

export default function Home() {
    return (
        <PageWrapper>
            <div className="card">
                <div className="hero">
                    <div className="hero-content">
                        <span className="greeting">HELLO, I&apos;M</span>
                        <h1 className="hero-title">Abhishek<br/><span>Apurva</span></h1>
                        <div className="hero-subtitle">Software Engineer</div>
                        <p className="hero-description">
                            a passionate developer and first-year student. I love building websites and exploring new technologies.
                            Currently, I am focusing on full-stack web development, learning modern tools, and creating projects to improve my skills.
                        </p>
                        <div className="hero-actions">
                            <Link href="/projects" className="btn btn-primary">
                                View My Work
                            </Link>
                            <Link href="/contact" className="btn btn-outline">
                                Contact Me
                            </Link>
                        </div>
                    </div>
                    
                    <div className="hero-img">
                        <div className="hero-img-container">
                            <img src="/profile01.jpeg" alt="Abhishek Apurva" style={{ objectPosition: 'top' }} />
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}
