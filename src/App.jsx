import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Landing/Hero";
import Resumen from "./components/Landing/Resumen";
import AuthProvider from "./context/AuthProvider";
import Header from "./components/Header/Header";
import DarkModeGlobal from "./context/DarkModeProvider";
import Services from "./components/Landing/Services";

function App() {
  return (
    <>
      <AuthProvider>
        <DarkModeGlobal>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<><Hero /><Resumen/><Services/></>} />
            </Routes>
          </BrowserRouter>
        </DarkModeGlobal>
      </AuthProvider>
    </>
  );
}

export default App;
