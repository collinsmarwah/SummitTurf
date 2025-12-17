import React from 'react';
import CTASection from '../CTASection';
import FadeIn from '../FadeIn';

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col w-full">
            <section className="w-full px-4 md:px-10 lg:px-40 py-8 md:py-12 max-w-[1440px] mx-auto">
                <FadeIn>
                    <div className="flex min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl md:rounded-[2rem] items-center justify-center p-6 md:p-12 relative overflow-hidden group" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDemhwp2exH_9oR8awdYpv5UVmcxTbqoedKBllzNrumOxN4TPhiBzGioW1wp3yQTAo_ktSvj13-iRwX2HFDFxf7haJ3F2bYZVUsJOrjnZVxB1V6Yp9hTXwK6S3wI5Q8G4UAOIsrTycGD_cdVdSH_KSJBEhxhIPlEKbMeBF2MFEwchrcoeaDy1aj7zAtYxTSp8XEZcUWNoy7Dn8StplhsDO1GXnVeMaOC7V40vNln5egOVSxV-0nyNBvy3Z2Un078fUqt3HL9BPa1OAr")'}}>
                        <div className="absolute inset-0 bg-black/60 z-0"></div>
                        <div className="relative z-10 flex flex-col gap-4 text-center max-w-3xl">
                            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 w-fit mx-auto">
                                <span className="material-symbols-outlined text-primary text-sm">science</span>
                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Advanced Agronomy</span>
                            </div>
                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] drop-shadow-sm">
                                More Than Lawn Care.<br/> <span className="text-primary">It's Turf Science.</span>
                            </h1>
                            <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                                Serving Kansas City with scientific precision and 28 years of industry expertise. We don't just cut grass; we cultivate ecosystems.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </section>
        
            <section className="w-full px-4 md:px-10 lg:px-40 py-16 max-w-[1440px] mx-auto flex flex-col gap-24">
                
                {/* Company Story & Philosophy */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="flex flex-col gap-8">
                        <FadeIn delay={100}>
                            <div>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Locally Owned & Operated</span>
                                <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">Superior Lawn Services from a Company You Can Trust!</h2>
                                <div className="flex flex-col gap-4 text-gray-300 text-lg leading-relaxed">
                                    <p>
                                        Locally owned and operated, Summit Turf Services is a full-service Lawn Care company based in Lee's Summit, MO. Our team provides superior lawn care. We believe that we have the experience and skill to turn your lawn into a beautiful and manicured work of art.
                                    </p>
                                    <p>
                                        We take great pride in the services we provide to our customers and we are confident that you will not find a more competent and friendly team to care for your lawn. At Summit Turf Services we treat each customer based on their lawns specific needs.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <div className="bg-surface-dark p-8 rounded-2xl border border-border-dark relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <span className="material-symbols-outlined text-[120px] text-primary">eco</span>
                                </div>
                                <div className="relative z-10 flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-primary">
                                        <span className="material-symbols-outlined">psychiatry</span>
                                        <h3 className="font-bold text-lg">Environmental Stewardship</h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        Our devotion to the environment shows in the services we provide. We have spent 8 years providing safe and effective lawn care services. In addition, we use equipment that is resource friendly and products that are good for our clients. Furthermore, our promise to our customers is to provide an outstanding customer experience and value that exceeds our customers’ expectations.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="flex flex-col gap-8">
                        <FadeIn delay={200}>
                            <div className="flex flex-col gap-4 text-gray-300 text-lg leading-relaxed">
                                 <p>
                                    We believe that a great lawn is essential to a beautiful home because it is an extension of your home. We dedicate our services to making your lawn a place of harmony and relaxation where you can inspire and make true connections with your loved ones and friends.
                                 </p>
                                 <p>
                                    Whether you are having a casual social gathering or cooking out on the barbecue grill, your outdoor space helps to set the mood for your guests. We love what we do, our commitment to improving outdoor spaces of our customers, and the community they live in, inspires us.
                                 </p>
                            </div>
                        </FadeIn>

                        {/* Technicians Section */}
                        <FadeIn delay={400}>
                            <div className="bg-gradient-to-br from-surface-dark to-background-dark p-8 rounded-2xl border border-border-dark flex flex-col gap-4">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">engineering</span>
                                    </div>
                                    <h3 className="text-white text-2xl font-bold">Our Lawn Care Technicians</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    Every lawn has its own unique qualities and specific needs that must be tailored to in order to achieve the best results. This is why the Lawn care technicians at Summit Turf Services are trained to perform lawn care analysis. The technicians at Summit Turf Services know exactly how to care for your lawn. We know what applications are needed to keep it vibrant and healthy.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Matt Pulis Profile */}
                <FadeIn delay={200}>
                    <div className="bg-card-dark/5 dark:bg-card-dark rounded-[2.5rem] p-8 md:p-14 border border-transparent dark:border-[#3f6732] shadow-2xl relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>

                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative z-10">
                            {/* Image Column */}
                            <div className="flex flex-col items-center gap-6 lg:w-1/3 shrink-0 w-full">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-[#152211] shadow-2xl">
                                    <img src="https://www.summitturfservices.com/wp-content/uploads/matt-pulis-profile-summit-turf-services.jpg" alt="Matt Pulis" className="w-full h-full object-cover" />
                                </div>
                                <div className="text-center">
                                    <h2 className="text-white text-3xl md:text-4xl font-black mb-1">Matt Pulis</h2>
                                    <p className="text-primary font-bold uppercase tracking-wider text-sm">Owner & Operator</p>
                                    <p className="text-gray-500 text-sm mt-1 font-medium">MBA Turfgrass Management</p>
                                </div>
                                {/* Credentials Grid */}
                                <div className="grid grid-cols-1 w-full gap-2">
                                    <div className="flex items-center gap-3 bg-background-dark/50 p-3 rounded-xl border border-border-dark">
                                        <span className="material-symbols-outlined text-primary">verified</span>
                                        <span className="text-sm text-gray-300">Certified Agronomist</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-background-dark/50 p-3 rounded-xl border border-border-dark">
                                        <span className="material-symbols-outlined text-primary">golf_course</span>
                                        <span className="text-sm text-gray-300">GCSA Member</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-background-dark/50 p-3 rounded-xl border border-border-dark">
                                        <span className="material-symbols-outlined text-primary">history_edu</span>
                                        <span className="text-sm text-gray-300">Published Author</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="flex-1 flex flex-col gap-8">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Superior Lawn Care Expert</h3>
                                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                                </div>

                                <blockquote className="relative p-6 md:p-8 bg-primary/10 rounded-2xl border-l-4 border-primary">
                                    <span className="material-symbols-outlined absolute top-4 left-4 text-primary/20 text-4xl">format_quote</span>
                                    <p className="text-lg md:text-xl text-white italic font-medium relative z-10 pl-6">
                                        "As the owner of Summit Turf Services and being a turf management expert, Summit Turf Services uses only equipment and products researched and approved by me. This includes all lawn practices we provide. I personally train our lawn care specialists to ensure regulatory compliance and environmental responsibility."
                                    </p>
                                </blockquote>
                                
                                <div className="flex flex-col gap-6 text-gray-300 text-lg leading-relaxed">
                                    <p>
                                        Matt Pulis has a <strong className="text-white">Bachelor’s Degree of Agronomy</strong> from Iowa State University and a <strong className="text-white">Master’s Degree in Turf Grass Management</strong> from UCM.
                                    </p>
                                    <p>
                                        Matt started his professional career as the head Agronomist for the <strong className="text-white">International Sports Turf Research Center (ISTRC)</strong> in 1998. He uses Patented Testing as a basis for turf consulting with golf courses and athletic fields all over the world. Matt works with a minimum of 60 of the top 100 golf courses in the United States.
                                    </p>
                                    <p>
                                        Matt is a member of Golf Course Superintendents Association, is a Certified Agronomist and has his Commercial Applicators License. In addition, Matt has several published articles in Golf Course Management Magazine. Matt has <strong className="text-white">28 years of experience</strong> in the industry and exudes passion for his craft. Matt’s passion shows in the quality of work that he provides to his customers both commercial and residential.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <div className="text-center max-w-3xl mx-auto py-8">
                    <p className="text-gray-400 italic text-lg">We love our customers and welcome your feedback and suggestions. Use our Contact Us page to tell us what we’re doing right or what we can improve on.</p>
                </div>
            </section>
            
            <CTASection />
        </div>
    );
};

export default AboutPage;