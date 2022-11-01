import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Navbar from './components/Navbar';
import TeacherDashboard from "./pages/TeacherDashboard"
import ParentDashboard from "./pages/ParentDashboard"
import Home from './pages/Home';
import Profil from './components/Profil';
import Lessons from './components/Lessons';
import Announcements from './components/Announcements';
import CreateAnnouncement from './components/CreateAnnouncement';
import Meet from './components/Meet';


function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/teacher' element={<TeacherDashboard />} />
        <Route path='/parent' element={<ParentDashboard />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/program' element={<Lessons />} />
        <Route path='/announcement' element={<Announcements />} />
        <Route path='/createAnnouncement' element={<CreateAnnouncement />} />
        <Route path='/meet' element={<Meet />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
