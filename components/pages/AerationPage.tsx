import React from 'react';
import { useNavigate } from 'react-router-dom';
import CTASection from '../CTASection';
import FadeIn from '../FadeIn';

const AerationPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col w-full">
                <section className="relative flex flex-col items-center justify-center min-h-[600px] w-full px-4 py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(rgba(21, 34, 17, 0.7) 0%, rgba(21, 34, 17, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1fYRmC6mt3icg9KeVvz2pXs4yVVU6qPJpHVtZOlzSg9mwLEUc6owQZQQungMpQ1-0WSpr07gHl7Bb0-m4lkvAAN229HMI1pvO99meClLt3zkJAz2E2U0GqpYizdk-w3_KyxldyARJXllUXWyCeqNvdqJKNpJtJb5eVu3leCYbLT9-8xPrV9VEM1zqFFyw3RzlBPPbueoyggnXP2M84EngeHsYl16JYJV1-UkYrpHPrWSwvtsPTxiWulZcfxog6iyYeiUKH2kYCsUI")'}}>
                <FadeIn>
                    <div className="max-w-[960px] flex flex-col items-center text-center gap-8 z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-bold text-white uppercase tracking-wider">Booking Now for Fall Season</span>
                        </div>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-[-0.033em]">
                            Breathe Life Into <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Your Lawn</span>
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl font-medium max-w-[640px] leading-relaxed">
                            Expert lawn aeration services in Kansas City. Unlock your soil's full potential and achieve golf-course quality turf this season.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <button onClick={() => navigate('/contact')} className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary text-[#152211] text-base font-bold hover:bg-[#3bd60f] transition-all hover:scale-105 shadow-lg shadow-primary/25">
                                Schedule Aeration
                            </button>
                        </div>
                    </div>
                </FadeIn>
            </section>

            <section className="px-4 py-16 bg-[#1a2b15] relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto flex flex-col gap-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {icon: 'terrain', title: 'Combats Compaction', desc: 'Loosens hard, compacted soil to reduce density.'},
                            {icon: 'grass', title: 'Strengthens Roots', desc: 'Encourages roots to grow deeper into the soil profile.'},
                            {icon: 'water_drop', title: 'Improves Uptake', desc: 'Opens channels for water, oxygen, and fertilizer.'}
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 150} className="h-full">
                                <div className="group flex flex-col gap-6 rounded-2xl border border-border-dark bg-surface-dark p-8 hover:border-primary/50 transition-colors duration-300 h-full">
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#152211] transition-colors duration-300">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white text-xl font-bold">{item.title}</h3>
                                        <p className="text-text-dim leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
            <CTASection />
        </div>
    );
};

export default AerationPage;