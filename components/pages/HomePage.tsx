import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CTASection from '../CTASection';
import FadeIn from '../FadeIn';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="relative w-full min-h-[600px] flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(20, 34, 16, 0.9) 100%), url("https://www.summitturfservices.com/wp-content/uploads/mowing-new-sod-1-600x397.jpg")'}}>
                <div className="max-w-7xl w-full px-4 md:px-10 py-20 flex flex-col items-start gap-6">
                    <FadeIn delay={200}>
                        <div className="max-w-3xl">
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-bold mb-4 border border-primary/30">
                                Trusted in Kansas City
                            </span>
                            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-4">
                                Kansas City Turf and Lawn Care Experts
                            </h1>
                            <p className="text-gray-200 text-lg md:text-xl max-w-2xl font-light mb-8">
                                Professional care for the greenest lawn on the block. We treat your yard like it's our own.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button onClick={() => navigate('/contact?type=quote')} className="h-12 px-8 rounded-full bg-primary text-background-dark font-bold text-base hover:bg-white transition-colors flex items-center justify-center gap-2">
                                    <span>Get Your Free Estimate</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                                <button onClick={() => navigate('/services')} className="h-12 px-8 rounded-full bg-surface-dark border border-surface-border text-white font-bold text-base hover:bg-surface-border transition-colors">
                                    Our Services
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 px-4 md:px-10 bg-background-dark">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 flex flex-col gap-6">
                        <FadeIn>
                            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                                Welcome to <span className="text-primary">Summit Turf Services</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mt-6">
                                We are a locally owned and operated company committed to quality and transparency. Our experts know the specific soil and climate needs of the Kansas City area to keep your turf healthy and vibrant year-round.
                            </p>
                            <div className="pt-4 flex gap-8">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-white">10+</span>
                                    <span className="text-sm text-gray-400">Years Exp.</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-white">500+</span>
                                    <span className="text-sm text-gray-400">Happy Lawns</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="flex-1 w-full">
                        <FadeIn delay={200}>
                            <div className="relative rounded-2xl overflow-hidden aspect-video border border-surface-border group">
                                <img src="https://scontent.fdar12-1.fna.fbcdn.net/v/t39.30808-6/558830095_1411967717604820_1863208052478694005_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UWBtKqhKR9gQ7kNvwHECuXl&_nc_oc=AdkaqZ0FCHt7wsTqrG4X1KpsUdErBt_VGxDt3cPpt36KoPgvCXx-jZWp_siXc4D8NNg&_nc_zt=23&_nc_ht=scontent.fdar12-1.fna&_nc_gid=-QjVbZhfoI8FEj9QXMGPiA&oh=00_AfmOXHmCKS5bEUDRjiCcxJ3AVpCy2GpDnbv1WRv3amKUjw&oe=69470492" alt="Summit Turf Services Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 px-4 md:px-10 bg-surface-dark/30">
                <div className="max-w-7xl mx-auto flex flex-col gap-10">
                    <FadeIn>
                        <div className="flex flex-col gap-2 text-center md:text-left">
                            <h2 className="text-white text-3xl md:text-4xl font-bold">Our Premium Services</h2>
                            <p className="text-gray-400">Comprehensive care for every season.</p>
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: 'yard', title: 'Fertilization & Weed Control', desc: 'Custom blended fertilizers and targeted weed treatments.' },
                            { icon: 'grain', title: 'Aeration & Seeding', desc: 'Relieve soil compaction and introduce premium grass seed.' },
                            { icon: 'pest_control', title: 'Pest Control', desc: 'Protection against grubs, mosquitoes, and other pests.' },
                            { icon: 'forest', title: 'Tree & Shrub Care', desc: 'Deep root feeding and disease management.' }
                        ].map((s, i) => (
                            <FadeIn key={i} delay={i * 100} className="h-full">
                                <div className="group flex flex-col gap-4 rounded-2xl border border-surface-border bg-surface-dark p-6 hover:border-primary/50 transition-colors h-full">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">{s.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-xl font-bold mb-2">{s.title}</h3>
                                        <p className="text-gray-400 text-sm">{s.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-24 px-4 md:px-10 bg-background-dark">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <FadeIn>
                                <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">Why Choose Summit Turf Services?</h2>
                                <p className="text-gray-300 mb-8">
                                    We don't just mow lawns; we cultivate ecosystems. Our scientific approach combined with local expertise ensures your lawn gets exactly what it needs.
                                </p>
                                <Link to="/about" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Learn more about our process <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </FadeIn>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { icon: 'verified', title: 'Guaranteed Results', desc: "If you're not happy, we'll re-visit at no extra cost." },
                                { icon: 'eco', title: 'Eco-Friendly Options', desc: 'Safe for pets, kids, and local waterways.' },
                                { icon: 'calendar_clock', title: 'Reliable Scheduling', desc: "You'll receive notifications before and after every service." },
                                { icon: 'location_on', title: 'Local Expertise', desc: 'We know Kansas clay soil. Treatments formulated for our region.' }
                            ].map((feat, i) => (
                                <FadeIn key={i} delay={i * 100}>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 text-primary mt-1">
                                            <span className="material-symbols-outlined fill-1">{feat.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{feat.title}</h4>
                                            <p className="text-gray-400 text-sm mt-1">{feat.desc}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Before After */}
            <section className="py-20 px-4 md:px-10 bg-surface-dark">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="flex flex-col items-center text-center mb-12">
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">See the Summit Difference</h2>
                            <p className="text-gray-400 max-w-2xl">Real results from real neighbors in Kansas City.</p>
                        </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <FadeIn delay={100}>
                            <div className="relative group overflow-hidden rounded-2xl">
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider z-10">Before</div>
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7fojNCECeztAzAbYGqHrKtGWFsEMnTCpN-DCenggJfkt8s39Gu3B5ggNYSC9EDG-NbGkdTFaFuYNH9jkx5B4ZcZsMBwpaXs0djCrT0AOLk1y2Zdnx8rr-hXU6B8UQXT9QiEwmwwxTvYlswfchS5EV_S0Bh2xPY_5P8q_8D39Ony2d2U_UBpoWDRalimoBYtx0xp4EGAzcJ8Iyo-6EXLvyFD8fzAV5FXTAF6CA3rlmnZMwTWvYudihY7PF1NHgmlUsIa2JoJ6VYnlI" alt="Patchy lawn" className="w-full h-80 object-cover opacity-80" />
                            </div>
                        </FadeIn>
                        <FadeIn delay={300}>
                            <div className="relative group overflow-hidden rounded-2xl border-2 border-primary">
                                <div className="absolute top-4 left-4 bg-primary text-background-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-10">After 6 Weeks</div>
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuANDBwb0hJMXeMnl4NiZgRfVV6FNjLlSgchyVVJD8qMwv6VFqaGUKuuJ0OTSSQPqaB1B200Jw3qGEagGLxrsc50bVxwvMvS5FNSVWJyfBG_XXcsex3d655FcRS8rmeru2GwOrZeFXLrh8_JcI4_Lq3aGazB7l6-VU72AD8REj885426hd7tueNRdcIODhV1wyTO8dQvBopkK9om7H_yAsFliGyO2FogQbnRYX2nlBePP1gpwyW9hifGR_LhTdkzg4xUWAVd7soAI7ny" alt="Green lawn" className="w-full h-80 object-cover" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default HomePage;