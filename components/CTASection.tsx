import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="py-24 px-4 md:px-10 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-background-dark text-4xl md:text-5xl font-black mb-6 leading-tight">Ready for a lawn you can be proud of?</h2>
                <p className="text-background-dark/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
                    Get a free, no-obligation quote today. Our team is ready to help you achieve the greenest grass on the block.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        onClick={() => navigate('/contact?type=quote')}
                        className="h-14 px-10 rounded-full bg-background-dark text-white font-bold text-lg hover:bg-black transition-transform hover:-translate-y-1 shadow-xl"
                    >
                        Get Your Free Quote
                    </button>
                    <button 
                        onClick={() => window.location.href = 'tel:555-123-4567'}
                        className="h-14 px-10 rounded-full bg-transparent border-2 border-background-dark text-background-dark font-bold text-lg hover:bg-background-dark/10 transition-colors"
                    >
                        Call (555) 123-4567
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;