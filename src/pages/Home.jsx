import React from 'react';
<<<<<<< HEAD
import { Component } from '../Component/Card';
import "../index.css";

const Home = () => {
  const cardData = [
    {
      title: "Web Development",
      description: "We build modern, responsive websites tailored to your business needs.",
      image: "",
    },
    {
      title: "Mobile Apps",
      description: "Creating user-friendly mobile applications for seamless experiences.",
      image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Mobile+Apps",
    },
    {
      title: "Digital Marketing",
      description: "Helping you grow your online presence effectively.",
      image: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Marketing",
    },
    {
      title: "AI Solutions",
      description: "Innovative AI-driven solutions to transform your business.",
      image: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=AI+Solutions",
    },
  ];

  return (
    <div
      className="flex bg-gray-200 dark:bg-gray-900 min-w-screen flex-col items-center justify-center p-6"
      style={{
        marginTop: 40,
        marginBottom: 70,
      }}
    >
      <div className="text-center max-w-2xl my-10">
        <h1 className="text-5xl animate-pulse font-extrabold mb-6 mt-10 text-gray-800 dark:text-white leading-snug">
          Welcome to <span className="text-blue-500">Addval Solutions</span>
        </h1>
        <p className="text-lg mb-8 my-10 animate-pulse font-bold text-gray-500 dark:text-gray-300">
          Transform your dreams into reality with our innovative solutions! Let us help you achieve success with cutting-edge expertise.
        </p>

        <div
          className="bg-blue-500 dark:bg-blue-700 text-white dark:text-black w-48 hover:bg-blue-700 dark:hover:bg-blue-500 my-8 animate-pulse px-6 py-3 text-lg rounded-lg shadow-lg"
          style={{ marginLeft: 210, marginTop: 60 }}
        >
          Get Started
        </div>
      </div>
      <div className="flex justify-between p-4 gap-6 flex-wrap">
        {cardData.map((card, index) => (
          <Component
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
=======
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
>>>>>>> 882a2b0147df18b51d85ad399d5319d951a42726
    </div>
  );
};

export default Home;