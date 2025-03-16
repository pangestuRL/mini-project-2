import Home from "./pages/home";
import Login from "./pages/login";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from "./pages/register";
import Specialist from "./pages/specialist";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/navbar";
import SpecialistDetail from "./pages/Specialist Detail";


function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/navbar" element = {<Navbar/>}/>
      <Route path="/register" element = {<Register/>}/>
      <Route path="/specialist" element = {<ProtectedRoute><Specialist/></ProtectedRoute>}/>
      <Route path="/specialist/:id" element ={<SpecialistDetail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
