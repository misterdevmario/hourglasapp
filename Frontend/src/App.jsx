import Auth from "./Pages/Auth";
import Application from "./Pages/Application";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/application" element={<Application />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;

