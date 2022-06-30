import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask';
import Calender from './components/Calender';
import CompleteTask from './components/CompleteTask';
import Navber from './components/Navber';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<AddTask />} />
        <Route path="/home" element={<AddTask />} />
        <Route path="/completeTask" element={<CompleteTask />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
