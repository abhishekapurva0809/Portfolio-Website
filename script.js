document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check if user has a preference saved
    const currentTheme = localStorage.getItem('theme');
    // Note: Anti-flash script in <head> handles initial class assignment
    
    // Sync the toggle button icon with the current theme
    if (html.classList.contains('dark')) {
        if(themeToggle) themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
    } else {
        if(themeToggle) themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
    }

    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            if (html.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
            }
        });
    }

    // Filter projects if on projects page
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Mobile Sidebar Toggle
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function toggleSidebar() {
        if (!sidebar || !sidebarOverlay) return;
        
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        
        // Change icon to 'X' when open
        const icon = mobileNavToggle.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    }

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', toggleSidebar);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', toggleSidebar);
    }
});
