import Auth from "./Pages/Auth";
import Application from "./Pages/Application";
import Dashboard from "./Pages/Dashboard";
import { Routes, Route} from 'react-router-dom'
import "./App.css";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Auth/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/application" element={<Application/>}/>
     </Routes>
    </div>
  );
}

export default App;
