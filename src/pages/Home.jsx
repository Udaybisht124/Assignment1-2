import React from 'react';
import "../index.css";

const Home = () => {
  return (
    <div
      className="flex items-center justify-center h-screen p-4 bg-red dark:bg-blue-700"
      style={{
        backgroundImage: `url(src/assets/Home.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col items-center justify-center text-center max-w-2xl w-full">
        <h1
          className="md:text-4xl lg:text-7xl
            animate-pulse
            font-extrabold
            mb-6
            text-gray-800
            dark:text-black
            leading-snug
          "
          style={{
            marginTop: -150,
            fontFamily: 'open-sans',
            fontWeight: 800,
          }}
        >
          Welcome to <span className="text-blue-500">Addval Solutions</span>
        </h1>
        <p
          className="text-lg sm:text-xl mb-8 font-bold text-white"
          style={{ marginTop: 40 }}
        >
          Transform your dreams into reality with our innovative solutions! Let us help you achieve success with cutting-edge expertise.
        </p>
        <div
          className="bg-blue-500 hover:bg-blue-700 text-white dark:text-black w-40 sm:w-48 dark:bg-blue-700 hover:bg-blue-500 mb-8 px-6 py-3  text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-4xl
          xl:text-4xl rounded-lg shadow-lg mx-auto cursor-pointer transition"
          style={{ marginTop: 40 }}
        >
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Home;