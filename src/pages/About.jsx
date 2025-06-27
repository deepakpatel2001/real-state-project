import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Eye, Target, Users, Award, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    const heroRef = useRef(null);
    const valuesRef = useRef(null);
    const teamRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        // Hero Animation
        gsap.fromTo(
            '.about-hero-content',
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
            }
        );

        // Values Animation
        gsap.fromTo(
            '.value-card',
            {
                opacity: 0,
                y: 30,
                scale: 0.9,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: valuesRef.current,
                    start: 'top 80%',
                },
            }
        );

        // Team Animation
        gsap.fromTo(
            '.team-member',
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: teamRef.current,
                    start: 'top 80%',
                },
            }
        );

        // Timeline Animation
        gsap.fromTo(
            '.timeline-item',
            {
                opacity: 0,
                x: -50,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: 'top 80%',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const values = [
        {
            icon: Shield,
            title: 'Trust',
            description:
                'Building lasting relationships through transparency and integrity in every transaction.',
        },
        {
            icon: Eye,
            title: 'Transparency',
            description:
                'Clear communication and honest guidance throughout your real estate journey.',
        },
        {
            icon: Target,
            title: 'Excellence',
            description:
                'Delivering exceptional service and results that exceed your expectations.',
        },
    ];

    const teamMembers = [
        {
            name: 'John Smith',
            role: 'CEO & Founder',
            image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
            bio: '20+ years of real estate expertise',
        },
        {
            name: 'Sarah Johnson',
            role: 'Head of Sales',
            image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
            bio: 'Luxury property specialist',
        },
        {
            name: 'Michael Chen',
            role: 'Investment Advisor',
            image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
            bio: 'Commercial real estate expert',
        },
        {
            name: 'Emily Davis',
            role: 'Property Manager',
            image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
            bio: 'Residential property management',
        },
    ];

    const milestones = [
        {
            year: '2004',
            event: 'Company Founded',
            description: 'Started with a vision to transform real estate',
        },
        {
            year: '2008',
            event: '100+ Properties Sold',
            description: 'Reached our first major milestone',
        },
        {
            year: '2012',
            event: 'Commercial Division',
            description: 'Expanded into commercial real estate',
        },
        {
            year: '2016',
            event: '500+ Happy Clients',
            description: 'Built a strong client base',
        },
        {
            year: '2020',
            event: 'Digital Innovation',
            description: 'Launched virtual property tours',
        },
        {
            year: '2024',
            event: '1000+ Properties',
            description: 'Achieved industry leadership',
        },
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative py-20 text-white"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(30,64,175,0.8), rgba(30,64,175,0.8)), url(https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1600)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="about-hero-content text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            About LuxuryEstate
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100">
                            With over two decades of experience, we've been
                            helping clients find their perfect properties and
                            build lasting wealth through real estate
                            investments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Founded in 2004, LuxuryEstate began with a
                                simple mission: to make real estate transactions
                                seamless, transparent, and rewarding for our
                                clients. What started as a small local agency
                                has grown into a premier real estate firm
                                serving clients across multiple markets.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Our success is built on the foundation of trust,
                                expertise, and unwavering commitment to our
                                clients' goals. We don't just sell properties;
                                we build relationships and help create wealth
                                through strategic real estate investments.
                            </p>
                            <p className="text-lg text-gray-700">
                                Today, we're proud to have helped over 1,000
                                families find their dream homes and assisted
                                countless investors in building their real
                                estate portfolios.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Our office"
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section ref={valuesRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-xl text-gray-600">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="value-card text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-6">
                                        <IconComponent size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section ref={teamRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-gray-600">
                            Experienced professionals dedicated to your success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="team-member text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                                />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-blue-800 font-semibold mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-600">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section ref={timelineRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Journey
                        </h2>
                        <p className="text-xl text-gray-600">
                            Key milestones in our growth story
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-800"></div>
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`timeline-item relative flex items-center ${
                                        index % 2 === 0
                                            ? 'justify-start'
                                            : 'justify-end'
                                    }`}
                                >
                                    <div
                                        className={`w-5/12 ${
                                            index % 2 === 0
                                                ? 'pr-8 text-right'
                                                : 'pl-8 text-left'
                                        }`}
                                    >
                                        <div className="bg-white rounded-xl p-6 shadow-lg">
                                            <div className="text-2xl font-bold text-blue-800 mb-2">
                                                {milestone.year}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {milestone.event}
                                            </h3>
                                            <p className="text-gray-600">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                            <div className="text-4xl font-bold mb-2">1000+</div>
                            <div className="text-lg text-blue-100">
                                Happy Clients
                            </div>
                        </div>
                        <div>
                            <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-lg text-blue-100">
                                Awards Won
                            </div>
                        </div>
                        <div>
                            <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                            <div className="text-4xl font-bold mb-2">
                                $500M+
                            </div>
                            <div className="text-lg text-blue-100">
                                Properties Sold
                            </div>
                        </div>
                        <div>
                            <Shield className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                            <div className="text-4xl font-bold mb-2">20+</div>
                            <div className="text-lg text-blue-100">
                                Years Experience
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
