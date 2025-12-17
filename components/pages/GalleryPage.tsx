import React, { useState } from 'react';
import CTASection from '../CTASection';
import FadeIn from '../FadeIn';

const GalleryPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'restoration' | 'maintenance' | 'landscaping'>('all');

    const galleryItems = [
        {
            category: 'restoration',
            title: "Total Lawn Restoration",
            description: "Complete transformation of heat-stressed turf.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANDBwb0hJMXeMnl4NiZgRfVV6FNjLlSgchyVVJD8qMwv6VFqaGUKuuJ0OTSSQPqaB1B200Jw3qGEagGLxrsc50bVxwvMvS5FNSVWJyfBG_XXcsex3d655FcRS8rmeru2GwOrZeFXLrh8_JcI4_Lq3aGazB7l6-VU72AD8REj885426hd7tueNRdcIODhV1wyTO8dQvBopkK9om7H_yAsFliGyO2FogQbnRYX2nlBePP1gpwyW9hifGR_LhTdkzg4xUWAVd7soAI7ny",
            size: "large"
        },
        {
            category: 'maintenance',
            title: "Weed Control Success",
            description: "Elimination of clover and dandelions.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6r90aRjyAKWzd7GG7wFflat989HwjjklOlU-XttDNv3yNPNjYC4_ut8wmQR4VRw33tn03LM_513iMngHJ0JUcz_7BKJ-JX2CjvcvJXK50iRR9Wd4Kpb85ZqHn2V0azVmWFdxD9JY3agyZbG_4tSqcN6Ou-SORVZMxK606uukSF252PmJ8EabPkq83LroMEmjDtsPlOriGEKnlqqKjdiIefUPng-SZKoU_HYsPBt7JM2uOEkuX-1ix_J3Zhiz8jhSlIZwkGYRVczqp",
            size: "small"
        },
        {
            category: 'landscaping',
            title: "Sod Installation",
            description: "Premium Kentucky Bluegrass sod.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoP1TA-e4R8eopd6rJG3fZpYp_SwaLUA3doSRJrOSyc75VGhVvTVK-0u09uni6viSffZB6pS6MB4O9lsOL1O_PtP9PsUlxqwDSsptR_gC4UA2XqA8s5PEzctzn0D36nwtGs9nKvqX8PSYI98Tz9JMacZ_Tp48kPDaZQOILup0-DnOcCo_i0FIQHoDdQG13L-0gEOwcFS6ieM3w1uCWBAyL4g7UpT_3y_I4zJpp--nrRNbJxpF1OuYKPEBFEIp6inYBBAYDZTmh8_w1",
            size: "medium"
        },
        {
            category: 'maintenance',
            title: "Landscape Bed Maintenance",
            description: "Crisp edging and fresh mulch application.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJsNBO_i-jkllCpLFuPGBokOLEtMY62ZnRWUfs7hU1kkWMZE6V1cLIjKB7GrtDUy-hsmL0iI9JbmnNDpR3gQ3Sn1-rhum_Ghhl8nDMIsKXw3lHKL3nDJ0XdZWk2NB4DO7O-cf697Pm5vpWzSt2kiy3WmsO7bP-jkoY-4zgCW0fm39UeI2ygNfmwC240TK30SboQUTfy3PB4go89f0ftnNqF-Jwez-cLe2l3AaC5EZricsU2WhCSyEbu1VsUvDHvLxYtERkCMo0z587",
            size: "medium"
        },
        {
            category: 'restoration',
            title: "Aeration & Seeding",
            description: "Fall recovery results.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBY2KTe1mIvwAkUea29x3-uJ3-jRJC4tcA7SEKE_1mdHyijjmPqFndgPIsjbXOYCmNi7p4UoCPuBWalrt7YtD-f1BPPEwFxzJljRfQZXOhiPBNPDnhwEgDjfn0HiX2Fyf8MGnCWuP7jW-3tKHdjcimAVKrddw5pLS_joem8NUinMyu3_QQyALAvZrPKMLnKV6Auwde4OlgTlj-kLe2nbqJVsQmVYvsj-G6IJmcFJYxbGeb2m1qhhViDHwT6lnw0G5QcMtaTE4kPVtt",
            size: "small"
        },
        {
            category: 'maintenance',
            title: "Mowing Stripes",
            description: "Professional mowing patterns.",
            image: "https://www.summitturfservices.com/wp-content/uploads/mowing-new-sod-1-600x397.jpg",
            size: "large"
        },
        {
            category: 'landscaping',
            title: "Team at Work",
            description: "Our dedicated crew on site.",
            image: "https://scontent.fdar12-1.fna.fbcdn.net/v/t39.30808-6/558830095_1411967717604820_1863208052478694005_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UWBtKqhKR9gQ7kNvwHECuXl&_nc_oc=AdkaqZ0FCHt7wsTqrG4X1KpsUdErBt_VGxDt3cPpt36KoPgvCXx-jZWp_siXc4D8NNg&_nc_zt=23&_nc_ht=scontent.fdar12-1.fna&_nc_gid=-QjVbZhfoI8FEj9QXMGPiA&oh=00_AfmOXHmCKS5bEUDRjiCcxJ3AVpCy2GpDnbv1WRv3amKUjw&oe=69470492",
            size: "medium"
        }
    ];

    const filteredItems = selectedCategory === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-[400px] w-full px-4 py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(rgba(20, 34, 16, 0.8) 0%, rgba(20, 34, 16, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBY2KTe1mIvwAkUea29x3-uJ3-jRJC4tcA7SEKE_1mdHyijjmPqFndgPIsjbXOYCmNi7p4UoCPuBWalrt7YtD-f1BPPEwFxzJljRfQZXOhiPBNPDnhwEgDjfn0HiX2Fyf8MGnCWuP7jW-3tKHdjcimAVKrddw5pLS_joem8NUinMyu3_QQyALAvZrPKMLnKV6Auwde4OlgTlj-kLe2nbqJVsQmVYvsj-G6IJmcFJYxbGeb2m1qhhViDHwT6lnw0G5QcMtaTE4kPVtt")'}}>
                <FadeIn>
                    <div className="max-w-4xl text-center flex flex-col items-center gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                            <span className="material-symbols-outlined text-primary text-sm">photo_library</span>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">Project Portfolio</span>
                        </div>
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            Our Work Speaks for Itself
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl">
                            Browse through our gallery of lawn transformations, maintenance projects, and landscaping excellence across Kansas City.
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* Gallery Controls */}
            <section className="px-4 py-10 bg-background-dark border-b border-border-dark sticky top-[73px] z-30 backdrop-blur-md bg-background-dark/90">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
                    {[
                        { id: 'all', label: 'All Projects' },
                        { id: 'restoration', label: 'Restoration' },
                        { id: 'maintenance', label: 'Maintenance' },
                        { id: 'landscaping', label: 'Landscaping' }
                    ].map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id as any)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                                selectedCategory === cat.id 
                                ? 'bg-primary text-background-dark scale-105 shadow-[0_0_15px_rgba(70,236,19,0.3)]' 
                                : 'bg-surface-dark text-gray-400 hover:text-white border border-border-dark hover:border-primary/50'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Masonry Grid */}
            <section className="px-4 py-16 bg-background-dark min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {filteredItems.map((item, index) => (
                            <FadeIn key={index} delay={index * 100}>
                                <div className="break-inside-avoid relative group rounded-2xl overflow-hidden border border-border-dark bg-surface-dark">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                                        <h3 className="text-white text-xl font-bold">{item.title}</h3>
                                        <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Transformation Highlight */}
            <section className="py-20 px-4 md:px-10 bg-surface-dark border-y border-border-dark">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="flex flex-col items-center text-center mb-16 gap-4">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Featured Transformation</span>
                            <h2 className="text-white text-3xl md:text-5xl font-black">Before & After</h2>
                        </div>
                    </FadeIn>
                    
                    <FadeIn delay={200}>
                         <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-dark aspect-[16/9] md:aspect-[21/9] group">
                            <div className="absolute inset-0 flex">
                                <div className="w-1/2 h-full relative overflow-hidden border-r border-white/20">
                                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7fojNCECeztAzAbYGqHrKtGWFsEMnTCpN-DCenggJfkt8s39Gu3B5ggNYSC9EDG-NbGkdTFaFuYNH9jkx5B4ZcZsMBwpaXs0djCrT0AOLk1y2Zdnx8rr-hXU6B8UQXT9QiEwmwwxTvYlswfchS5EV_S0Bh2xPY_5P8q_8D39Ony2d2U_UBpoWDRalimoBYtx0xp4EGAzcJ8Iyo-6EXLvyFD8fzAV5FXTAF6CA3rlmnZMwTWvYudihY7PF1NHgmlUsIa2JoJ6VYnlI" alt="Before" className="w-full h-full object-cover filter brightness-90 grayscale-[0.3]" />
                                     <div className="absolute top-6 left-6 bg-black/70 backdrop-blur text-white px-4 py-2 rounded-lg font-bold">BEFORE</div>
                                </div>
                                <div className="w-1/2 h-full relative overflow-hidden">
                                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuANDBwb0hJMXeMnl4NiZgRfVV6FNjLlSgchyVVJD8qMwv6VFqaGUKuuJ0OTSSQPqaB1B200Jw3qGEagGLxrsc50bVxwvMvS5FNSVWJyfBG_XXcsex3d655FcRS8rmeru2GwOrZeFXLrh8_JcI4_Lq3aGazB7l6-VU72AD8REj885426hd7tueNRdcIODhV1wyTO8dQvBopkK9om7H_yAsFliGyO2FogQbnRYX2nlBePP1gpwyW9hifGR_LhTdkzg4xUWAVd7soAI7ny" alt="After" className="w-full h-full object-cover" />
                                     <div className="absolute top-6 right-6 bg-primary text-background-dark px-4 py-2 rounded-lg font-bold shadow-lg">AFTER</div>
                                </div>
                            </div>
                            
                            {/* Draggable slider handle simulation (visual only) */}
                            <div className="absolute inset-y-0 left-1/2 w-1 bg-white/50 backdrop-blur-sm cursor-ew-resize flex items-center justify-center pointer-events-none group-hover:bg-primary transition-colors">
                                <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-background-dark text-sm">code</span>
                                </div>
                            </div>
                         </div>
                    </FadeIn>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default GalleryPage;