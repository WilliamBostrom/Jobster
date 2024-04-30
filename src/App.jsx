import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Error, Landing, Register } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
