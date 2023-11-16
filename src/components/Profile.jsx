import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const UserProfile = () => {
  const { user} = useContext(AuthContext);

  

 ///Esto estara proximamente integrado con nuestra Base de Datos de Usuarios, para detectar el token actual y compararlo con los usuarios para asi encontrar sus datos
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {/* Banner */}
          <div className="bg-gradient-to-r from-green-600 to-green-400 px-4 py-5 sm:px-6">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full border-2 border-white"
                src="https://example.com/user-profile.jpg"
                alt="Proximamente / En Desarrollo"
              />
              <h1 className="text-2xl font-semibold text-white ml-4">Proximamente / En Desarrollo</h1>
            </div>
          </div>

          {/* User Info */}
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center mb-4">
              <svg
                className="h-6 w-6 text-purple-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="text-gray-700">Correo electrónico:</span>
              <span className="ml-2">Proximamente / En Desarrollo</span>
            </div>
            <div className="flex items-center mb-4">
              <svg
                className="h-6 w-6 text-purple-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="text-gray-700">Teléfono:</span>
              <span className="ml-2">Proximamente / En Desarrollo</span>
            </div>
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-purple-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="text-gray-700">Descripción:</span>
              <span className="ml-2">
              Proximamente / En Desarrollo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;