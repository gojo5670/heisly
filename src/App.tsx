import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Globe, 
  Search, 
  TrendingUp, 
  Link, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  Award,
  MessageSquare
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Discord webhook URL
      const webhookUrl = "https://discord.com/api/webhooks/1392719498083041280/qZBd9jIarC-noxsAOGqkzLmFMaQRLMjDLOw2mTcygb4w6k5JU_SsGKv9XiBNEGePwR50";
      
      // Format message for Discord
      const payload = {
        embeds: [{
          title: "New Contact Form Submission",
          color: 16766720, // Yellow color in decimal
          fields: [
            {
              name: "Name",
              value: formData.name,
              inline: true
            },
            {
              name: "Email",
              value: formData.email,
              inline: true
            },
            {
              name: "Service Needed",
              value: formData.service,
              inline: true
            },
            {
              name: "Message",
              value: formData.message || "No message provided"
            }
          ],
          timestamp: new Date().toISOString()
        }]
      };
      
      // Send to Discord webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully."
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          service: 'Website Development',
          message: ''
        });
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: (
        <img 
          src="/Heisly LOGO.png" 
          alt="Heisly Logo" 
          className="w-8 h-8 object-contain" 
        />
      ),
      title: "Website Development",
      description: "Custom, responsive websites built with cutting-edge technology to drive your business forward.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Mobile First"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic with our proven SEO strategies.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "ROI Optimization",
      description: "Maximize your return on investment with data-driven strategies and performance tracking.",
      features: ["Analytics Setup", "Conversion Tracking", "Performance Reports", "Strategy Optimization"]
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Link Building",
      description: "Build high-quality backlinks to improve your domain authority and search rankings.",
      features: ["Quality Backlinks", "Guest Posting", "Directory Submissions", "Link Analysis"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
      text: "Heisly transformed our online presence completely. Our website traffic increased by 300% in just 3 months!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Growth Dynamics",
      rating: 5,
      text: "The ROI optimization service exceeded our expectations. We saw a 150% improvement in conversion rates.",
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      company: "Digital Solutions",
      rating: 5,
      text: "Professional, fast, and results-driven. Heisly delivered exactly what they promised - from zero to prime!",
      avatar: "ER"
    },
    {
      name: "David Thompson",
      company: "E-commerce Pro",
      rating: 5,
      text: "Their link building strategy helped us rank #1 for our target keywords. Highly recommend!",
      avatar: "DT"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "150%", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/Heisly LOGO.png" 
                alt="Heisly Logo" 
                className="w-16 h-16 object-contain cursor-pointer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => window.location.reload(), 500);
                }}
                role="button"
                title="Back to top and refresh"
              />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-yellow-400 transition-colors duration-300">Home</a>
              <a href="#services" className="text-white hover:text-yellow-400 transition-colors duration-300">Services</a>
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors duration-300">About</a>
              <a href="#testimonials" className="text-white hover:text-yellow-400 transition-colors duration-300">Testimonials</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-yellow-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-yellow-400 transition-colors duration-300">Home</a>
              <a href="#services" className="text-white hover:text-yellow-400 transition-colors duration-300">Services</a>
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors duration-300">About</a>
              <a href="#testimonials" className="text-white hover:text-yellow-400 transition-colors duration-300">Testimonials</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Heisly - Digital Marketing & Web Development Services
            </h1>
            <p className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              From Zero to Prime
            </p>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              In Record Time
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
              We transform your digital presence with cutting-edge web development, SEO optimization, 
              ROI enhancement, and strategic link building solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#services" 
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">Key Performance Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent leading-tight py-2">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive digital solutions to accelerate your business growth. 
              <a href="#contact" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                Contact us
              </a> to learn more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-800 hover:border-yellow-400/50"
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
              >
                <div className="text-yellow-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a 
                    href="#contact" 
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center"
                  >
                    Request {service.title}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent leading-tight py-2">
                Why Choose Heisly?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                We're not just another digital agency. We're your strategic partner in achieving digital excellence. 
                <a href="#testimonials" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                  See what our clients say
                </a> about our work.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results-Driven Approach</h3>
                    <p className="text-gray-400">Every strategy is designed to deliver measurable results and maximize your ROI. Learn more about our <a href="#services" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">services</a>.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-400">Our team of specialists brings years of experience in digital marketing and development.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-gray-400">50+ successful projects and 95% client satisfaction rate speak for themselves. <a href="#contact" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">Contact us</a> to be our next success story.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-1">
                <div className="bg-black rounded-2xl p-8 h-full">
                  <div className="text-center">
                    <img 
                      src="/Heisly LOGO.png" 
                      alt="Heisly Logo" 
                      className="w-20 h-20 object-contain mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
                    <p className="text-gray-400 mb-6">Let's discuss how we can take your business from zero to prime.</p>
                    <a 
                      href="#contact"
                      className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                      Start Your Journey
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent leading-tight py-2">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our 
              <a href="#services" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 mx-1">services</a>
              and results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-6 rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-800"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
                <div className="mt-4">
                  <a 
                    href="#contact" 
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 text-sm flex items-center"
                  >
                    Get similar results
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent leading-tight py-2">
              Let's Get Started
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to take your business from zero to prime? Contact us today for a free consultation on our 
              <a href="#services" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 mx-1">digital marketing services</a>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/16393876206" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                    +1(639)387-6206
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <a href="mailto:info@heisly.company" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                    info@heisly.company
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Quick Response</h3>
                  <p className="text-gray-400">We typically respond within 2 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white transition-colors duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Needed</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white transition-colors duration-300"
                  >
                    <option>Website Development</option>
                    <option>SEO Optimization</option>
                    <option>ROI Optimization</option>
                    <option>Link Building</option>
                    <option>All Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white transition-colors duration-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                {submitStatus && (
                  <div className={`p-3 rounded-lg ${submitStatus.success ? 'bg-green-800/50 text-green-400' : 'bg-red-800/50 text-red-400'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold transition-all duration-300 transform ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-300 hover:scale-105'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/Heisly LOGO.png" 
                  alt="Heisly Logo" 
                  className="w-12 h-12 object-contain cursor-pointer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTimeout(() => window.location.reload(), 500);
                  }}
                  role="button"
                  title="Back to top and refresh"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Heisly</h3>
              <p className="text-gray-400 mb-4">From zero to prime, in record time.</p>
              <div className="flex space-x-4">
                <a href="https://wa.me/16393876206" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300" aria-label="WhatsApp">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:info@heisly.company" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li><a href="#website-development" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Website Development</a></li>
                <li><a href="#seo-optimization" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">SEO Optimization</a></li>
                <li><a href="#roi-optimization" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">ROI Optimization</a></li>
                <li><a href="#link-building" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Link Building</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Site Map</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <span className="font-semibold">WhatsApp:</span><br />
                  <a href="https://wa.me/16393876206" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">+1(639)387-6206</a>
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Email:</span><br />
                  <a href="mailto:info@heisly.company" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">info@heisly.company</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <nav className="mb-4">
              <ul className="flex flex-wrap justify-center gap-4">
                <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">About</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </nav>
            <p className="text-gray-400">
              © 2025 Heisly. All rights reserved. | Built with ❤️ for your success.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
