import React from 'react';
import '../index.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description:
        'Crafting modern, responsive, and high-performance websites tailored to your business needs.',
      icon: (
        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6 shadow-md transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="16" rx="2" className="fill-blue-200 dark:fill-blue-800" />
            <path d="M3 8h18" stroke="currentColor" strokeWidth={2.2} />
            <circle cx="7.5" cy="6" r="1" fill="currentColor" />
            <circle cx="11.5" cy="6" r="1" fill="currentColor" />
          </svg>
        </span>
      ),
    },
    {
      title: 'Mobile Apps',
      description:
        'Building user-friendly, scalable mobile applications for seamless experiences across platforms.',
      icon: (
        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6 shadow-md transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <rect x="7" y="2" width="10" height="20" rx="2" className="fill-green-200 dark:fill-green-800" />
            <rect x="10" y="18" width="4" height="2" rx="1" fill="currentColor" />
          </svg>
        </span>
      ),
    },
    {
      title: 'Robotics & Automation',
      description:
        'Enhancing efficiency with cutting-edge robotics and automation solutions for your operations.',
      icon: (
        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 text-purple-600 mb-6 shadow-md transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="6" className="fill-purple-200 dark:fill-purple-800" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" stroke="currentColor" />
          </svg>
        </span>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-tl from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 py-16 px-4 sm:px-8 md:px-16 lg:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-blue-400 tracking-tight mt-2 mb-2"
            style={{ padding: 40 }}
          >
            Our Services
          </h1>
          <p
            className="text-xl text-blue-500 font-bold dark:text-gray-300 max-w-2xl mx-auto font-serif"
            style={{ paddingTop: 20 }}
          >
            Explore the range of technology solutions we offer to boost your business growth and efficiency.
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ paddingTop: 30, marginTop: 10 }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-between
                bg-white dark:bg-gray-800 rounded-2xl shadow-md
                border border-transparent
                transition-all duration-300 ease-in-out
                hover:-translate-y-2 hover:scale-105
                hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500
                text-center 
                h-full min-h-[420px]"
              style={{
                padding: 30,
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.08)"
              }}
            >
              <div className="flex flex-col items-center flex-1 w-full">
                {service.icon}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-1 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition-transform transition-colors duration-200 mt-2 group-hover:scale-105 group-hover:shadow-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;