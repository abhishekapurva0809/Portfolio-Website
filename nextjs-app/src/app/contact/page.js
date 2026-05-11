import PageWrapper from '@/components/PageWrapper';

export default function Contact() {
    return (
        <PageWrapper>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="section-header" style={{ width: '100%' }}>
                    <div className="section-icon"><i className='bx bx-send'></i></div>
                    <h2 className="section-title">Get in Touch</h2>
                </div>

                <div className="contact-container" style={{ marginTop: '50px' }}>
                    <h3 className="contact-title">Let&apos;s connect and build something awesome together.</h3>
                    <p className="contact-desc">Feel free to reach out for collaborations, freelance projects, or just an interesting chat.</p>

                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className='bx bx-envelope'></i>
                            </div>
                            <span className="contact-label">Email</span>
                            <a href="mailto:abhishekapurva09.08@gmail.com" className="contact-value" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>abhishekapurva09.08@gmail.com</a>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <span className="contact-label">Location</span>
                            <span className="contact-value">Warangal, Telangana</span>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}
