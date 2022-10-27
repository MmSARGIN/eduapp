import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Navbar from './components/Navbar';
import TeacherDashboard from "./pages/TeacherDashboard"
import ParentDashboard from "./pages/ParentDashboard"


function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/teacher' element={<TeacherDashboard />} />
        <Route path='/parent' element={<ParentDashboard />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
