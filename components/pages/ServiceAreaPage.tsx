import React from 'react';
import { useNavigate } from 'react-router-dom';
import CTASection from '../CTASection';
import FadeIn from '../FadeIn';

const ServiceAreaPage: React.FC = () => {
    const navigate = useNavigate();

    const cities = [
        {
            city: "Lee’s Summit",
            state: "MO",
            title: "Lee’s Summit Lawn Care",
            coords: "38°55′21″N 94°22′27″W",
            details: "Located at 38°55′21″N 94°22′27″W. According to the United States Census Bureau, the city has a total area of 65.39 square miles (169.36 km2), of which 63.35 square miles (164.08 km2) is land and 2.04 square miles (5.28 km2) is water.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqlpsrRchxupX3QU-ftGy0RpfPeTHGz84JuwqCztHHcyLokpdASTFFKur-umCiIW23FEOPmar7p4vVnFNUtgF720GLHK0FkxWsKAQwhubfWPxuKKla0VsGSNCRhNlKnwlJ8thbjQkLYlzkhghygPkSVG8pBxh9hLR0NzybTljzzgjC2r2bRWiFz1RwD23LdgIJ6aVAc5WDtTymeg2CqOrOCxrK15JzWzW7imtCq6zAMBlWhE8NHlIb16_6MI66ynOSfmj77EuNjVPn"
        },
        {
            city: "Blue Springs",
            state: "MO",
            title: "Blue Springs Lawn Care",
            coords: "39°1′4″N 94°16′28″W",
            details: "Located at 39°1′4″N 94°16′28″W. According to the United States Census Bureau, the city has a total area of 22.35 square miles (57.89 km2), of which 22.27 square miles (57.68 km2) is land and 0.08 square miles (0.21 km2) is water.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVMcuScwA8_KYDfhX0T_LWnZjoG3lMmPVbv0xmSiF4Rya45AMVj_8vi63lQ0y0HgbNIjts6AmDwBY6T8GCMSQRqBWxSNmDufa8W2l1EiJMsmsxMgS__ewcLPivQUttTR1Mgkn7oAv1wUxJfJp4kKzR3diX-N67keV5oQXlvREP-BjUpsQcoX3SjgkNZpHKThD3sfkY-ckYiW34Eu6R8j7RYHDN0krMo1oK5BChNLRy89bjuzxJxOElFi-OwKXNZhs93fBHzZDSvynq"
        },
        {
            city: "Oak Grove",
            state: "MO",
            title: "Oak Grove Lawn Care",
            coords: "39°0′15″N 94°7′42″W",
            details: "Located at 39°0′15″N 94°7′42″W. According to the United States Census Bureau, the city has a total area of 6.19 square miles (16.03 km2), of which 6.17 square miles (15.98 km2) is land and 0.02 square miles (0.05 km2) is water.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhdumrRPi1RzjVf1akENjLUfNd-Zu84sdk6naQmLw6GEMviRETtmax8CwgczAXs-2kTa0j0HRVJRkcXySN16-1bh45wx8NTE2mEG9KqlxhvtCvKj-JyTsWse75Mt5k3td1dtQ88aGeMYrnPR-a1dIxflqQPSI7pGiRurRRdympu28F9LKx6hxspaC-YVSunLAo95HVn3wyRFFzcZUVranT5bBNG7aEsHN20A0yW2eRPOSbTnTHP63wngUicJhtkb7HDPp6W6LffDTQ"
        },
        {
            city: "Lone Jack",
            state: "MO",
            title: "Lone Jack Lawn Care",
            coords: "38°52′14″N 94°11′17″W",
            details: "Located at 38°52′14″N 94°11′17″W. According to the United States Census Bureau, the city has a total area of 3.75 square miles (9.71 km2), all land.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoP1TA-e4R8eopd6rJG3fZpYp_SwaLUA3doSRJrOSyc75VGhVvTVK-0u09uni6viSffZB6pS6MB4O9lsOL1O_PtP9PsUlxqwDSsptR_gC4UA2XqA8s5PEzctzn0D36nwtGs9nKvqX8PSYI98Tz9JMacZ_Tp48kPDaZQOILup0-DnOcCo_i0FIQHoDdQG13L-0gEOwcFS6ieM3w1uCWBAyL4g7UpT_3y_I4zJpp--nrRNbJxpF1OuYKPEBFEIp6inYBBAYDZTmh8_w1"
        }
    ];

    return (
        <div className="flex flex-col w-full">
            <div className="relative w-full">
                {/* Hero Section */}
                <div className="relative isolate flex flex-col justify-end overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32 px-4 lg:px-40 min-h-[500px]">
                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqlpsrRchxupX3QU-ftGy0RpfPeTHGz84JuwqCztHHcyLokpdASTFFKur-umCiIW23FEOPmar7p4vVnFNUtgF720GLHK0FkxWsKAQwhubfWPxuKKla0VsGSNCRhNlKnwlJ8thbjQkLYlzkhghygPkSVG8pBxh9hLR0NzybTljzzgjC2r2bRWiFz1RwD23LdgIJ6aVAc5WDtTymeg2CqOrOCxrK15JzWzW7imtCq6zAMBlWhE8NHlIb16_6MI66ynOSfmj77EuNjVPn" alt="Lawn" className="absolute inset-0 -z-10 h-full w-full object-cover saturate-[0.85] brightness-[0.4]" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
                    <FadeIn>
                        <div className="flex flex-col max-w-[960px] mx-auto w-full gap-6 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                 <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                 <p className="text-primary font-bold tracking-wider text-xs uppercase">Local Service Areas</p>
                            </div>
                            <h1 className="text-white text-4xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                                Our Lawn Care <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">Service Areas</span>
                            </h1>
                            <p className="text-gray-200 text-lg max-w-2xl mx-auto lg:mx-0">
                                Summit Turf Services LLC proudly provides services to the Kansas City Metropolitan area. Our Service area coverage spans the following cities:
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <div className="px-4 lg:px-40 py-16 bg-[#1a2c15]">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {cities.map((city, index) => (
                        <FadeIn key={index} delay={index * 150} className="h-full">
                            <div className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
                                 <div className="h-56 w-full relative overflow-hidden shrink-0">
                                    <img src={city.image} alt={city.city} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-80"></div>
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                        <h3 className="text-white text-2xl font-bold shadow-black drop-shadow-md">{city.title}</h3>
                                    </div>
                                 </div>
                                 <div className="p-8 flex flex-col justify-start flex-grow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-primary text-xs font-bold uppercase tracking-widest border border-primary/30 px-2 py-1 rounded bg-primary/10">Geography</span>
                                        <span className="text-gray-400 text-xs font-mono flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">my_location</span>
                                            {city.coords}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-base leading-relaxed mb-4">
                                        {city.details}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                         <span className="text-xs text-gray-500">Source: Wikipedia</span>
                                         <button onClick={() => navigate('/contact?type=quote')} className="text-primary text-sm font-bold hover:underline">Request Quote</button>
                                    </div>
                                 </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
            
            <CTASection />
        </div>
    );
};

export default ServiceAreaPage;