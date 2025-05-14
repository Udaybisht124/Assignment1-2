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
      description: 'A pioneer in healthcare and medical research.',
      logo: 'https://addvalsolutions.com/assets/images/clients/logos/ck.png',
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        Our Clients
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={client.logo}
                alt={`${client.name} Logo`}
                className="w-24 h-24 object-contain mb-4"
              />
              <h5 className="text-xl font-bold text-gray-900 text-center">
                {client.name}
              </h5>
              <p className="text-sm text-gray-600 text-center mt-2">
                {client.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Clients;