import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hotel from "./views/Hotel";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hotel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
