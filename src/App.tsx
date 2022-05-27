import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Nofound from "./components/nofound/Nofound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/myapp" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/myapp/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Nofound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
