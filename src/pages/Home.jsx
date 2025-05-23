import React from 'react';
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
      className="flex min-w-screen flex-col items-center justify-center p-6 dark:bg-white min-h-screen"
      style={{
        marginTop: 70,
        marginBottom: 70,
        backgroundImage: `url(src/assets/Home.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center max-w-2xl" style={{ paddingTop: 30 }}>
        <h1 className="text-5xl animate-pulse font-extrabold mb-6 mt-4 text-gray-800 dark:text-black leading-snug">
          Welcome to <span className="text-blue-500">Addval Solutions</span>
        </h1>
        <p className="text-xl mb-8 font-bold text-white" style={{paddingTop:30}}>
          Transform your dreams into reality with our innovative solutions! Let us help you achieve success with cutting-edge expertise.
        </p>
        <div
          className="bg-blue-700 dark:bg-blue-700 text-white dark:text-black w-48 hover:bg-blue-700 dark:hover:bg-blue-500 my-8 animate-none px-6 py-3 text-lg rounded-lg shadow-lg"
          style={{ marginLeft: 210, marginTop: 100 }}
        >
          Get Started
        </div>
      </div>
      <div className="flex justify-between p-4 gap-6 flex-wrap bg-transparent" style={{ marginTop: 60 }}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-blue-300 text-white dark:bg-black dark:text-white rounded-xl shadow-lg p-6 transition-colors duration-300"
          >
            <Component
              title={card.title}
              description={card.description}
              image={card.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;