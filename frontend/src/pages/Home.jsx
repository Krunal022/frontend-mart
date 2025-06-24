import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        Welcome to <span className="text-blue-400">My E-Commerce Project</span>
      </h1>

      <p className="text-gray-300 text-sm text-center mb-6 max-w-md">
        Hey there! 👋 I'm currently learning <span className="text-blue-300 font-medium">React</span> and exploring full-stack development.
        <br /> <br />
        This e-commerce project is part of my learning journey. It's still a work in progress!, but I'm building it step by step to practice important concepts like:
      </p>

      <ul className="text-gray-400 text-sm mb-8 list-disc list-inside">
        <li>React Components</li>
        <li>React Router</li>
        <li>Redux (State Management)</li>
        <li>React Hook Form (Forms)</li>
        <li>Building UI with Tailwind CSS</li>
        <li>Connecting with APIs (coming soon)</li>
      </ul>

      <p className="text-gray-300 text-sm text-center mb-10 max-w-md">
        As I learn new things, I'll keep improving this project and add more features. Thank you for checking it out!
      </p>

      <Link to={'/products'} className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full text-sm transition shadow-md">
        Explore Products
      </Link>
    </div>
  );
};

export default Home;
