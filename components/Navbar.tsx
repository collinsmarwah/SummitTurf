import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    const navigate = useNavigate();
    const location = useLocation();
    
    const logoUrl = "https://scontent.xx.fbcdn.net/v/t39.30808-1/298879971_466300862171515_5501553963375494221_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=yaUVK73uw08Q7kNvwG6Gzwx&_nc_oc=Adn2IlL_e8IE5BnKdxJpf60WMsXDN5mvqTuQh_nywgh7elzvAzYSQHZGHoqdvZLfI58&_nc_zt=24&_nc_ht=scontent.xx&_nc_gid=LI7Axo_ew1ggZ71H10VPjQ&oh=00_AflXodjewN2JcseZCQnqD43AIojs4QJ1WceKv842af9xYQ&oe=6946CC61";

    // Handle theme changes
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Service Areas', path: '/areas' },
        { name: 'About Us', path: '/about' },
        { name: 'Employment', path: '/employment' },
    ];

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border-dark dark:border-[#2c4823] bg-white/95 dark:bg-background-dark/95 backdrop-blur-md transition-colors duration-300">
            <div className="px-4 md:px-10 py-4 flex items-center justify-between max-w-7xl mx-auto relative z-50">
                <Link to="/" className="flex items-center gap-3 text-slate-900 dark:text-white group cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                    <img 
                        src={logoUrl} 
                        alt="Summit Turf Services" 
                        className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-primary/30 group-hover:scale-110 transition-transform duration-300 object-cover" 
                    />
                    <div className="flex flex-col">
                        <h2 className="text-lg md:text-xl font-bold leading-none tracking-tight">Summit Turf</h2>
                        <span className="text-primary text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">Services</span>
                    </div>
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.path}
                            className={`text-sm font-bold transition-colors duration-300 ${location.pathname === link.path ? 'text-primary' : 'text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white'}`} 
                            to={link.path}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link className={`text-sm font-bold transition-colors duration-300 ${location.pathname === '/contact' ? 'text-primary' : 'text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white'}`} to="/contact">Contact</Link>
                </div>

                {/* Desktop CTA & Theme Toggle */}
                <div className="hidden lg:flex items-center gap-4">
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-gray-300 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        <span className="material-symbols-outlined">
                            {isDarkMode ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    <button 
                        onClick={() => navigate('/contact?type=quote')}
                        className="cursor-pointer flex items-center justify-center rounded-full h-11 px-7 bg-primary text-background-dark text-sm font-bold hover:bg-primary-hover hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(70,236,19,0.2)]"
                    >
                        Get a Quote
                    </button>
                </div>

                {/* Mobile Controls */}
                <div className="flex items-center gap-2 lg:hidden">
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-900 dark:text-white transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        <span className="material-symbols-outlined">
                            {isDarkMode ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    <button 
                        className="relative z-50 w-12 h-12 flex items-center justify-center text-slate-900 dark:text-white hover:text-primary transition-colors rounded-full focus:outline-none focus:bg-white/5 active:scale-95 touch-manipulation"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        <div className="flex flex-col justify-center items-center w-6 h-6 gap-[5px] relative">
                            <span 
                                className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out absolute ${
                                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                                }`} 
                            />
                            <span 
                                className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out absolute top-3 ${
                                    isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                                }`} 
                            />
                            <span 
                                className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out absolute ${
                                    isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                                }`} 
                            />
                        </div>
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 w-full h-screen bg-white dark:bg-background-dark/98 backdrop-blur-xl z-40 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden flex flex-col ${
                    isMenuOpen 
                        ? 'opacity-100 pointer-events-auto translate-y-0' 
                        : 'opacity-0 pointer-events-none -translate-y-4'
                }`}
                aria-hidden={!isMenuOpen}
            >
                {/* Scrollable Container */}
                <div className="flex-1 flex flex-col justify-start px-6 pt-32 pb-10 overflow-y-auto min-h-full">
                    <div className="flex flex-col gap-6 items-center text-center">
                        {navLinks.map((link, index) => (
                            <Link 
                                key={link.path}
                                className={`text-2xl font-bold transition-all duration-500 ${location.pathname === link.path ? 'text-primary' : 'text-slate-900 dark:text-white hover:text-primary'}`}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                style={{ 
                                    transitionDelay: isMenuOpen ? `${index * 50 + 100}ms` : '0ms',
                                    opacity: isMenuOpen ? 1 : 0, 
                                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)' 
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link 
                            to="/contact"
                            className={`text-2xl font-bold transition-all duration-500 ${location.pathname === '/contact' ? 'text-primary' : 'text-slate-900 dark:text-white hover:text-primary'}`}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ 
                                transitionDelay: isMenuOpen ? `${navLinks.length * 50 + 100}ms` : '0ms',
                                opacity: isMenuOpen ? 1 : 0, 
                                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)' 
                            }}
                        >
                            Contact
                        </Link>

                        <button 
                            onClick={() => {
                                navigate('/contact?type=quote');
                                setIsMenuOpen(false);
                            }}
                            className="mt-8 w-full max-w-xs h-14 rounded-full bg-primary text-background-dark text-lg font-bold hover:bg-primary-hover transition-all shadow-xl hover:scale-105 active:scale-95"
                            style={{ 
                                transitionDelay: isMenuOpen ? `${(navLinks.length + 1) * 50 + 100}ms` : '0ms',
                                opacity: isMenuOpen ? 1 : 0, 
                                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)' 
                            }}
                        >
                            Get a Quote
                        </button>
                    </div>
                    
                    <div className="mt-auto flex flex-col items-center gap-6 pt-12 pb-8">
                        <div className={`w-12 h-1 bg-primary/20 rounded-full transition-opacity duration-700 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
                        <div className={`flex flex-col items-center gap-3 transition-opacity duration-700 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                            <a href="tel:5551234567" className="flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-primary text-xl">phone</span>
                                <span className="text-lg tracking-wider font-bold">(816) 554-3210</span>
                            </a>
                            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Lee's Summit, MO</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;