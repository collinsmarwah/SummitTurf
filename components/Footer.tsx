import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const logoUrl = "https://scontent.xx.fbcdn.net/v/t39.30808-1/298879971_466300862171515_5501553963375494221_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=yaUVK73uw08Q7kNvwG6Gzwx&_nc_oc=Adn2IlL_e8IE5BnKdxJpf60WMsXDN5mvqTuQh_nywgh7elzvAzYSQHZGHoqdvZLfI58&_nc_zt=24&_nc_ht=scontent.xx&_nc_gid=LI7Axo_ew1ggZ71H10VPjQ&oh=00_AflXodjewN2JcseZCQnqD43AIojs4QJ1WceKv842af9xYQ&oe=6946CC61";

    return (
        <footer className="bg-background-dark border-t border-[#2c4823] pt-16 pb-8 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-white">
                            <img src={logoUrl} alt="Logo" className="w-10 h-10 rounded-full border border-primary/30 object-cover" />
                            <h3 className="text-lg font-bold">Summit Turf Services</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Professional, reliable, and effective lawn care solutions for homeowners in the Kansas City metropolitan area.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold">Services</h4>
                        <div className="flex flex-col gap-2">
                            <Link className="text-gray-400 hover:text-primary text-sm transition-colors" to="/services">All Services</Link>
                            <span className="text-gray-400 text-sm cursor-default">Aeration & Seeding</span>
                            <span className="text-gray-400 text-sm cursor-default">Fertilization</span>
                            <span className="text-gray-400 text-sm cursor-default">Weed Control</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold">Company</h4>
                        <div className="flex flex-col gap-2">
                            <Link className="text-gray-400 hover:text-primary text-sm transition-colors" to="/about">About Us</Link>
                            <Link className="text-gray-400 hover:text-primary text-sm transition-colors" to="/gallery">Gallery</Link>
                            <Link className="text-gray-400 hover:text-primary text-sm transition-colors" to="/areas">Service Areas</Link>
                            <Link className="text-gray-400 hover:text-primary text-sm transition-colors" to="/employment">Employment</Link>
                            <Link className="text-gray-400 hover:text-primary text-sm transition-colors" to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold">Contact</h4>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-3 text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">location_on</span>
                                <span>2501 NE Indian Pointe,<br/>Lee's Summit, MO 64086</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-primary text-sm">phone</span>
                                (816) 554-3210
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                                hello@summitturf.com
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                                Mon-Fri: 8am - 6pm
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#2c4823] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2026 Summit Turf Services LLC. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm0 1.8c-2.603 0-2.917.01-3.947.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.947v.08c0 2.597.01 2.917.058 3.947.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.947-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.947-.045-.975-.207-1.504-.344-1.857-.182-.466-.399-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.947-.058l-.08.003zM12.315 6.82a5.18 5.18 0 110 10.36 5.18 5.18 0 010-10.36zm0 1.8a3.38 3.38 0 100 6.76 3.38 3.38 0 000-6.76zm5.33-3.97a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;