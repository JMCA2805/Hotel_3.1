import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";

const API = import.meta.env.VITE_USER_URL;

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      console.log(user.id);
      try {
        const response = await axios.get(`${API}/${user.id}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user && user.id) {
      fetchUserData();
    }
  }, [user]);

  console.log(userData);

  ///Esto estara proximamente integrado con nuestra Base de Datos de Usuarios, para detectar el token actual y compararlo con los usuarios para asi encontrar sus datos
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="dark:bg-MoradoO/80 bg-Moradote/80 shadow overflow-hidden sm:rounded-lg border border-MoradoO dark:border-VerdeC">
          {/* Banner */}
          <div className="bg-Moradote dark:bg-MoradoO border-b border-MoradoO dark:border-VerdeC px-4 py-5 sm:px-6">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full border-2 border-white text-white"
                src="https://example.com/user-profile.jpg"
                alt="Proximamente / En Desarrollo"
              />
              <h1 className="text-2xl font-semibold text-white ml-4">
                {`${userData?.nombre} ${userData?.apellido}` ||
                  "Proximamente / En Desarrollo"}
              </h1>
            </div>
          </div>

          {/* User Info */}
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center mb-4">
              <svg
                className="h-6 w-6 text-white mr-2"
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
              <span className="text-white font-bold">Correo electrónico:</span>
              <span className="ml-2 text-white">
                {userData?.correo || "Proximamente / En Desarrollo"}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <svg
                className="h-6 w-6 text-white mr-2"
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
              <span className="text-white font-bold">Teléfono:</span>
              <span className="ml-2 text-white">
                {userData?.telefono || "Telefóno sin Registrar"}
              </span>
            </div>
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-white mr-2"
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
              <span className="text-white font-bold">Descripción:</span>
              <span className="ml-2 text-white">
                {userData?.descripcion || "Descripción sin Registrar"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
