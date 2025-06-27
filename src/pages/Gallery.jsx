import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn, Filter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const galleryRef = useRef(null);

    const filters = ['All', 'Interior', 'Exterior', 'Drone', 'Commercial'];

    const images = [
        {
            id: 1,
            src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'Exterior',
            title: 'Modern Villa Exterior',
            description: 'Contemporary architectural design with clean lines',
        },
        {
            id: 2,
            src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'Interior',
            title: 'Luxury Living Room',
            description: 'Elegant interior with premium finishes',
        },
        {
            id: 3,
            src: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'Drone',
            title: 'City Skyline View',
            description: 'Aerial view of downtown development',
        },
        {
            id: 4,
            src: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'Interior',
            title: 'Modern Kitchen',
            description: 'State-of-the-art kitchen with island',
        },
        {
            id: 5,
            src: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'Exterior',
            title: 'Waterfront Property',
            description: 'Stunning waterfront estate',
        },
        {
            id: 6,
            src: 'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'Commercial',
            title: 'Office Building',
            description: 'Modern commercial architecture',
        },
        {
            id: 7,
            src: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'Interior',
            title: 'Master Bedroom',
            description: 'Spacious bedroom with city views',
        },
        {
            id: 8,
            src: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'Exterior',
            title: 'Garden Landscape',
            description: 'Beautifully landscaped garden',
        },
        {
            id: 9,
            src: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'Drone',
            title: 'Coastal Development',
            description: 'Aerial view of coastal properties',
        },
        {
            id: 10,
            src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'Interior',
            title: 'Dining Area',
            description: 'Elegant dining space with natural light',
        },
        {
            id: 11,
            src: 'https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'Commercial',
            title: 'Corporate Lobby',
            description: 'Impressive commercial building entrance',
        },
        {
            id: 12,
            src: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'Interior',
            title: 'Modern Bathroom',
            description: 'Luxury bathroom with marble finishes',
        },
    ];

    useEffect(() => {
        if (activeFilter === 'All') {
            setFilteredImages(images);
        } else {
            setFilteredImages(
                images.filter((image) => image.category === activeFilter)
            );
        }
    }, [activeFilter]);

    useEffect(() => {
        // Animate gallery items
        gsap.fromTo(
            '.gallery-item',
            {
                opacity: 0,
                y: 30,
                scale: 0.9,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.05,
                ease: 'power2.out',
            }
        );
    }, [filteredImages]);

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Gallery
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Explore our stunning collection of properties through
                        professional photography
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

            {/* Gallery Grid */}
            <section ref={galleryRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="gallery-item break-inside-avoid bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                                onClick={() => openLightbox(image)}
                            >
                                <div className="relative">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                        <ZoomIn className="text-white opacity-0 group-hover:opacity-100 h-8 w-8 transition-all duration-300" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                        <h3 className="text-white font-semibold text-sm mb-1">
                                            {image.title}
                                        </h3>
                                        <p className="text-gray-300 text-xs">
                                            {image.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <ZoomIn className="h-16 w-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                No images found
                            </h3>
                            <p className="text-gray-500">
                                Try adjusting your filter criteria
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={closeLightbox}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-w-full max-h-full object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
                            <h3 className="font-semibold text-lg mb-1">
                                {selectedImage.title}
                            </h3>
                            <p className="text-gray-300">
                                {selectedImage.description}
                            </p>
                            <span className="inline-block mt-2 px-3 py-1 bg-blue-600 text-sm rounded-full">
                                {selectedImage.category}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
