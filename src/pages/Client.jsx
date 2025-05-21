import React from 'react';
import { Card } from 'flowbite-react';

const Clients = () => {
  const clients = [
    {
      name: 'Accenture',
      description: 'A leading technology company specializing in software solutions.',
      logo: 'https://addvalsolutions.com/assets/images/clients/logos/accenture.png',
    },
    {
      name: 'Vodafone',
      description: 'A global leader in telecommunications and technology.',
      logo: 'https://addvalsolutions.com/assets/images/clients/logos/vodafone.png',
    },
    {
      name: 'Calvin Klein',
      description: 'Premium fashion brand known for iconic design and style.',
      logo: 'https://addvalsolutions.com/assets/images/clients/logos/ck.png',
    },
  ];

  // Assign a unique color scheme for each card (like services icons)
  const cardColors = [
    {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      ring: 'ring-blue-400',
      ringDark: 'dark:ring-blue-700',
      hoverRing: 'hover:ring-blue-400',
      gradient: 'from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800'
    },
    {
      bg: 'bg-green-100',
      text: 'text-green-600',
      ring: 'ring-green-400',
      ringDark: 'dark:ring-green-700',
      hoverRing: 'hover:ring-green-400',
      gradient: 'from-green-100 to-green-50 dark:from-green-900 dark:to-green-800'
    },
    {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      ring: 'ring-purple-400',
      ringDark: 'dark:ring-purple-700',
      hoverRing: 'hover:ring-purple-400',
      gradient: 'from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800'
    },
  ];

  return (
    <section className="bg-gradient-to-tl from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 py-16 px-4 sm:px-8 md:px-16 lg:px-20 min-h-screen flex items-center my-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-blue-400 tracking-tight mt-2 mb-2" style={{ padding: 40 }}>
            Our Esteemed Clients
          </h1>
          <p className="text-lg text-gray-600 font-serif font-bold dark:text-gray-300 max-w-2xl mx-auto" style={{ paddingTop: 20 }}>
            We are proud to collaborate with some of the world’s most recognizable brands and innovators.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ paddingTop: 30, marginTop: 10 }}>
          {clients.map((client, index) => {
            const color = cardColors[index % cardColors.length];
            return (
              <div
                key={index}
                className={`
                  group flex flex-col items-center justify-between
                  bg-white dark:bg-gray-800 rounded-2xl shadow-md
                  border border-transparent
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-2 hover:scale-105
                  hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500
                  text-center h-full min-h-[420px]
                `}
                style={{
                  padding: 30,
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.08)"
                }}
              >
                <div className="flex flex-col items-center flex-1 w-full">
                  <span className={`
                    inline-flex items-center justify-center w-20 h-20 rounded-full
                    mb-6 shadow-md transition-transform duration-300 ease-in-out
                    group-hover:scale-110 group-hover:rotate-6
                    ${color.bg} ${color.text}
                  `}>
                    <img
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      className="w-14 h-14 object-contain"
                      loading="lazy"
                    />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-1 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {client.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    {client.description}
                  </p>
                </div>
                <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition-transform transition-colors duration-200 mt-2 group-hover:scale-105 group-hover:shadow-lg">
                Trusted Partner
              </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;