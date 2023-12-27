import './App.css';
import Login from './components/login.js';
import Register from './components/register.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

  <Routes>
    
    <Route path="/login" element={<Login />} />
    
    <Route path="/register" element={<Register />} />

  </Routes>

</BrowserRouter>
  );
}

export default App;
