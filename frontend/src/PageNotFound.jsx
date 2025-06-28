import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-5xl font-bold mb-4 text-blue-400">404</h1>
      <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
