import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/HomePage";

export default function App() {

  // const hideNavbar = location.pathname === "/login" || location.pathname === "/cadastrar";

  return (
    <>
      {/* {!hideNavbar && <Navbar />} */}

      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        />
      </Routes>
    </>
  );
}