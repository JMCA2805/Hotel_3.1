import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Landing/Hero";
import Resumen from "./components/Landing/Resumen";
import AuthProvider from "./context/AuthProvider"

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Resumen/> } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

    </>
  );
}

export default App;
