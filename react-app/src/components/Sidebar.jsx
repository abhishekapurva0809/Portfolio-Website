import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Sidebar = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem('theme') !== 'light';
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const navItems = [
        { path: '/', icon: 'bx bx-home', label: 'HOME' },
        { path: '/about', icon: 'bx bx-info-circle', label: 'ABOUT' },
        { path: '/projects', icon: 'bx bx-folder', label: 'PROJECTS' },
        { path: '/skills', icon: 'bx bx-wrench', label: 'SKILLS & SERVICES' },
        { path: '/education', icon: 'bx bx-book-open', label: 'EDUCATION' },
        { path: '/contact', icon: 'bx bx-envelope', label: 'CONTACT' },
    ];

    return (
        <>
            {/* Mobile Navigation Toggle */}
            <button 
                id="mobileNavToggle"
                onClick={() => setIsOpen(!isOpen)}
                className="mobile-nav-toggle"
                style={{ display: isOpen ? 'flex' : '' }}
                aria-label="Toggle Menu"
            >
                <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i>
            </button>

            {/* Sidebar Overlay */}
            <div 
                id="sidebarOverlay"
                className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
            ></div>

            <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
                <button 
                    id="themeToggle"
                    onClick={toggleTheme}
                    className="theme-toggle"
                    title="Toggle Theme"
                >
                    <i className={darkMode ? 'bx bx-sun' : 'bx bx-moon'}></i>
                </button>

                <div className="profile-section">
                    <div className="profile-img-container">
                        <img src="/profileImageCircle.jpeg" alt="Abhishek Apurva" />
                    </div>
                    <h2 className="profile-name">ABHISHEK APURVA</h2>
                    <div className="profile-title">SOFTWARE ENGINEER</div>
                </div>

                <nav className="nav-menu">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            <i className={item.icon}></i>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="social-links">
                    <a href="https://linkedin.com/in/abhishekapurva" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className='bx bxl-linkedin-square'></i> LinkedIn
                    </a>
                    <a href="https://github.com/abhishekapurva0809" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className='bx bxl-github'></i> GitHub
                    </a>
                </div>

                <div className="availability">
                    <span className="availability-label" style={{ fontSize: '0.7rem', color: 'var(--sidebar-text)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px', display: 'block' }}>AVAILABILITY:</span>
                    <div className="availability-status">
                        <span className="status-dot"></span>
                        OPEN TO WORK
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
