import React from 'react';
import CTASection from '../CTASection';
import FadeIn from '../FadeIn';

const ServicesPage: React.FC = () => {
    const galleryItems = [
        {
            title: "Total Lawn Restoration",
            description: "From patchy, heat-stressed grass to a lush, resilient carpet in just 8 weeks using our proprietary aeration and seeding program.",
            before: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7fojNCECeztAzAbYGqHrKtGWFsEMnTCpN-DCenggJfkt8s39Gu3B5ggNYSC9EDG-NbGkdTFaFuYNH9jkx5B4ZcZsMBwpaXs0djCrT0AOLk1y2Zdnx8rr-hXU6B8UQXT9QiEwmwwxTvYlswfchS5EV_S0Bh2xPY_5P8q_8D39Ony2d2U_UBpoWDRalimoBYtx0xp4EGAzcJ8Iyo-6EXLvyFD8fzAV5FXTAF6CA3rlmnZMwTWvYudihY7PF1NHgmlUsIa2JoJ6VYnlI",
            after: "https://lh3.googleusercontent.com/aida-public/AB6AXuANDBwb0hJMXeMnl4NiZgRfVV6FNjLlSgchyVVJD8qMwv6VFqaGUKuuJ0OTSSQPqaB1B200Jw3qGEagGLxrsc50bVxwvMvS5FNSVWJyfBG_XXcsex3d655FcRS8rmeru2GwOrZeFXLrh8_JcI4_Lq3aGazB7l6-VU72AD8REj885426hd7tueNRdcIODhV1wyTO8dQvBopkK9om7H_yAsFliGyO2FogQbnRYX2nlBePP1gpwyW9hifGR_LhTdkzg4xUWAVd7soAI7ny"
        },
        {
            title: "Weed Control & Fertilization",
            description: "Eliminating invasive clover and dandelions while boosting soil nutrients for vibrant color and density.",
            before: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhdumrRPi1RzjVf1akENjLUfNd-Zu84sdk6naQmLw6GEMviRETtmax8CwgczAXs-2kTa0j0HRVJRkcXySN16-1bh45wx8NTE2mEG9KqlxhvtCvKj-JyTsWse75Mt5k3td1dtQ88aGeMYrnPR-a1dIxflqQPSI7pGiRurRRdympu28F9LKx6hxspaC-YVSunLAo95HVn3wyRFFzcZUVranT5bBNG7aEsHN20A0yW2eRPOSbTnTHP63wngUicJhtkb7HDPp6W6LffDTQ",
            after: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6r90aRjyAKWzd7GG7wFflat989HwjjklOlU-XttDNv3yNPNjYC4_ut8wmQR4VRw33tn03LM_513iMngHJ0JUcz_7BKJ-JX2CjvcvJXK50iRR9Wd4Kpb85ZqHn2V0azVmWFdxD9JY3agyZbG_4tSqcN6Ou-SORVZMxK606uukSF252PmJ8EabPkq83LroMEmjDtsPlOriGEKnlqqKjdiIefUPng-SZKoU_HYsPBt7JM2uOEkuX-1ix_J3Zhiz8jhSlIZwkGYRVczqp"
        },
        {
            title: "New Sod Installation",
            description: "Transforming bare earth into an instant, usable lawn with premium Kentucky Bluegrass sod installation.",
            before: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqlpsrRchxupX3QU-ftGy0RpfPeTHGz84JuwqCztHHcyLokpdASTFFKur-umCiIW23FEOPmar7p4vVnFNUtgF720GLHK0FkxWsKAQwhubfWPxuKKla0VsGSNCRhNlKnwlJ8thbjQkLYlzkhghygPkSVG8pBxh9hLR0NzybTljzzgjC2r2bRWiFz1RwD23LdgIJ6aVAc5WDtTymeg2CqOrOCxrK15JzWzW7imtCq6zAMBlWhE8NHlIb16_6MI66ynOSfmj77EuNjVPn", 
            after: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoP1TA-e4R8eopd6rJG3fZpYp_SwaLUA3doSRJrOSyc75VGhVvTVK-0u09uni6viSffZB6pS6MB4O9lsOL1O_PtP9PsUlxqwDSsptR_gC4UA2XqA8s5PEzctzn0D36nwtGs9nKvqX8PSYI98Tz9JMacZ_Tp48kPDaZQOILup0-DnOcCo_i0FIQHoDdQG13L-0gEOwcFS6ieM3w1uCWBAyL4g7UpT_3y_I4zJpp--nrRNbJxpF1OuYKPEBFEIp6inYBBAYDZTmh8_w1"
        },
        {
            title: "Landscape Bed Maintenance",
            description: "Clean edging, fresh mulch, and shrub trimming to revitalize property curb appeal.",
            before: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlP4Oyi-6WcUm0ZOvDmZXDJI0CkkatUTGpgb6BcdGnsV0id_BF1RzGP9WesMrLCeik-DWZxsQv4vW4yQ1r5FPSWnL4fAfXXOe4lQZGafJy7f4Be9xcZ1osOL02bpuS1eXH9tGSxkSWjJAQvM_HgHn8SH55Ag0vMf2Guo9iHxcOP5DrfgvrBSd3U1toljNXr9qkseDYhWvOXGk6VHeVV3VQ9LQupSzp8IFnX1PuaRt56u5oghiZPl8qlIMs1npIJKUASLcCqkwvU8t2",
            after: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJsNBO_i-jkllCpLFuPGBokOLEtMY62ZnRWUfs7hU1kkWMZE6V1cLIjKB7GrtDUy-hsmL0iI9JbmnNDpR3gQ3Sn1-rhum_Ghhl8nDMIsKXw3lHKL3nDJ0XdZWk2NB4DO7O-cf697Pm5vpWzSt2kiy3WmsO7bP-jkoY-4zgCW0fm39UeI2ygNfmwC240TK30SboQUTfy3PB4go89f0ftnNqF-Jwez-cLe2l3AaC5EZricsU2WhCSyEbu1VsUvDHvLxYtERkCMo0z587"
        }
    ];

    return (
        <div className="flex flex-col w-full">
            <div className="relative w-full">
                <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 md:p-10 text-center relative overflow-hidden" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(20, 34, 16, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHMWhrkk38fFyTVXIAiWBDGXTVgY9HQQk9-5CXeb6NkKq90yy7LRRbSQFCLmDxVCmbzUm9lBlOqqCkzi5rLPjMDZcnf7Yi6QtQacdasL33moE3DfnCzGoLlUtfVtUP2pcfjAp8Hc0rX5-C-rjGyLaYorRbE7q2EIdUDGsEVmEYc379I7iq0QA-9r2cw1rQC0t4-YMh2y2qGkJaelrWfIaR--qf1Z9oMlHoKwNJVf6Q0eIwiT6z-SZvzzX0U9pKmX7PHq-KML43G8Ik")'}}>
                    <FadeIn>
                        <div className="flex flex-col gap-4 max-w-[800px] z-10">
                            <span className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-bold w-fit mx-auto backdrop-blur-sm">
                                <span className="material-symbols-outlined text-[18px]">verified</span>
                                Licensed & Insured
                            </span>
                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                                Professional Turf & Lawn Solutions
                            </h1>
                            <h2 className="text-gray-200 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                                Serving the greater Kansas City area with comprehensive, science-based care strategies designed for our local climate.
                            </h2>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <div className="px-4 py-10 md:px-10 lg:px-40 flex justify-center pb-12">
                <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { 
                            title: "Maintaining Your Lawn to Perfection", 
                            icon: "yard", 
                            desc: "We choose the appropriate time to maintain your property, not only if it fits our schedule. We’re conscientious of the weather and how your lawn has reacted to current temperature and moisture changes. Picking the perfect time for cutting grass maintains the health and integrity of your lawn. Our focus is to provide services that meet our customers' needs and to take care of each client’s property as if it were our own.",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhdumrRPi1RzjVf1akENjLUfNd-Zu84sdk6naQmLw6GEMviRETtmax8CwgczAXs-2kTa0j0HRVJRkcXySN16-1bh45wx8NTE2mEG9KqlxhvtCvKj-JyTsWse75Mt5k3td1dtQ88aGeMYrnPR-a1dIxflqQPSI7pGiRurRRdympu28F9LKx6hxspaC-YVSunLAo95HVn3wyRFFzcZUVranT5bBNG7aEsHN20A0yW2eRPOSbTnTHP63wngUicJhtkb7HDPp6W6LffDTQ" 
                        },
                        { 
                            title: "Landscaping Installation & Maintenance", 
                            icon: "park", 
                            desc: "Landscape installation and maintenance can be overwhelming and time-consuming. Allow our professionals to provide the best in landscaping maintenance. We install new trees, bushes, plants and perennials in the right location around your property and at the right time of the season. We also maintain decorative rock, mulch, and dirt, ensuring proper grading for proper water drainage.",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoP1TA-e4R8eopd6rJG3fZpYp_SwaLUA3doSRJrOSyc75VGhVvTVK-0u09uni6viSffZB6pS6MB4O9lsOL1O_PtP9PsUlxqwDSsptR_gC4UA2XqA8s5PEzctzn0D36nwtGs9nKvqX8PSYI98Tz9JMacZ_Tp48kPDaZQOILup0-DnOcCo_i0FIQHoDdQG13L-0gEOwcFS6ieM3w1uCWBAyL4g7UpT_3y_I4zJpp--nrRNbJxpF1OuYKPEBFEIp6inYBBAYDZTmh8_w1"
                        },
                        { 
                            title: "Aerating to Promote Healthy Lawns", 
                            icon: "grid_on", 
                            desc: "Aeration services are best performed in early spring or fall. It helps resolve issues with drainage, strengthens your turf, promotes root growth and helps new seeds to germinate. We use plug aerators to remove soil plugs, which is the most effective method. If you want beautiful lush grass in the coming spring, don’t skip this essential step in lawn care health.",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlP4Oyi-6WcUm0ZOvDmZXDJI0CkkatUTGpgb6BcdGnsV0id_BF1RzGP9WesMrLCeik-DWZxsQv4vW4yQ1r5FPSWnL4fAfXXOe4lQZGafJy7f4Be9xcZ1osOL02bpuS1eXH9tGSxkSWjJAQvM_HgHn8SH55Ag0vMf2Guo9iHxcOP5DrfgvrBSd3U1toljNXr9qkseDYhWvOXGk6VHeVV3VQ9LQupSzp8IFnX1PuaRt56u5oghiZPl8qlIMs1npIJKUASLcCqkwvU8t2"
                        },
                        { 
                            title: "Proper Sod Installation", 
                            icon: "layers", 
                            desc: "Lawn care services for new sod is important if you plan to have a beautiful, lush, green lawn and increase your property value. Using sod (turf grass) will help you get a great looking lawn in a fairly short period of time as it has already been planted. We ensure professional installation for a lawn that grows more evenly and is lusher.",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6r90aRjyAKWzd7GG7wFflat989HwjjklOlU-XttDNv3yNPNjYC4_ut8wmQR4VRw33tn03LM_513iMngHJ0JUcz_7BKJ-JX2CjvcvJXK50iRR9Wd4Kpb85ZqHn2V0azVmWFdxD9JY3agyZbG_4tSqcN6Ou-SORVZMxK606uukSF252PmJ8EabPkq83LroMEmjDtsPlOriGEKnlqqKjdiIefUPng-SZKoU_HYsPBt7JM2uOEkuX-1ix_J3Zhiz8jhSlIZwkGYRVczqp"
                        },
                        { 
                            title: "Irrigation Systems Maintenance", 
                            icon: "water_drop", 
                            desc: "We offer comprehensive services for maintaining your irrigation system including the setup of efficient irrigation watering schedules, sprinkler head calibration for effective lawn coverage, and winterization system blow-outs. Proper maintenance ensures your system runs efficiently all season long.",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJsNBO_i-jkllCpLFuPGBokOLEtMY62ZnRWUfs7hU1kkWMZE6V1cLIjKB7GrtDUy-hsmL0iI9JbmnNDpR3gQ3Sn1-rhum_Ghhl8nDMIsKXw3lHKL3nDJ0XdZWk2NB4DO7O-cf697Pm5vpWzSt2kiy3WmsO7bP-jkoY-4zgCW0fm39UeI2ygNfmwC240TK30SboQUTfy3PB4go89f0ftnNqF-Jwez-cLe2l3AaC5EZricsU2WhCSyEbu1VsUvDHvLxYtERkCMo0z587"
                        },
                        { 
                            title: "Scientific Fertilization Schedule", 
                            icon: "science", 
                            desc: "Different climates dictate different fertilization and seeding applications. The timing of these applications is essential. Our owner, who holds a Bachelor of Science in Turf Science degree, determines the right time for seeding and fertilizing. This eliminates the guesswork and gives you peace of mind that your property is being cared for correctly.",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBY2KTe1mIvwAkUea29x3-uJ3-jRJC4tcA7SEKE_1mdHyijjmPqFndgPIsjbXOYCmNi7p4UoCPuBWalrt7YtD-f1BPPEwFxzJljRfQZXOhiPBNPDnhwEgDjfn0HiX2Fyf8MGnCWuP7jW-3tKHdjcimAVKrddw5pLS_joem8NUinMyu3_QQyALAvZrPKMLnKV6Auwde4OlgTlj-kLe2nbqJVsQmVYvsj-G6IJmcFJYxbGeb2m1qhhViDHwT6lnw0G5QcMtaTE4kPVtt"
                        }
                    ].map((s, i) => (
                        <FadeIn key={i} delay={i * 100} className="h-full">
                            <div className="group flex flex-col rounded-xl bg-white dark:bg-[#1f3319] border border-gray-200 dark:border-[#2c4823] overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(70,236,19,0.15)] h-full">
                                <div className="h-56 w-full bg-cover bg-center shrink-0" style={{backgroundImage: `url("${s.img}")`}}></div>
                                <div className="p-8 flex flex-col gap-4 flex-1">
                                    <div className="flex items-center gap-3">
                                        <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                            <span className="material-symbols-outlined">{s.icon}</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold leading-tight">{s.title}</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-[#9fc992] leading-relaxed text-base flex-1">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Before & After Gallery */}
            <div className="w-full bg-surface-dark py-20 px-4 md:px-10 border-t border-border-dark">
                <div className="max-w-[1200px] mx-auto">
                    <FadeIn>
                        <div className="flex flex-col items-center text-center mb-16 gap-4">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Real Results</span>
                            <h2 className="text-white text-3xl md:text-5xl font-black">Project Gallery</h2>
                            <p className="text-gray-400 max-w-2xl text-lg">See the difference our scientific approach makes. From total restoration to maintenance, we transform properties.</p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {galleryItems.map((item, index) => (
                            <FadeIn key={index} delay={index * 150} className="h-full">
                                <div className="flex flex-col rounded-2xl overflow-hidden bg-background-dark border border-border-dark group hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 h-full">
                                    {/* Image Comparison Container */}
                                    <div className="relative h-64 md:h-80 w-full flex">
                                        <div className="w-1/2 h-full relative border-r border-white/20 overflow-hidden">
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="bg-black/70 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-md uppercase tracking-wider border border-white/10">Before</span>
                                            </div>
                                            <img src={item.before} alt={`${item.title} Before`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 origin-left filter brightness-90" />
                                        </div>
                                        <div className="w-1/2 h-full relative overflow-hidden">
                                            <div className="absolute top-4 right-4 z-10">
                                                <span className="bg-primary text-background-dark text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-md uppercase tracking-wider shadow-lg">After</span>
                                            </div>
                                            <img src={item.after} alt={`${item.title} After`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 origin-right" />
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 md:p-8 flex flex-col gap-3 flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>

            <CTASection />
        </div>
    );
};

export default ServicesPage;