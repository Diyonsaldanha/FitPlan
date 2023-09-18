import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import { Navbar } from './components/Navbar';
import Register from './components/Register';
import Home from './components/Home';
import Info from './components/Info';
import Details from './components/Details';
import Edit from './components/Edit';
import Protected from './components/Protected';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Protected><Home /></Protected>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/info" element={<Protected><Info /></Protected>} />
          <Route path='/edit/:id' element={<Protected><Edit /></Protected>} />
          <Route path='/view/:id' element={<Protected><Details /></Protected>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
