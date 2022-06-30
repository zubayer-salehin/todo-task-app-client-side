import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask';
import Calender from './components/Calender';
import CompleteTask from './components/CompleteTask';
import Navber from './components/Navber';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import { Navigate } from 'react-big-calendar';


function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
      <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/home" element={<AddTask />} />
        <Route path="/completeTask" element={<CompleteTask />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
