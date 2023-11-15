import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/Leaflet.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { IconContext } from "react-icons";
import { FaCloudSun } from "react-icons/fa6";

export default function Info() {
  //Estados
  const [name, setName] = useState("");
  const [tempT, setTempT] = useState("");
  const [tempMx, setTempMax] = useState("");
  const [tempMn, setTempMin] = useState("");
  const [weather, setWeather] = useState([]);
  //Coordenadas del Mapa
  const location = [11.431595, -69.642651];

  //Api key del clima
  const API = import.meta.env.VITE_WEATHER_URL;

  //Consulta del clima
  const handleWheater = async () => {
    const response = await axios.post(API);
    await setName(response.data.name);
    const tt = await temperatura(response.data.main.temp);
    await setTempT(tt);
    const tmx = await temperatura(response.data.main.temp_max);
    await setTempMax(tmx);
    const tmn = await temperatura(response.data.main.temp_min);
    await setTempMin(tmn);
    await setWeather(response.data.weather[0].icon);
  };

  const temperatura = async (temp) => {
    const cen = temp - 273.15;
    const rend_cen = cen.toFixed(2);
    const result = rend_cen + "°C";
    return result;
  };

  useEffect(() => {
    handleWheater();
  }, []);
  return (
    <>
      <div className="flex max-w flex-col md:flex-row h-[750px] md:h-[450px] m-auto py-8 md:py-16 font-poppins bg-Moradote dark:bg-MoradoO mx-4 my-4 text-white rounded-2xl md:gap-0 gap-8 dark:border dark:border-VerdeC">
        {/* Mapa */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full px-10">
          <MapContainer center={location} zoom={10} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location}>
              <Popup>Hotel Águila</Popup>
            </Marker>
          </MapContainer>
        </div>
        {/* Clima */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full px-10">
          <div className="w-full h-full rounded-2xl border border-MoradoO dark:border-VerdeC p-4">
            <div className="font-poppins text-4xl tracking-tight font-extrabold flex justify-center items-center w-full">
              <span>Clima</span>
            </div>
            <div className="flex flex-col items-center w-full h-full">
              <div className="w-36 h-36">
                {weather == "" ? (
                  <IconContext.Provider
                    value={{
                      color: "white",
                      size: "150px",
                      className: "w-auto h-auto p-0 m-0",
                    }}
                  >
                    <FaCloudSun />
                  </IconContext.Provider>
                ) : (
                  <img
                    src={`https://openweathermap.org/img/wn/${weather}@2x.png`}
                    alt="Clima"
                    className="w-full h-full"
                  />
                )}
              </div>

              <div className="font-poppins text-2xl md:text-5xl tracking-tight font-extrabold flex justify-center items-center w-full">
                <span>{tempT == "" ? "Cargando..." : tempT}</span>
              </div>
              <div className="text-white/60 flex flex-col items-center w-full h-full font-poppins text-sm md:text-md ">
                <div className="tracking-tight font-extrabold flex justify-center items-center w-full">
                  {tempMn == "" ? null : <span>{"Max: " + tempMx}</span>}
                </div>
                <div className="tracking-tight font-extrabold flex justify-center items-center w-full">
                  {tempMx == "" ? null : <span>{"Min: " + tempMn}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
