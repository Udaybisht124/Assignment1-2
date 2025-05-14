import React from 'react';
import { Card } from 'flowbite-react';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Build modern and responsive websites.' },
    { title: 'Mobile Apps', description: 'Create user-friendly mobile applications.' },
    { title: 'SEO Optimization', description: 'Improve your website’s search engine ranking.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {services.map((service, index) => (
        <Card key={index}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {service.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {service.description}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default Services;