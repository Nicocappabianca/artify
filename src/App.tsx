import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login } from "@/pages";
import { Navbar } from "@/components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
