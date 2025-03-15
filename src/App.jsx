import Home from "./pages/home";
import Login from "./pages/login";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from "./pages/register";
import Specialist from "./pages/specialist";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/navbar";

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/navbar" element = {<Navbar/>}/>
      <Route path="/register" element = {<Register/>}/>
      <Route path="/specialist" element = {<ProtectedRoute><Specialist/></ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
