import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Error, Landing, Register } from "./pages/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center text-center" />
    </BrowserRouter>
  );
};

//Toastify__toast för css
export default App;
