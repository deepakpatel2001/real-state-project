import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Filter,
    MapPin,
    Calendar,
    Building,
    CheckCircle,
    Clock,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const projectsRef = useRef(null);

    const filters = ['All', 'Residential', 'Commercial', 'Mixed Use'];

    const projects = [
        {
            id: 1,
            title: 'Sunset Residences',
            location: 'Beverly Hills, CA',
            type: 'Residential',
            status: 'Completed',
            units: 45,
            completion: '2024',
            price: 'Starting from $850K',
            image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
            description:
                'Luxury residential complex with modern amenities and stunning city views.',
        },
        {
            id: 2,
            title: 'Metro Business Center',
            location: 'Downtown LA, CA',
            type: 'Commercial',
            status: 'Under Construction',
            units: 25,
            completion: '2025',
            price: 'Starting from $2.5M',
            image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
            description:
                'State-of-the-art commercial space designed for modern businesses.',
        },
        {
            id: 3,
            title: 'Harbor View Towers',
            location: 'San Francisco, CA',
            type: 'Mixed Use',
            status: 'Planning',
            units: 120,
            completion: '2026',
            price: 'Starting from $1.2M',
            image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
            description:
                'Mixed-use development combining residential, retail, and office spaces.',
        },
        {
            id: 4,
            title: 'Green Valley Homes',
            location: 'Pasadena, CA',
            type: 'Residential',
            status: 'Completed',
            units: 30,
            completion: '2023',
            price: 'Starting from $650K',
            image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
            description:
                'Eco-friendly residential community with sustainable living features.',
        },
        {
            id: 5,
            title: 'Tech Hub Plaza',
            location: 'Silicon Valley, CA',
            type: 'Commercial',
            status: 'Under Construction',
            units: 15,
            completion: '2025',
            price: 'Starting from $3.8M',
            image: 'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=800',
            description:
                'Premium office spaces designed for technology companies.',
        },
        {
            id: 6,
            title: 'Oceanfront Luxury',
            location: 'Malibu, CA',
            type: 'Residential',
            status: 'Planning',
            units: 20,
            completion: '2026',
            price: 'Starting from $2.8M',
            image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
            description:
                'Exclusive oceanfront properties with private beach access.',
        },
    ];

    useEffect(() => {
        if (activeFilter === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(
                projects.filter((project) => project.type === activeFilter)
            );
        }
    }, [activeFilter]);

    useEffect(() => {
        // Animate projects on load and filter change
        gsap.fromTo(
            '.project-card',
            {
                opacity: 0,
                y: 30,
                scale: 0.95,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
            }
        );
    }, [filteredProjects]);

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Completed':
                return <CheckCircle className="h-5 w-5 text-green-500" />;
            case 'Under Construction':
                return <Clock className="h-5 w-5 text-yellow-500" />;
            case 'Planning':
                return <Calendar className="h-5 w-5 text-blue-500" />;
            default:
                return null;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-100 text-green-800';
            case 'Under Construction':
                return 'bg-yellow-100 text-yellow-800';
            case 'Planning':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Our Projects
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Discover our portfolio of exceptional real estate
                        developments across premium locations
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center space-x-2">
                            <Filter className="h-5 w-5 text-gray-600" />
                            <span className="text-gray-700 font-medium">
                                Filter by:
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                                        activeFilter === filter
                                            ? 'bg-blue-800 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section ref={projectsRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="project-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                                                project.status
                                            )}`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
                                        {getStatusIcon(project.status)}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                            {project.type}
                                        </span>
                                    </div>

                                    <div className="flex items-center text-gray-600 mb-3">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        <span className="text-sm">
                                            {project.location}
                                        </span>
                                    </div>

                                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">
                                                Units:
                                            </span>
                                            <span className="font-semibold">
                                                {project.units}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">
                                                Completion:
                                            </span>
                                            <span className="font-semibold">
                                                {project.completion}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">
                                                Price:
                                            </span>
                                            <span className="font-semibold text-blue-800">
                                                {project.price}
                                            </span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                No projects found
                            </h3>
                            <p className="text-gray-500">
                                Try adjusting your filter criteria
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">
                        Interested in Our Projects?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Get in touch with our team to learn more about
                        investment opportunities and availability
                    </p>
                    <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                        Contact Our Sales Team
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Projects;
