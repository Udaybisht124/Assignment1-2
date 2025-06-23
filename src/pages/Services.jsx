// Import React library and hooks for component creation and state management
import React, { useState, useEffect } from "react";
// Import global CSS styles
import "../index.css";

// Main Services page component
const Services = () => {
  // State to track loading status (currently unused but could be for loading spinner)
  const [isLoading, setIsLoading] = useState(true);
  // State to control content visibility for animations
  const [showContent, setShowContent] = useState(false);

  // Effect hook to handle initial page load animations
  useEffect(() => {
    // Set timer to show content after 1.2 seconds for smooth animation
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false
      setShowContent(true); // Show content with animations
    }, 1200);

    // Cleanup function to clear timer on component unmount
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Crafting modern, responsive, and high-performance websites tailored to your business needs with cutting-edge technologies.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Tuning",
        "Modern Frameworks",
      ],
      icon: (
        <svg
          className="w-12 h-12 border-none"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="2"
            className="fill-current opacity-20"
          />
          <path d="M3 8h18" stroke="currentColor" strokeWidth={2} />
          <circle cx="7.5" cy="6" r="1" fill="currentColor" />
          <circle cx="11.5" cy="6" r="1" fill="currentColor" />
          <path d="M8 12h8M8 16h6" stroke="currentColor" strokeWidth={1.5} />
        </svg>
      ),
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      darkBgGradient: "from-blue-900/20 to-cyan-900/20",
      accentColor: "blue",
      price: "Starting at $2,999",
      duration: "4-8 weeks",
    },
    {
      id: 2,
      title: "Mobile Applications",
      description:
        "Building user-friendly, scalable mobile applications for seamless experiences across iOS and Android platforms.",
      features: [
        "Cross-Platform",
        "Native Performance",
        "App Store Ready",
        "Push Notifications",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <rect
            x="7"
            y="2"
            width="10"
            height="20"
            rx="2"
            className="fill-current opacity-20"
          />
          <rect x="10" y="18" width="4" height="2" rx="1" fill="currentColor" />
          <path
            d="M9 6h6M9 8h6M9 10h4"
            stroke="currentColor"
            strokeWidth={1.5}
          />
        </svg>
      ),
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      darkBgGradient: "from-emerald-900/20 to-teal-900/20",
      accentColor: "emerald",
      price: "Starting at $4,999",
      duration: "6-12 weeks",
    },
    {
      id: 3,
      title: "Robotics & Automation",
      description:
        "Enhancing efficiency with cutting-edge robotics and automation solutions for your industrial operations.",
      features: [
        "Industrial IoT",
        "Process Automation",
        "AI Integration",
        "Real-time Monitoring",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="6" className="fill-current opacity-20" />
          <path
            d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"
            stroke="currentColor"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
      gradient: "from-purple-600 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50",
      darkBgGradient: "from-purple-900/20 to-indigo-900/20",
      accentColor: "purple",
      price: "Starting at $9,999",
      duration: "8-16 weeks",
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      description:
        "Implementing intelligent solutions with advanced AI and machine learning technologies for data-driven insights.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Deep Learning",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
            fill="currentColor"
          />
          <path
            d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
            fill="currentColor"
          />
          <path
            d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
            fill="currentColor"
          />
          <path
            d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
            fill="currentColor"
          />
          <circle cx="12" cy="12" r="8" className="fill-current opacity-10" />
        </svg>
      ),
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      darkBgGradient: "from-orange-900/20 to-red-900/20",
      accentColor: "orange",
      price: "Starting at $7,999",
      duration: "10-20 weeks",
    },
  ];

  const getAccentClasses = (color) => {
    const colorMap = {
      blue: {
        ring: "ring-blue-500/20",
        hoverRing: "hover:ring-blue-500/40",
        text: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-100 dark:bg-blue-900/30",
        border: "border-blue-200 dark:border-blue-800",
      },
      emerald: {
        ring: "ring-emerald-500/20",
        hoverRing: "hover:ring-emerald-500/40",
        text: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-100 dark:bg-emerald-900/30",
        border: "border-emerald-200 dark:border-emerald-800",
      },
      purple: {
        ring: "ring-purple-500/20",
        hoverRing: "hover:ring-purple-500/40",
        text: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-100 dark:bg-purple-900/30",
        border: "border-purple-200 dark:border-purple-800",
      },
      orange: {
        ring: "ring-orange-500/20",
        hoverRing: "hover:ring-orange-500/40",
        text: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-100 dark:bg-orange-900/30",
        border: "border-orange-200 dark:border-orange-800",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 pt-10">
          {/* Title */}
          <h1
            className={`
            text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight
            transition-all duration-700 open-sans
            ${
              showContent
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }
          `}
          >
            <span className="text-gray-900 dark:text-white">Our </span>
            <span className="text-blue-500 ml-2">Services</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`
            text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8
            transition-all duration-700 delay-200 Caprasimo
            ${
              showContent
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }
          `}
          >
            Explore our comprehensive range of technology solutions designed to
            accelerate your business growth and drive digital transformation
            with cutting-edge innovation.
          </p>

          {/* Decorative line */}
          <div
            className={`
            flex items-center justify-center
            transition-all duration-500 delay-400
            ${
              showContent
                ? "opacity-100 transform scale-100"
                : "opacity-0 transform scale-75"
            }
          `}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`
          grid grid-cols-1 md:grid-cols-4 gap-6 mb-16
          transition-all duration-700 delay-500
          ${
            showContent
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }
        `}
        >
          {[
            { number: "500+", label: "Projects Completed", icon: "🚀" },
            { number: "98%", label: "Client Satisfaction", icon: "⭐" },
            { number: "24/7", label: "Support Available", icon: "🛠️" },
            { number: "50+", label: "Expert Developers", icon: "👥" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div
          className={`
          grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16
          transition-all duration-700 delay-700  mt-10
          ${
            showContent
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }
        `}
        >
          {services.map((service, index) => {
            const accentClasses = getAccentClasses(service.accentColor);

            return (
              <div
                key={service.id}
                className={`
                  group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl
                  border border-gray-200 dark:border-gray-700
                  transition-all duration-500 ease-out
                  hover:-translate-y-3 hover:scale-[1.02]
                  hover:shadow-2xl ${accentClasses.hoverRing}
              
                  overflow-hidden
                `}
                style={{
                  animationDelay: `${index * 200 + 800}ms`,
                }}
              >
                {/* Background gradient overlay */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-br ${service.gradient} 
                  opacity-0 group-hover:opacity-5 transition-opacity duration-500
                `}
                ></div>

                {/* Card content */}
                <div className="relative p-8">
                  {/* Icon section */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`
                      relative ${accentClasses.bg} rounded-3xl p-6
                      transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                      shadow-lg group-hover:shadow-xl ring-4 ${accentClasses.ring}
                    `}
                    >
                      <div
                        className={`${accentClasses.text} transition-all duration-300`}
                      >
                        {service.icon}
                      </div>

                      {/* Glow effect */}
                      <div
                        className={`
                        absolute inset-0 bg-gradient-to-br ${service.gradient} 
                        rounded-3xl opacity-0 group-hover:opacity-20 blur-xl 
                        transition-all duration-500
                      `}
                      ></div>
                    </div>
                  </div>

                  {/* Service title */}
                  <h2
                    className={`
                    text-2xl font-bold text-center mb-4
                    text-gray-900 dark:text-white
                    group-hover:${accentClasses.text}
                    transition-colors duration-300
                  `}
                  >
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-center">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <div
                          className={`
                          flex-shrink-0 w-2 h-2 rounded-full
                          bg-gradient-to-r ${service.gradient}
                          group-hover:scale-125 transition-transform duration-300
                        `}
                        ></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing and duration */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {service.price}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Investment
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {service.duration}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Timeline
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`
                    w-full py-3 px-6 rounded-xl font-semibold
                    bg-gradient-to-r ${service.gradient}
                    text-white shadow-lg hover:shadow-xl
                    transform hover:scale-105 transition-all duration-300
                    focus:outline-none focus:ring-4 focus:ring-offset-2 ${accentClasses.ring}
                  `}
                  >
                    Get Started
                  </button>

                  {/* Bottom accent */}
                  <div
                    className={`
                    absolute bottom-0 left-0 right-0 h-1 
                    bg-gradient-to-r ${service.gradient}
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left
                  `}
                  ></div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div
          className={`
          mb-16
          transition-all duration-700 delay-900
          ${
            showContent
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }
        `}
        >
          <h3 className="text-3xl font-bold text-center mt-10 text-gray-900 dark:text-white mb-12">
            OUR <span className="text-blue-500 mt-4">PROCESS</span>
          </h3>
          {/* 
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs and goals",
              },
              {
                step: "02",
                title: "Planning",
                description: "Strategic roadmap and timeline",
              },
              {
                step: "03",
                title: "Development",
                description: "Building with best practices",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Launch and ongoing support",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl rounded-full mb-4">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
              </div>
            ))}
          </div> */}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`
          text-center p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl
          transition-all duration-700 delay-1000
          ${
            showContent
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }
        `}
        >
          <h3 className="text-3xl font-bold text-white mb-4 open-sans">
            Ready to Transform Your Business?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg open-sans">
            Let's discuss your project requirements and create a custom solution
            that drives results. Our expert team is ready to bring your vision
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="
              inline-flex items-center gap-2 px-8 py-4 
              bg-white text-blue-600 font-semibold rounded-xl
              shadow-lg hover:shadow-xl hover:bg-gray-50
              transform hover:-translate-y-1 hover:scale-105
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-white/50
            "
            >
              <span>Start Your Project</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              className="
              inline-flex items-center gap-2 px-8 py-4 
              bg-transparent text-white font-semibold rounded-xl border-2 border-white
              hover:bg-white hover:text-blue-600
              transform hover:-translate-y-1 hover:scale-105
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-white/50
            "
            >
              <span>Schedule Consultation</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
