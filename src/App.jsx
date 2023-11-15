import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Landing/Hero";
import Resumen from "./components/Landing/Resumen";
import AuthProvider from "./context/AuthProvider";
import Header from "./components/Header/Header";
import DarkModeGlobal from "./context/DarkModeProvider";
import Services from "./components/Landing/Services";
import Info from './components/Landing/Info'
import ReviewsL from './components/Landing/ReviewsL'
import Login from './components/Login'
import RegisterForm from "./components/Registro";
import Footer from './components/Footer'
import Precios from "./components/Reservas/Precios";
import Blog from "./components/Blog/Blog";
import ReservasForm from "./components/Reservas/Reservas";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <DarkModeGlobal>
          <BrowserRouter>
            <Header />
            <Routes>
            <Route path="/" element={<><Hero /><Resumen/><Services/><Info /><ReviewsL /></>} />
            
            <Route element={<ProtectedRoute allowedRoles={["usuario", "admin"]} />}>
            <Route path="/Reserva" element={<><ReservasForm/><Precios/></>} />
              </Route>



              <Route path="/Login" element={<><Login/></>} />
              <Route path="/Registro" element={<><RegisterForm/></>} />
              <Route path="/Blog" element={<Blog/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
          
        </DarkModeGlobal>
      </AuthProvider>
    </>
  );
}

export default App;
