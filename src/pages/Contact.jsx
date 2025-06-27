import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactRef = useRef(null);
    const [formStatus, setFormStatus] = useState('idle'); // idle, sending, sent, error
    const [formMessage, setFormMessage] = useState('');

    useEffect(() => {
        // Animate contact form
        gsap.fromTo(
            '.contact-form',
            {
                opacity: 0,
                x: -50,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power2.out',
            }
        );

        // Animate contact info
        gsap.fromTo(
            '.contact-info',
            {
                opacity: 0,
                x: 50,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power2.out',
                delay: 0.2,
            }
        );

        // Animate info cards
        gsap.fromTo(
            '.info-card',
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.info-cards',
                    start: 'top 80%',
                },
            }
        );
        if (formStatus === 'sent') {
            const timer = setTimeout(() => {
                setFormStatus('idle');
                setFormMessage('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [formStatus]);

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Our Location',
            details: [
                '123 Business Avenue, Suite 100',
                'New York, NY 10001',
                'United States',
            ],
            color: 'text-blue-600',
        },
        {
            icon: Phone,
            title: 'Phone Numbers',
            details: [
                '+1 (555) 123-4567',
                '+1 (555) 123-4568',
                'Toll Free: 1-800-LUXURY',
            ],
            color: 'text-green-600',
        },
        {
            icon: Mail,
            title: 'Email Addresses',
            details: [
                'info@luxuryestate.com',
                'sales@luxuryestate.com',
                'support@luxuryestate.com',
            ],
            color: 'text-purple-600',
        },
        {
            icon: Clock,
            title: 'Business Hours',
            details: [
                'Monday - Friday: 9:00 AM - 7:00 PM',
                'Saturday: 10:00 AM - 5:00 PM',
                'Sunday: 12:00 PM - 4:00 PM',
            ],
            color: 'text-orange-600',
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setFormMessage('Sending...');

        const formData = new FormData(e.target);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus('sent');
                setFormMessage('Message sent successfully!');
                e.target.reset(); // Reset form fields
            } else {
                const errorData = await response.json();
                setFormStatus('error');
                setFormMessage(errorData.error || 'Failed to send message.');
            }
        } catch (error) {
            setFormStatus('error');
            setFormMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Contact Us
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Ready to find your dream property? Get in touch with our
                        expert team today
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section ref={contactRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="contact-form bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Send us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="john.doe@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    >
                                        <option value="">
                                            Select a subject
                                        </option>
                                        <option value="buying">
                                            Buying Property
                                        </option>
                                        <option value="selling">
                                            Selling Property
                                        </option>
                                        <option value="investment">
                                            Investment Opportunities
                                        </option>
                                        <option value="consultation">
                                            Free Consultation
                                        </option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell us about your real estate needs..."
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={formStatus === 'sending'}
                                        className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 ${
                                            formStatus === 'sending'
                                                ? 'bg-gray-500 text-white cursor-not-allowed'
                                                : 'bg-blue-800 text-white hover:bg-blue-700'
                                        }`}
                                    >
                                        <Send size={20} />
                                        <span>
                                            {formStatus === 'sending'
                                                ? 'Sending...'
                                                : 'Send Message'}
                                        </span>
                                    </button>
                                    {formMessage && (
                                        <p
                                            className={`mt-4 text-center ${
                                                formStatus === 'sent'
                                                    ? 'text-green-600'
                                                    : 'text-red-600'
                                            }`}
                                        >
                                            {formMessage}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="contact-info space-y-8">
                            {/* Map */}
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                <div className="h-64 bg-gray-200 relative">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2s!4v1635959702716!5m2!1sen!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-t-2xl"
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Visit Our Office
                                    </h3>
                                    <p className="text-gray-600">
                                        We're located in the heart of Manhattan,
                                        easily accessible by public transport.
                                    </p>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white rounded-2xl shadow-xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Follow Us
                                </h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        <Facebook size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors"
                                    >
                                        <Twitter size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-xl text-gray-600">
                            Multiple ways to reach our team
                        </p>
                    </div>

                    <div className="info-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => {
                            const IconComponent = info.icon;
                            return (
                                <div
                                    key={index}
                                    className="info-card text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6 ${info.color}`}
                                    >
                                        <IconComponent size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {info.title}
                                    </h3>
                                    <div className="space-y-2">
                                        {info.details.map((detail, idx) => (
                                            <p
                                                key={idx}
                                                className="text-gray-600"
                                            >
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Our experienced team is here to guide you through every
                        step of your real estate journey
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+15551234567"
                            className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300"
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            Call Now: (555) 123-4567
                        </a>
                        <a
                            href="mailto:info@luxuryestate.com"
                            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300"
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            Email Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
