import Dashboard from "./Pages/Dashboard/Dashboard";
import DaysRender from './Pages/Days/DaysRender'
import NotFound from "./Pages/NotFound";
import EditCarousel from './components/App/AppCarouselActivities/EditCarousel'
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {useApplicationInfo} from './context/ApplicationContext'
import "./App.css";


function App() {
  const {monday,thuesday,wednesday,thursday,friday,saturday,sunday} = useApplicationInfo()

  return (
    <div className="App">
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/monday" element={<DaysRender day ={monday} />} />
        <Route exact path="/thuesday" element={<DaysRender day ={thuesday} />} />
        <Route exact path="/wednesday" element={<DaysRender day ={wednesday} />} />
        <Route exact path="/thursday" element={<DaysRender day ={thursday} />} />
        <Route exact path="/friday" element={<DaysRender day ={friday} />} />
        <Route exact path="/saturday" element={<DaysRender day ={saturday} />} />
        <Route exact path="/sunday" element={<DaysRender day ={sunday} />} />
        <Route exact path="/monday/:id" element={<EditCarousel day ={monday} />} />
        <Route exact path="/thuesday/:id" element={<EditCarousel day ={thuesday} />} />
        <Route exact path="/wednesday/:id" element={<EditCarousel day ={wednesday} />} />
        <Route exact path="/thursday/:id" element={<EditCarousel day ={thursday} />} />
        <Route exact path="/friday/:id" element={<EditCarousel day ={friday} />} />
        <Route exact path="/saturday/:id" element={<EditCarousel day ={saturday} />} />
        <Route exact path="/sunday/:id" element={<EditCarousel day ={sunday} />} />
   
   
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;

