import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FadeIn from '../FadeIn';

interface FormData {
    // Common
    name: string;
    email: string;
    message: string;

    // Quote Specific
    phone: string;
    address: string;
    city: string;
    zip: string;
    serviceType: string;
    lawnSize: string;
    frequency: string;
    startDate: string;
    yardArea: string;
    terrain: string;
    gateAccess: string;
    pets: string;
    addOns: string[];
    budget: string;
    source: string;
}

interface FormErrors {
    [key: string]: string | undefined;
}

const ContactPage: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const isQuote = searchParams.get('type') === 'quote';

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        serviceType: '',
        lawnSize: '',
        frequency: '',
        startDate: '',
        yardArea: '',
        terrain: '',
        gateAccess: '',
        pets: '',
        addOns: [],
        budget: '',
        source: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Reset form when toggling between contact and quote modes
    useEffect(() => {
        setFormData({
            name: '',
            email: '',
            message: '',
            phone: '',
            address: '',
            city: '',
            zip: '',
            serviceType: '',
            lawnSize: '',
            frequency: '',
            startDate: '',
            yardArea: '',
            terrain: '',
            gateAccess: '',
            pets: '',
            addOns: [],
            budget: '',
            source: ''
        });
        setErrors({});
        setTouched({});
        setSubmitStatus('idle');
    }, [isQuote]);

    const validateField = (name: string, value: any): string | undefined => {
        if (isQuote) {
            // Quote form validation
            const requiredFields = [
                'name', 'email', 'phone', 'address', 'city', 'zip', 
                'serviceType', 'lawnSize', 'frequency', 'startDate', 
                'yardArea', 'terrain', 'gateAccess', 'pets', 'source'
            ];
            
            if (requiredFields.includes(name)) {
                 if (typeof value === 'string' && !value.trim()) return 'Required';
                 if (!value) return 'Required';
            }
            
            if (name === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Invalid email';
            }
             if (name === 'phone') {
                // Basic phone validation
                if (value.replace(/\D/g,'').length < 10) return 'Invalid phone number';
            }
        } else {
             // General contact form validation
             if (name === 'name' && !value.trim()) return 'Name is required';
             if (name === 'email') {
                 if (!value.trim()) return 'Email is required';
                 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                 if (!emailRegex.test(value)) return 'Please enter a valid email address';
             }
             if (name === 'message' && !value.trim()) return 'Message is required';
        }
        return undefined;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        if (submitStatus !== 'idle') setSubmitStatus('idle');

        if (touched[name]) {
             const error = validateField(name, value);
             setErrors(prev => ({ ...prev, [name]: error }));
        }
    };
    
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            const current = prev.addOns;
            const updated = checked ? [...current, value] : current.filter(i => i !== value);
            return { ...prev, addOns: updated };
        });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newErrors: FormErrors = {};
        let isValid = true;
        
        const fieldsToValidate = isQuote 
            ? ['name', 'phone', 'email', 'address', 'city', 'zip', 'serviceType', 'lawnSize', 'frequency', 'startDate', 'yardArea', 'terrain', 'gateAccess', 'pets', 'source']
            : ['name', 'email', 'message'];

        fieldsToValidate.forEach(key => {
            const error = validateField(key, formData[key as keyof FormData]);
            if (error) {
                newErrors[key] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        
        const newTouched: Record<string, boolean> = {};
        fieldsToValidate.forEach(key => newTouched[key] = true);
        setTouched(prev => ({...prev, ...newTouched}));

        if (isValid) {
            console.log('Form submitted:', formData);
            setSubmitStatus('success');
            // Scroll to top of form area
            const formContainer = document.getElementById('form-container');
            if (formContainer) formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            setSubmitStatus('error');
            const firstErrorField = document.querySelector('[aria-invalid="true"]');
            if (firstErrorField) firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const getInputClass = (fieldName: string, isTextArea = false) => {
        const baseClass = `w-full bg-background-dark border rounded-${isTextArea ? 'xl' : 'lg'} ${isTextArea ? 'p-5 min-h-[150px]' : 'h-12 px-5'} text-white outline-none transition-all duration-200 placeholder-gray-500`;
        if (touched[fieldName] && errors[fieldName]) {
            return `${baseClass} border-red-500 focus:border-red-500 bg-red-500/5`;
        }
        return `${baseClass} border-border-dark focus:border-primary focus:shadow-[0_0_0_2px_rgba(70,236,19,0.2)]`;
    };

    return (
        <div className="flex flex-col w-full">
            <div className="w-full max-w-[1280px] px-4 md:px-10 py-10 md:py-16 mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Column: Text & Info */}
                    <div className="flex flex-1 flex-col gap-6 text-left">
                        <FadeIn>
                            <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                {isQuote ? (
                                    <>Request a <span className="text-primary">Free Quote</span> Today!</>
                                ) : (
                                    <>Contact <span className="text-primary">Summit Turf Services</span> For the Best Lawn Care Service around!</>
                                )}
                            </h1>
                            <h2 className="text-white text-xl md:text-2xl font-bold leading-snug mt-4">
                                Lawn Care Service with a Reputation for Reliable and Professional Service
                            </h2>
                            <div className="flex flex-col gap-4 text-gray-300 text-base leading-relaxed mt-6">
                                <p>
                                    At Summit Turf Services we know that customer feedback is the lifeblood of our business. We welcome our clients to contact us with their questions or any concerns that they may have.
                                </p>
                                <p>
                                    We are always here to help, and we encourage you to tell us what’s on your mind, good or bad.
                                </p>
                                <p>
                                    Our Professional and friendly staff care about the services we are providing and we desire to ensure that you receive the best possible quality!
                                </p>
                                <p>
                                    If you need more information about our services or if you have questions about caring for your lawn, such as watering schedules, we would love to hear from you!
                                </p>
                                <p className="font-bold text-primary">
                                    We are available Monday through Saturday from 8:00 AM to 6:00 PM and we respond to all customer feedback. We look forward to hearing from you!
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 pt-4 w-full items-start sm:items-center mt-6">
                                <div className="group flex items-center gap-4 rounded-full border border-border-dark bg-surface-dark p-2 pr-6 hover:border-primary/50 transition-colors">
                                    <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary shrink-0">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-text-dim text-xs font-medium uppercase tracking-wider">Phone</span>
                                        <a href="tel:8165543210" className="text-white text-lg font-bold hover:text-primary transition-colors">816-554-3210</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pl-2">
                                    <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Share via:</span>
                                    <div className="flex gap-2">
                                        <a href="#" aria-label="Share on Facebook" className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.954 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                        </a>
                                        <a href="#" aria-label="Share on Twitter" className="w-9 h-9 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                        </a>
                                        <a href="#" aria-label="Share on LinkedIn" className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: Form */}
                    <div id="form-container" className="flex-1 w-full bg-surface-dark rounded-2xl border border-border-dark p-6 md:p-8 shadow-xl relative z-10">
                        <FadeIn delay={200}>
                            {submitStatus === 'success' ? (
                                <div className="flex flex-col items-center justify-center text-center h-full py-12 gap-4">
                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                        <span className="material-symbols-outlined text-3xl">check_circle</span>
                                    </div>
                                    <h3 className="text-white text-2xl font-bold">Request Received!</h3>
                                    <p className="text-gray-400">Thank you for your interest. We will review your details and respond within 24 hours.</p>
                                    <button 
                                        onClick={() => setSubmitStatus('idle')}
                                        className="mt-4 text-primary font-bold hover:underline"
                                    >
                                        Submit another request
                                    </button>
                                </div>
                            ) : (
                                <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                                    <h3 className="text-white text-2xl font-bold mb-2">
                                        {isQuote ? "Free Quote Questionnaire" : "Send Us a Message"}
                                    </h3>
                                    <p className="text-sm text-gray-400 -mt-4">Fields marked with an <span className="text-red-500">*</span> are required</p>
                                    
                                    {/* Quote Form */}
                                    {isQuote ? (
                                        <div className="flex flex-col gap-6">
                                            {/* Core Fields */}
                                            <div className="space-y-4">
                                                <h4 className="text-primary font-bold text-sm uppercase tracking-wider">Contact Info</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label htmlFor="name" className="text-white text-sm font-bold ml-1 mb-1 block">Full Name <span className="text-red-500">*</span></label>
                                                        <input id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={getInputClass('name')} placeholder="John Doe" aria-invalid={!!errors.name} />
                                                        {touched.name && errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="phone" className="text-white text-sm font-bold ml-1 mb-1 block">Phone Number <span className="text-red-500">*</span></label>
                                                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} onBlur={handleBlur} className={getInputClass('phone')} placeholder="(555) 555-5555" aria-invalid={!!errors.phone} />
                                                        {touched.phone && errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone}</span>}
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="text-white text-sm font-bold ml-1 mb-1 block">Email Address <span className="text-red-500">*</span></label>
                                                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={getInputClass('email')} placeholder="email@example.com" aria-invalid={!!errors.email} />
                                                    {touched.email && errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
                                                </div>
                                                <div>
                                                    <label htmlFor="address" className="text-white text-sm font-bold ml-1 mb-1 block">Service Address <span className="text-red-500">*</span></label>
                                                    <input id="address" name="address" value={formData.address} onChange={handleChange} onBlur={handleBlur} className={getInputClass('address')} placeholder="1234 Main St" aria-invalid={!!errors.address} />
                                                    {touched.address && errors.address && <span className="text-red-400 text-xs mt-1 block">{errors.address}</span>}
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label htmlFor="city" className="text-white text-sm font-bold ml-1 mb-1 block">City <span className="text-red-500">*</span></label>
                                                        <input id="city" name="city" value={formData.city} onChange={handleChange} onBlur={handleBlur} className={getInputClass('city')} placeholder="City" aria-invalid={!!errors.city} />
                                                        {touched.city && errors.city && <span className="text-red-400 text-xs mt-1 block">{errors.city}</span>}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="zip" className="text-white text-sm font-bold ml-1 mb-1 block">ZIP Code <span className="text-red-500">*</span></label>
                                                        <input id="zip" name="zip" value={formData.zip} onChange={handleChange} onBlur={handleBlur} className={getInputClass('zip')} placeholder="ZIP" aria-invalid={!!errors.zip} />
                                                        {touched.zip && errors.zip && <span className="text-red-400 text-xs mt-1 block">{errors.zip}</span>}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Service Details */}
                                            <div className="space-y-4">
                                                <h4 className="text-primary font-bold text-sm uppercase tracking-wider border-t border-border-dark pt-4">Service Details</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label htmlFor="serviceType" className="text-white text-sm font-bold ml-1 mb-1 block">Service Type <span className="text-red-500">*</span></label>
                                                        <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} onBlur={handleBlur} className={getInputClass('serviceType')}>
                                                            <option value="">Select Service...</option>
                                                            <option value="mowing">Lawn Mowing</option>
                                                            <option value="fertilization">Fertilization</option>
                                                            <option value="weed_control">Weed Control</option>
                                                            <option value="aeration">Aeration</option>
                                                            <option value="cleanup">Cleanup</option>
                                                        </select>
                                                        {touched.serviceType && errors.serviceType && <span className="text-red-400 text-xs mt-1 block">{errors.serviceType}</span>}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="lawnSize" className="text-white text-sm font-bold ml-1 mb-1 block">Lawn Size <span className="text-red-500">*</span></label>
                                                        <select id="lawnSize" name="lawnSize" value={formData.lawnSize} onChange={handleChange} onBlur={handleBlur} className={getInputClass('lawnSize')}>
                                                            <option value="">Select Size...</option>
                                                            <option value="small">Small (up to 5,000 sq ft)</option>
                                                            <option value="medium">Medium (5,000 - 10,000 sq ft)</option>
                                                            <option value="large">Large (10,000+ sq ft)</option>
                                                        </select>
                                                        {touched.lawnSize && errors.lawnSize && <span className="text-red-400 text-xs mt-1 block">{errors.lawnSize}</span>}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="frequency" className="text-white text-sm font-bold ml-1 mb-1 block">Frequency <span className="text-red-500">*</span></label>
                                                        <select id="frequency" name="frequency" value={formData.frequency} onChange={handleChange} onBlur={handleBlur} className={getInputClass('frequency')}>
                                                            <option value="">Select Frequency...</option>
                                                            <option value="one_time">One Time</option>
                                                            <option value="weekly">Weekly</option>
                                                            <option value="biweekly">Bi-weekly</option>
                                                            <option value="monthly">Monthly</option>
                                                        </select>
                                                        {touched.frequency && errors.frequency && <span className="text-red-400 text-xs mt-1 block">{errors.frequency}</span>}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="startDate" className="text-white text-sm font-bold ml-1 mb-1 block">Start Date <span className="text-red-500">*</span></label>
                                                        <input id="startDate" name="startDate" type="date" value={formData.startDate} onChange={handleChange} onBlur={handleBlur} className={`${getInputClass('startDate')} [color-scheme:dark]`} aria-invalid={!!errors.startDate} />
                                                        {touched.startDate && errors.startDate && <span className="text-red-400 text-xs mt-1 block">{errors.startDate}</span>}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Property Details */}
                                            <div className="space-y-4">
                                                <h4 className="text-primary font-bold text-sm uppercase tracking-wider border-t border-border-dark pt-4">Property Details</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <span className="text-white text-sm font-bold ml-1 mb-2 block">Yard Area <span className="text-red-500">*</span></span>
                                                        <div className="flex gap-4 flex-wrap">
                                                            {['Front', 'Backyard', 'Both'].map((opt) => (
                                                                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                                    <input type="radio" name="yardArea" value={opt} checked={formData.yardArea === opt} onChange={handleChange} className="hidden peer" />
                                                                    <div className="w-4 h-4 rounded-full border border-gray-400 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
                                                                        <div className="w-2 h-2 rounded-full bg-background-dark opacity-0 peer-checked:opacity-100"></div>
                                                                    </div>
                                                                    <span className="text-gray-300 text-sm">{opt}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                        {touched.yardArea && errors.yardArea && <span className="text-red-400 text-xs mt-1 block">{errors.yardArea}</span>}
                                                    </div>
                                                    <div>
                                                        <span className="text-white text-sm font-bold ml-1 mb-2 block">Terrain <span className="text-red-500">*</span></span>
                                                        <div className="flex gap-4">
                                                            {['Flat', 'Sloped'].map((opt) => (
                                                                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                                    <input type="radio" name="terrain" value={opt} checked={formData.terrain === opt} onChange={handleChange} className="hidden peer" />
                                                                    <div className="w-4 h-4 rounded-full border border-gray-400 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
                                                                        <div className="w-2 h-2 rounded-full bg-background-dark opacity-0 peer-checked:opacity-100"></div>
                                                                    </div>
                                                                    <span className="text-gray-300 text-sm">{opt}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                        {touched.terrain && errors.terrain && <span className="text-red-400 text-xs mt-1 block">{errors.terrain}</span>}
                                                    </div>
                                                    <div>
                                                        <span className="text-white text-sm font-bold ml-1 mb-2 block">Gate Access <span className="text-red-500">*</span></span>
                                                        <div className="flex gap-4">
                                                            {['Yes', 'No'].map((opt) => (
                                                                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                                    <input type="radio" name="gateAccess" value={opt} checked={formData.gateAccess === opt} onChange={handleChange} className="hidden peer" />
                                                                    <div className="w-4 h-4 rounded-full border border-gray-400 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
                                                                        <div className="w-2 h-2 rounded-full bg-background-dark opacity-0 peer-checked:opacity-100"></div>
                                                                    </div>
                                                                    <span className="text-gray-300 text-sm">{opt}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                        {touched.gateAccess && errors.gateAccess && <span className="text-red-400 text-xs mt-1 block">{errors.gateAccess}</span>}
                                                    </div>
                                                    <div>
                                                        <span className="text-white text-sm font-bold ml-1 mb-2 block">Pets on Property <span className="text-red-500">*</span></span>
                                                        <div className="flex gap-4">
                                                            {['Yes', 'No'].map((opt) => (
                                                                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                                    <input type="radio" name="pets" value={opt} checked={formData.pets === opt} onChange={handleChange} className="hidden peer" />
                                                                    <div className="w-4 h-4 rounded-full border border-gray-400 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
                                                                        <div className="w-2 h-2 rounded-full bg-background-dark opacity-0 peer-checked:opacity-100"></div>
                                                                    </div>
                                                                    <span className="text-gray-300 text-sm">{opt}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                        {touched.pets && errors.pets && <span className="text-red-400 text-xs mt-1 block">{errors.pets}</span>}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Add Ons */}
                                            <div className="space-y-4">
                                                <h4 className="text-primary font-bold text-sm uppercase tracking-wider border-t border-border-dark pt-4">Optional Add-ons</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {['Edging', 'Trimming', 'Leaf Removal', 'Seasonal Treatments'].map((addon) => (
                                                        <label key={addon} className="flex items-center gap-3 cursor-pointer group bg-background-dark/30 p-3 rounded-lg border border-border-dark hover:border-primary/50 transition-colors">
                                                            <input type="checkbox" value={addon} checked={formData.addOns.includes(addon)} onChange={handleCheckboxChange} className="hidden peer" />
                                                            <div className="w-5 h-5 rounded border border-gray-400 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
                                                                <span className="material-symbols-outlined text-[16px] text-background-dark font-bold opacity-0 peer-checked:opacity-100">check</span>
                                                            </div>
                                                            <span className="text-gray-300 text-sm group-hover:text-white">{addon}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Filters */}
                                            <div className="space-y-4">
                                                <h4 className="text-primary font-bold text-sm uppercase tracking-wider border-t border-border-dark pt-4">Final Details</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label htmlFor="budget" className="text-white text-sm font-bold ml-1 mb-1 block">Budget Range</label>
                                                        <select id="budget" name="budget" value={formData.budget} onChange={handleChange} onBlur={handleBlur} className={getInputClass('budget')}>
                                                            <option value="">Select Range...</option>
                                                            <option value="economy">Economy</option>
                                                            <option value="standard">Standard</option>
                                                            <option value="premium">Premium</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="source" className="text-white text-sm font-bold ml-1 mb-1 block">How did you hear about us? <span className="text-red-500">*</span></label>
                                                        <select id="source" name="source" value={formData.source} onChange={handleChange} onBlur={handleBlur} className={getInputClass('source')}>
                                                            <option value="">Select Source...</option>
                                                            <option value="google">Google Search</option>
                                                            <option value="facebook">Facebook</option>
                                                            <option value="friend">Friend/Referral</option>
                                                            <option value="mailer">Flyer/Mailer</option>
                                                            <option value="truck">Saw Truck</option>
                                                        </select>
                                                        {touched.source && errors.source && <span className="text-red-400 text-xs mt-1 block">{errors.source}</span>}
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="bg-primary text-background-dark font-bold text-lg rounded-full h-14 px-10 self-start hover:bg-white transition-all transform hover:scale-105 shadow-lg shadow-primary/20 w-full mt-4">
                                                Get My Quote
                                            </button>
                                            <div className="text-center text-xs text-primary font-medium uppercase tracking-widest -mt-2">
                                                Response within 24 hours
                                            </div>
                                        </div>
                                    ) : (
                                        // Standard Contact Form
                                        <>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="name" className="text-white text-sm font-bold ml-1">Name <span className="text-red-500">*</span></label>
                                                    <input 
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={getInputClass('name')} 
                                                        placeholder="Your Name" 
                                                        type="text"
                                                        aria-invalid={touched.name && !!errors.name}
                                                    />
                                                    {touched.name && errors.name && (
                                                        <span className="text-red-400 text-xs flex items-center gap-1 animate-fade-in-up">
                                                            <span className="material-symbols-outlined text-[14px]">error</span> {errors.name}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="email" className="text-white text-sm font-bold ml-1">Email <span className="text-red-500">*</span></label>
                                                    <input 
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={getInputClass('email')} 
                                                        placeholder="email@example.com" 
                                                        type="email"
                                                        aria-invalid={touched.email && !!errors.email}
                                                    />
                                                    {touched.email && errors.email && (
                                                        <span className="text-red-400 text-xs flex items-center gap-1 animate-fade-in-up">
                                                            <span className="material-symbols-outlined text-[14px]">error</span> {errors.email}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="message" className="text-white text-sm font-bold ml-1">Message <span className="text-red-500">*</span></label>
                                                <textarea 
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={getInputClass('message', true)} 
                                                    placeholder="How can we help you?"
                                                    aria-invalid={touched.message && !!errors.message}
                                                ></textarea>
                                                {touched.message && errors.message && (
                                                    <span className="text-red-400 text-xs flex items-center gap-1 animate-fade-in-up">
                                                        <span className="material-symbols-outlined text-[14px]">error</span> {errors.message}
                                                    </span>
                                                )}
                                            </div>
                                            <button className="bg-primary text-background-dark font-bold text-lg rounded-full h-14 px-10 self-start hover:bg-white transition-all transform hover:scale-105 shadow-lg shadow-primary/20 w-full md:w-auto">
                                                Send Message
                                            </button>
                                        </>
                                    )}
                                </form>
                            )}
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full px-4 md:px-10 pb-16 mx-auto max-w-[1280px]">
                <FadeIn delay={100}>
                    <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-border-dark shadow-2xl relative group bg-surface-dark">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=2501+NE+Indian+Pointe,+Lee's+Summit,+MO+64086&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                            frameBorder="0" 
                            scrolling="no" 
                            title="Summit Turf Services Location"
                            className="w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                        ></iframe>
                        {/* Overlay label */}
                        <div className="absolute top-4 left-4 bg-background-dark/95 backdrop-blur-md border border-border-dark p-4 rounded-xl shadow-xl max-w-xs z-10">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                                <div>
                                    <h3 className="text-white font-bold text-sm">Summit Turf Services</h3>
                                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">2501 NE Indian Pointe<br/>Lee's Summit, MO 64086</p>
                                    <a 
                                        href="https://www.google.com/maps/search/?api=1&query=2501+NE+Indian+Pointe,+Lee's+Summit,+MO+64086" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="text-primary text-xs font-bold mt-2 inline-flex items-center gap-1 hover:underline"
                                    >
                                        Get Directions <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default ContactPage;