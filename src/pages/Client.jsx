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

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 h-screen to-white dark:from-gray-800 dark:to-gray-900 my-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12 tracking-tight leading-tight" style={{marginTop:110}}>
          Our Esteemed Clients
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" style={{marginTop:100}}>
          {clients.map((client, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-none bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30 dark:from-blue-800/30 dark:to-purple-800/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="flex flex-col items-center p-6 relative z-10">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="w-32 h-32 object-contain mb-4 transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  {client.name}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {client.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;