import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, User, ArrowRight, Search, Tag, X, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const blogsRef = useRef(null);
  const postsPerPage = 6;

  const featuredPost = {
    id: 1,
    title: 'The Future of Real Estate: Technology Trends Shaping 2024',
    excerpt: 'Discover how emerging technologies like AI, VR, and blockchain are revolutionizing the real estate industry and what it means for buyers and investors.',
    content: `
      <p>The real estate industry is experiencing a technological revolution that's transforming how we buy, sell, and invest in properties. From artificial intelligence to virtual reality, these innovations are creating new opportunities and changing traditional practices.</p>
      
      <h3>Artificial Intelligence in Real Estate</h3>
      <p>AI is revolutionizing property valuation, market analysis, and customer service. Machine learning algorithms can now predict market trends with unprecedented accuracy, helping both investors and homebuyers make informed decisions.</p>
      
      <h3>Virtual and Augmented Reality</h3>
      <p>VR and AR technologies are making property viewing more accessible and immersive. Potential buyers can now tour properties from anywhere in the world, saving time and resources for both buyers and sellers.</p>
      
      <h3>Blockchain and Smart Contracts</h3>
      <p>Blockchain technology is streamlining property transactions, making them more secure and transparent. Smart contracts are reducing the need for intermediaries and speeding up the closing process.</p>
      
      <h3>IoT and Smart Homes</h3>
      <p>The Internet of Things is making homes smarter and more efficient. From automated lighting to security systems, IoT devices are adding value to properties and changing buyer expectations.</p>
      
      <h3>Looking Ahead</h3>
      <p>As these technologies continue to evolve, we can expect even more dramatic changes in the real estate landscape. Staying informed about these trends is crucial for anyone involved in the industry.</p>
    `,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    category: 'Market Trends',
    readTime: '8 min read',
    tags: ['Technology', 'AI', 'VR', 'Blockchain', 'Future Trends']
  };

  const allBlogPosts = [
    {
      id: 2,
      title: 'Top 10 Investment Properties in 2024',
      excerpt: 'Our experts have identified the most promising investment opportunities in today\'s market.',
      content: `
        <p>Real estate investment continues to be one of the most reliable ways to build wealth. In 2024, certain markets and property types are showing exceptional promise for investors.</p>
        
        <h3>1. Multi-Family Properties</h3>
        <p>With rental demand at an all-time high, multi-family properties offer steady cash flow and appreciation potential.</p>
        
        <h3>2. Commercial Real Estate</h3>
        <p>Office spaces in emerging markets are presenting unique opportunities as businesses adapt to hybrid work models.</p>
        
        <h3>3. Vacation Rentals</h3>
        <p>Short-term rental properties in tourist destinations continue to generate strong returns for savvy investors.</p>
        
        <h3>Key Investment Strategies</h3>
        <p>Successful real estate investment requires careful market analysis, proper financing, and long-term planning. Our team can help you identify the best opportunities for your portfolio.</p>
      `,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      category: 'Investment Tips',
      readTime: '6 min read',
      tags: ['Investment', 'ROI', 'Multi-Family', 'Commercial']
    },
    {
      id: 3,
      title: 'First-Time Buyer\'s Guide to Real Estate',
      excerpt: 'Everything you need to know before purchasing your first property, from financing to closing.',
      content: `
        <p>Buying your first home is an exciting milestone, but it can also be overwhelming. This comprehensive guide will walk you through every step of the process.</p>
        
        <h3>Getting Pre-Approved</h3>
        <p>Before you start house hunting, get pre-approved for a mortgage. This shows sellers you're serious and helps you understand your budget.</p>
        
        <h3>Finding the Right Property</h3>
        <p>Consider location, size, condition, and future resale value. Don't forget to factor in additional costs like property taxes and maintenance.</p>
        
        <h3>Making an Offer</h3>
        <p>Work with your agent to make a competitive offer. In hot markets, you may need to act quickly and consider escalation clauses.</p>
        
        <h3>The Closing Process</h3>
        <p>From inspection to final walkthrough, understand each step of the closing process to avoid surprises.</p>
      `,
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Emily Davis',
      date: 'March 10, 2024',
      category: 'Buying Guide',
      readTime: '10 min read',
      tags: ['First-Time Buyer', 'Mortgage', 'Home Buying', 'Guide']
    },
    {
      id: 4,
      title: 'Market Analysis: Q1 2024 Real Estate Report',
      excerpt: 'Comprehensive analysis of market trends, price movements, and forecasts for the coming quarter.',
      content: `
        <p>The first quarter of 2024 has shown interesting trends in the real estate market. Here's our comprehensive analysis of what's happening and what to expect.</p>
        
        <h3>Price Trends</h3>
        <p>Home prices have stabilized in most markets, with some areas showing modest appreciation. The rapid price increases of previous years have moderated.</p>
        
        <h3>Inventory Levels</h3>
        <p>Housing inventory has improved compared to 2023, giving buyers more options and reducing competition for individual properties.</p>
        
        <h3>Interest Rate Impact</h3>
        <p>Mortgage rates continue to influence buyer behavior, with many waiting for rates to decrease before making a purchase.</p>
        
        <h3>Regional Variations</h3>
        <p>Different markets are experiencing varying conditions, with some areas still seeing strong seller's markets while others have shifted to favor buyers.</p>
      `,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'John Smith',
      date: 'March 8, 2024',
      category: 'Market Trends',
      readTime: '12 min read',
      tags: ['Market Analysis', 'Trends', 'Prices', 'Forecast']
    },
    {
      id: 5,
      title: 'Luxury Home Features That Add Value',
      excerpt: 'Discover which luxury amenities provide the best return on investment for high-end properties.',
      content: `
        <p>When it comes to luxury real estate, certain features can significantly impact a property's value and appeal to high-end buyers.</p>
        
        <h3>Smart Home Technology</h3>
        <p>Integrated smart home systems, from lighting to security, are increasingly expected in luxury properties.</p>
        
        <h3>Outdoor Living Spaces</h3>
        <p>Well-designed outdoor areas, including kitchens, pools, and entertainment spaces, add substantial value.</p>
        
        <h3>Home Theaters and Wine Cellars</h3>
        <p>Entertainment amenities like home theaters and climate-controlled wine storage appeal to luxury buyers.</p>
        
        <h3>Spa-Like Bathrooms</h3>
        <p>Master bathrooms with high-end fixtures, steam showers, and soaking tubs are highly desirable features.</p>
      `,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Sarah Johnson',
      date: 'March 5, 2024',
      category: 'Investment Tips',
      readTime: '7 min read',
      tags: ['Luxury', 'Home Features', 'Value', 'ROI']
    },
    {
      id: 6,
      title: 'Commercial Real Estate Opportunities',
      excerpt: 'Exploring the commercial real estate landscape and identifying profitable investment sectors.',
      content: `
        <p>Commercial real estate offers diverse investment opportunities for those looking to diversify their portfolios beyond residential properties.</p>
        
        <h3>Office Buildings</h3>
        <p>Despite remote work trends, well-located office buildings in growing markets continue to offer solid returns.</p>
        
        <h3>Retail Properties</h3>
        <p>Strategic retail locations, especially those anchored by essential services, remain valuable investments.</p>
        
        <h3>Industrial and Warehouse</h3>
        <p>E-commerce growth has driven demand for industrial properties, making them attractive investment options.</p>
        
        <h3>Mixed-Use Developments</h3>
        <p>Properties combining residential, retail, and office spaces offer diversified income streams and growth potential.</p>
      `,
      image: 'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Michael Chen',
      date: 'March 3, 2024',
      category: 'Investment Tips',
      readTime: '9 min read',
      tags: ['Commercial', 'Investment', 'Office', 'Retail']
    },
    {
      id: 7,
      title: 'Understanding Real Estate Financing Options',
      excerpt: 'A comprehensive guide to mortgage types, financing strategies, and securing the best rates.',
      content: `
        <p>Understanding your financing options is crucial for successful real estate investment and home buying. Here's what you need to know.</p>
        
        <h3>Conventional Mortgages</h3>
        <p>Traditional mortgages offer competitive rates for buyers with good credit and stable income.</p>
        
        <h3>FHA Loans</h3>
        <p>Government-backed loans that require lower down payments, ideal for first-time buyers.</p>
        
        <h3>Investment Property Financing</h3>
        <p>Special considerations and requirements for financing rental and investment properties.</p>
        
        <h3>Alternative Financing</h3>
        <p>Hard money loans, private lenders, and other non-traditional financing options for unique situations.</p>
      `,
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Emily Davis',
      date: 'March 1, 2024',
      category: 'Buying Guide',
      readTime: '11 min read',
      tags: ['Financing', 'Mortgage', 'Loans', 'Investment']
    },
    {
      id: 8,
      title: 'Selling Your Home: Maximizing Value',
      excerpt: 'Expert tips on preparing your home for sale and getting the best possible price.',
      content: `
        <p>Selling your home can be stressful, but with the right preparation and strategy, you can maximize your return and minimize time on market.</p>
        
        <h3>Home Staging</h3>
        <p>Professional staging can increase your home's appeal and help buyers envision themselves living there.</p>
        
        <h3>Pricing Strategy</h3>
        <p>Proper pricing based on market analysis is crucial for attracting buyers and avoiding extended time on market.</p>
        
        <h3>Marketing Your Property</h3>
        <p>Professional photography, virtual tours, and strategic marketing reach the right buyers.</p>
        
        <h3>Negotiating Offers</h3>
        <p>Understanding how to evaluate and negotiate offers ensures you get the best deal possible.</p>
      `,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'John Smith',
      date: 'February 28, 2024',
      category: 'Selling Tips',
      readTime: '8 min read',
      tags: ['Selling', 'Home Staging', 'Pricing', 'Marketing']
    }
  ];

  const categories = [
    { name: 'All', count: allBlogPosts.length + 1 },
    { name: 'Investment Tips', count: allBlogPosts.filter(post => post.category === 'Investment Tips').length },
    { name: 'Market Trends', count: allBlogPosts.filter(post => post.category === 'Market Trends').length + 1 },
    { name: 'Buying Guide', count: allBlogPosts.filter(post => post.category === 'Buying Guide').length },
    { name: 'Selling Tips', count: allBlogPosts.filter(post => post.category === 'Selling Tips').length }
  ];

  const recentPosts = [
    'The Future of Real Estate: Technology Trends',
    'Top 10 Investment Properties in 2024',
    'First-Time Buyer\'s Complete Guide',
    'Market Analysis: Q1 2024 Report',
    'Luxury Home Features That Add Value'
  ];

  useEffect(() => {
    let posts = [...allBlogPosts];
    
    // Add featured post to the mix if showing all or matching category
    if (selectedCategory === 'All' || featuredPost.category === selectedCategory) {
      posts = [featuredPost, ...posts];
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }

    setFilteredPosts(posts);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    // Animate blog cards
    gsap.fromTo('.blog-card', {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: blogsRef.current,
        start: 'top 80%',
      }
    });

    // Animate sidebar elements
    gsap.fromTo('.sidebar-item', {
      opacity: 0,
      x: 30
    }, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.sidebar',
        start: 'top 80%',
      }
    });
  }, [filteredPosts]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPostModal = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePostModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Real Estate Insights</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay informed with the latest trends, tips, and expert analysis from our real estate professionals
          </p>
        </div>
      </section>

      {/* Blog Posts & Sidebar */}
      <section ref={blogsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              {/* Search Results Info */}
              <div className="mb-8">
                <p className="text-gray-600">
                  Showing {currentPosts.length} of {filteredPosts.length} articles
                  {searchTerm && ` for "${searchTerm}"`}
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                </p>
              </div>

              {currentPosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentPosts.map((post) => (
                      <article 
                        key={post.id} 
                        className="blog-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                        onClick={() => openPostModal(post)}
                      >
                        <div className="relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-white bg-opacity-90 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {post.category}
                            </span>
                          </div>
                          {post.id === featuredPost.id && (
                            <div className="absolute top-4 right-4">
                              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <User size={14} className="text-gray-400" />
                              <span className="text-sm text-gray-600">{post.author}</span>
                            </div>
                            <button className="text-blue-800 font-semibold hover:text-blue-600 transition-colors text-sm flex items-center">
                              Read More
                              <ArrowRight size={14} className="ml-1" />
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className={`px-4 py-2 border border-gray-300 rounded-lg transition-colors ${
                            currentPage === 1 
                              ? 'text-gray-400 cursor-not-allowed' 
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          Previous
                        </button>
                        
                        {[...Array(totalPages)].map((_, index) => (
                          <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                              currentPage === index + 1
                                ? 'bg-blue-800 text-white'
                                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {index + 1}
                          </button>
                        ))}
                        
                        <button 
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className={`px-4 py-2 border border-gray-300 rounded-lg transition-colors ${
                            currentPage === totalPages 
                              ? 'text-gray-400 cursor-not-allowed' 
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search terms or category filter</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="sidebar space-y-8">
              {/* Search */}
              <div className="sidebar-item bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-item bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => handleCategoryFilter(category.name)}
                        className={`flex items-center justify-between py-2 w-full text-left transition-colors group ${
                          selectedCategory === category.name 
                            ? 'text-blue-800 font-semibold' 
                            : 'text-gray-700 hover:text-blue-800'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Tag size={16} className={`${
                            selectedCategory === category.name 
                              ? 'text-blue-800' 
                              : 'text-gray-400 group-hover:text-blue-800'
                          }`} />
                          <span>{category.name}</span>
                        </div>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="sidebar-item bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                <ul className="space-y-3">
                  {recentPosts.map((post, index) => (
                    <li key={index}>
                      <button className="text-gray-700 hover:text-blue-800 transition-colors line-clamp-2 text-left">
                        {post}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="sidebar-item bg-blue-800 text-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-blue-100 mb-4">
                  Get the latest real estate insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  />
                  <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closePostModal}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={closePostModal}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all"
              >
                <X size={20} className="text-gray-700" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-white bg-opacity-90 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedPost.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>{selectedPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User size={14} />
                  <span>{selectedPost.author}</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {selectedPost.title}
              </h1>

              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              {/* Tags */}
              {selectedPost.tags && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Share this article:</h4>
                <div className="flex space-x-3">
                  <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Facebook size={16} />
                  </button>
                  <button className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors">
                    <Twitter size={16} />
                  </button>
                  <button className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors">
                    <Linkedin size={16} />
                  </button>
                  <button className="bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};