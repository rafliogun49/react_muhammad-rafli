import "./App.css";
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
