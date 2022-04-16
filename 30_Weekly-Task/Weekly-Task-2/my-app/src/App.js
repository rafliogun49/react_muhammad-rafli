import "./App.css";
import Navbar from "./component/Navbar";
import Menu from "./component/Menu";
import {useState} from "react";
import Summary from "./component/Summary";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

function App() {
  const [menuCollapse, setMenuCollapse] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar menuCollapse={menuCollapse} setMenuCollapse={setMenuCollapse} />
        <div className="container-fluid">
          <div className="row">
            {menuCollapse && <Menu />}

            <Routes>
              <Route path="/" element={<Navigate to={"/0"} />} />
              <Route path="/:id" element={<Summary />} />
              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
