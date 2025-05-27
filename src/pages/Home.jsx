import React from 'react';
import "../index.css";
import { Card } from 'flowbite-react';

const Home = () => {

  const projects = [
    {
      name: 'kulcare',
      description: 'Virtual care platform for India’s doctors. SaaS solution with full suite of digital clinic tools like telemedicine, scheduling, payments, eRx, and complete EHR.',
      logo: 'https://addvalsolutions.com/assets/images/capabilities/web-and-mobile/kulcare-new.png',
    },
    {
      name: 'InAuth',
      description: 'Virtual care platform for India’s doctors. SaaS solution with full suite of digital clinic tools like telemedicine, scheduling, payments, eRx, and complete EHR.',
      logo: 'https://addvalsolutions.com/assets/images/work/inauth-opt.jpeg',
    },
    {
      name: 'Calvin Klein',
      description: 'We built an Augmented Reality (AR) application back to showcase CK products. The AR app was launched simultaneously worldwide to showcase the ckOne brand.',
      logo: 'https://addvalsolutions.com/assets/images/work/ck2.jpg',
    },
  ];






  return (
    <div>
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
          <section className="bg-gradient-to-tl from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 py-12  px-4 sm:px-8 md:px-16 lg:px-20 h-screen flex items-center" style={{marginTop:-20}}>
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-blue-400 tracking-tight mt-2 mb-2" style={{ padding: 10 }}>
                Our Projects
              </h1>
              {/* <p className="text-lg text-gray-600 font-serif font-bold dark:text-gray-300 max-w-2xl mx-auto" style={{ paddingTop: 20 }}>
                We are proud to collaborate with some of the world’s most recognizable brands and innovators.
              </p> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ paddingTop: 30, marginTop: 10 }}>
              {projects.map((projects, index) => {
                return (
                  <div
                    key={index}
                    className={`
                      group flex flex-col items-center justify-between
                      bg-white dark:bg-gray-800 rounded-2xl shadow-md
                      border border-blue-400
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
                        
                      `}>
                        <img
                          src={projects.logo}
                          alt={`${projects.name} Logo`}
                          className="w-24 h-14 object-contain rounded-full"
                          loading="lazy"
                        />
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-1 transition-s duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {projects.name}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                        {projects.description}
                      </p>
                    </div>
                    <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition-transform transition-s duration-200 mt-2 group-hover:scale-105 group-hover:shadow-lg">
              Visit Now
                  </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        </div>

 
  );
};

export default Home;