import React from 'react';
import {Component} from '../Component/Card';
import  "../index.css";

const Home = () => {
  return (
    <div className="flex bg-gray-200 min-w-screen flex-col items-center justify-center p-6" style={{
      marginTop:40,marginBottom:70
    }}>
      <div className="text-center max-w-2xl my-10">
        <h1 className="text-5xl animate-pulse font-extrabold mb-6 mt-10 text-gray-800 leading-snug">
          Welcome to <span className="text-blue-500">Addval Solutions</span>
        </h1>
        <p className="text-lg mb-8 my-10 animate-pulse font-bold text-gray-500">
          Transform your dreams into reality with our innovative solutions! Let us help you achieve success with cutting-edge expertise.
        </p>
  
          <div className="bg-blue-500 w-48 hover:bg-blue-700 my-8 animate-pulse text-white px-6 py-3 text-lg rounded-lg shadow-lg" style={{marginLeft:210,marginTop:60}}
      >
           Get Started
    
      </div>
      </div>
      <Component/>
    </div>
  );
};

export default Home;