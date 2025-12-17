import React, { useState } from 'react';
import CTASection from '../CTASection';
import FadeIn from '../FadeIn';

interface FormData {
    fullName: string;
    dob: string;
    address: string;
    phone: string;
    authorized: string;
    age: string;
}

interface FormErrors {
    fullName?: string;
    dob?: string;
    address?: string;
    phone?: string;
    authorized?: string;
    age?: string;
}

const EmploymentPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        dob: '',
        address: '',
        phone: '',
        authorized: '',
        age: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case 'fullName':
                if (!value.trim()) return 'Full name is required';
                if (value.trim().split(' ').length < 2) return 'Please enter your first and last name';
                return undefined;
            case 'dob':
                if (!value) return 'Date of birth is required';
                const date = new Date(value);
                const now = new Date();
                if (date > now) return 'Date cannot be in the future';
                return undefined;
            case 'address':
                if (!value.trim()) return 'Address is required';
                if (value.trim().length < 10) return 'Please enter a complete address';
                return undefined;
            case 'phone':
                if (!value.trim()) return 'Phone number is required';
                const phoneRegex = /^(\+?1[-.]?)?\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
                if (!phoneRegex.test(value.replace(/\s/g, ''))) return 'Please enter a valid phone number (e.g. 555-123-4567)';
                return undefined;
            case 'authorized':
                if (!value) return 'Please select an option';
                return undefined;
            case 'age':
                if (!value) return 'Please select an option';
                return undefined;
            default:
                return undefined;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear submit status on change
        if (submitStatus !== 'idle') setSubmitStatus('idle');

        // Real-time validation if field has been touched
        if (touched[name]) {
             const error = validateField(name, value);
             setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate all fields
        const newErrors: FormErrors = {};
        let isValid = true;
        
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof FormData]);
            if (error) {
                newErrors[key as keyof FormErrors] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        setTouched({
            fullName: true, dob: true, address: true, phone: true, authorized: true, age: true
        });

        if (isValid) {
            // Simulate API submission
            console.log('Form submitted:', formData);
            setSubmitStatus('success');
            // Reset form after success (optional, or redirect)
            setFormData({ fullName: '', dob: '', address: '', phone: '', authorized: '', age: '' });
            setTouched({});
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setSubmitStatus('error');
            // Find first error and scroll to it
            const firstErrorField = document.querySelector('[aria-invalid="true"]');
            firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const getInputClass = (fieldName: keyof FormErrors) => {
        const baseClass = "w-full bg-background-dark border rounded-lg h-12 px-4 text-white outline-none transition-all duration-200";
        if (touched[fieldName] && errors[fieldName]) {
            return `${baseClass} border-red-500 focus:border-red-500 bg-red-500/5`;
        }
        return `${baseClass} border-border-dark focus:border-primary focus:shadow-[0_0_0_2px_rgba(70,236,19,0.2)]`;
    };

    return (
        <div className="flex flex-col w-full">
            <div className="w-full bg-background-dark py-16 px-4 md:px-10 lg:px-40">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h1 className="text-white text-4xl md:text-5xl font-black mb-6">Employment Opportunities</h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Fill out the application below to become a part of the team at Summit Turf Services.
                        </p>
                    </div>
                </FadeIn>

                <div className="max-w-3xl mx-auto bg-surface-dark border border-border-dark rounded-2xl p-6 md:p-10 shadow-xl relative overflow-hidden">
                    {submitStatus === 'success' && (
                        <div className="mb-8 p-4 bg-green-900/30 border border-green-500/50 rounded-lg flex items-center gap-3 animate-fade-in-up">
                            <span className="material-symbols-outlined text-green-500">check_circle</span>
                            <span className="text-green-200">Application submitted successfully! We will be in touch soon.</span>
                        </div>
                    )}
                    
                    <FadeIn delay={200}>
                        <form className="flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
                            
                            {/* Full Name */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="fullName" className="text-white font-bold text-sm">Full Name (First, Middle, Last) <span className="text-red-500">*</span></label>
                                <input 
                                    id="fullName"
                                    name="fullName"
                                    type="text" 
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={getInputClass('fullName')}
                                    placeholder="Your Full Name" 
                                    aria-invalid={touched.fullName && !!errors.fullName}
                                    aria-describedby="fullName-error"
                                />
                                {touched.fullName && errors.fullName && (
                                    <span id="fullName-error" className="text-red-400 text-xs flex items-center gap-1 animate-fade-in-up">
                                        <span className="material-symbols-outlined text-[14px]">error</span> {errors.fullName}
                                    </span>
                                )}
                            </div>

                            {/* Date of Birth */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="dob" className="text-white font-bold text-sm">Date of Birth <span className="text-red-500">*</span></label>
                                <input 
                                    id="dob"
                                    name="dob"
                                    type="date" 
                                    value={formData.dob}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`${getInputClass('dob')} placeholder-gray-500 [color-scheme:dark]`}
                                    aria-invalid={touched.dob && !!errors.dob}
                                    aria-describedby="dob-error"
                                />
                                {touched.dob && errors.dob && (
                                    <span id="dob-error" className="text-red-400 text-xs flex items-center gap-1 animate-fade-in-up">
                                        <span className="material-symbols-outlined text-[14px]">error</span> {errors.dob}
                                    </span>
                                )}
                            </div>

                            {/* Address */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="address" className="text-white font-bold text-sm">Address <span className="text-red-500">*</span></label>
                                <input 
                                    id="address"
                                    name="address"
                                    type="text" 
                                    value={formData.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={getInputClass('address')}
                                    placeholder="Street Address, City, State, Zip"
                                    aria-invalid={touched.address && !!errors.address}
                                    aria-describedby="address-error"
                                />
                                {touched.address && errors.address && (
                                    <span id="address-error" className="text-red-400 text-xs flex items-center gap-1 animate-fade-in-up">
                                        <span className="material-symbols-outlined text-[14px]">error</span> {errors.address}
                                    </span>
                                )}
                            </div>

                            {/* Cell Phone */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="text-white font-bold text-sm">Cell Phone <span className="text-red-500">*</span></label>
                                <input 
                                    id="phone"
                                    name="phone"
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={getInputClass('phone')}
                                    placeholder="(555) 555-5555"
                                    aria-invalid={touched.phone && !!errors.phone}
                                    aria-describedby="phone-error"
                                />
                                {touched.phone && errors.phone && (
                                    <span id="phone-error" className="text-red-400 text-xs flex items-center gap-1 animate-fade-in-up">
                                        <span className="material-symbols-outlined text-[14px]">error</span> {errors.phone}
                                    </span>
                                )}
                            </div>

                            <hr className="border-border-dark opacity-50" />

                            {/* Authorized to work */}
                            <div className="flex flex-col gap-3">
                                <label className="text-white font-bold text-sm">
                                    Are you authorized to work lawfully in the U.S? <span className="text-red-500">*</span>
                                    <span className="block text-gray-400 font-normal text-xs mt-1 leading-relaxed">In compliance with federal law, all persons hired will be required to verify eligibility to work in the United States and to complete the required employment eligibility verification form upon hire.</span>
                                </label>
                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input 
                                            type="radio" 
                                            name="authorized" 
                                            value="yes" 
                                            checked={formData.authorized === 'yes'}
                                            onChange={handleChange}
                                            className="peer hidden" 
                                        />
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.authorized === 'yes' ? 'border-primary bg-primary' : (touched.authorized && errors.authorized ? 'border-red-500' : 'border-gray-500')}`}>
                                            <div className={`w-2.5 h-2.5 rounded-full bg-background-dark transition-opacity ${formData.authorized === 'yes' ? 'opacity-100' : 'opacity-0'}`}></div>
                                        </div>
                                        <span className={`text-gray-300 group-hover:text-white transition-colors ${(touched.authorized && errors.authorized) ? 'text-red-400' : ''}`}>Yes</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input 
                                            type="radio" 
                                            name="authorized" 
                                            value="no" 
                                            checked={formData.authorized === 'no'}
                                            onChange={handleChange}
                                            className="peer hidden" 
                                        />
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.authorized === 'no' ? 'border-primary bg-primary' : (touched.authorized && errors.authorized ? 'border-red-500' : 'border-gray-500')}`}>
                                            <div className={`w-2.5 h-2.5 rounded-full bg-background-dark transition-opacity ${formData.authorized === 'no' ? 'opacity-100' : 'opacity-0'}`}></div>
                                        </div>
                                        <span className={`text-gray-300 group-hover:text-white transition-colors ${(touched.authorized && errors.authorized) ? 'text-red-400' : ''}`}>No</span>
                                    </label>
                                </div>
                                {touched.authorized && errors.authorized && (
                                    <span className="text-red-400 text-xs flex items-center gap-1 animate-fade-in-up">
                                        <span className="material-symbols-outlined text-[14px]">error</span> {errors.authorized}
                                    </span>
                                )}
                            </div>

                            {/* Over 18 */}
                            <div className="flex flex-col gap-3">
                                <label className="text-white font-bold text-sm">
                                    Are you at least 18 years or older? <span className="text-red-500">*</span>
                                    <span className="block text-gray-400 font-normal text-xs mt-1 leading-relaxed">If no, you may be required to provide authorization to work and/or may not be eligible for certain hazardous occupations pursuant to federal and state laws.</span>
                                </label>
                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input 
                                            type="radio" 
                                            name="age" 
                                            value="yes" 
                                            checked={formData.age === 'yes'}
                                            onChange={handleChange}
                                            className="peer hidden" 
                                        />
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.age === 'yes' ? 'border-primary bg-primary' : (touched.age && errors.age ? 'border-red-500' : 'border-gray-500')}`}>
                                            <div className={`w-2.5 h-2.5 rounded-full bg-background-dark transition-opacity ${formData.age === 'yes' ? 'opacity-100' : 'opacity-0'}`}></div>
                                        </div>
                                        <span className={`text-gray-300 group-hover:text-white transition-colors ${(touched.age && errors.age) ? 'text-red-400' : ''}`}>Yes</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input 
                                            type="radio" 
                                            name="age" 
                                            value="no" 
                                            checked={formData.age === 'no'}
                                            onChange={handleChange}
                                            className="peer hidden" 
                                        />
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.age === 'no' ? 'border-primary bg-primary' : (touched.age && errors.age ? 'border-red-500' : 'border-gray-500')}`}>
                                            <div className={`w-2.5 h-2.5 rounded-full bg-background-dark transition-opacity ${formData.age === 'no' ? 'opacity-100' : 'opacity-0'}`}></div>
                                        </div>
                                        <span className={`text-gray-300 group-hover:text-white transition-colors ${(touched.age && errors.age) ? 'text-red-400' : ''}`}>No</span>
                                    </label>
                                </div>
                                {touched.age && errors.age && (
                                    <span className="text-red-400 text-xs flex items-center gap-1 animate-fade-in-up">
                                        <span className="material-symbols-outlined text-[14px]">error</span> {errors.age}
                                    </span>
                                )}
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="w-full md:w-auto px-10 h-14 bg-primary text-background-dark font-bold text-lg rounded-full hover:bg-white transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={submitStatus === 'success'}>
                                    {submitStatus === 'success' ? 'Submitted' : 'Submit Application'}
                                    {submitStatus !== 'success' && <span className="material-symbols-outlined text-sm">send</span>}
                                </button>
                                {submitStatus === 'error' && (
                                    <p className="mt-4 text-red-400 text-sm text-center">Please fix the errors above before submitting.</p>
                                )}
                            </div>
                        </form>
                    </FadeIn>
                </div>
            </div>
            <CTASection />
        </div>
    );
};

export default EmploymentPage;