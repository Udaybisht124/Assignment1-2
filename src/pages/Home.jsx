import React from 'react';
import { Button } from 'flowbite-react';

const Home = () => {
  return (
    <div className="mt-10 text-center pt-36 bg-gradient-to-b from-blue-100 via-white to-blue-50 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-800">
        Welcome to <span className="text-blue-500">Addval Solutions</span>
      </h1>
      <p className="text-lg mb-8 text-gray-600">
        Transform your dreams into reality with our innovative solutions!
      </p>
      <Button
        color="blue"
        size="lg"
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ml-10"
      >
        Get Started
      </Button>
    </div>
  );
};

export default Home;