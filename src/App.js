import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Signin from './component/Signin'
import Signup from './component/Signup'
import Explore from './component/Explore'
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
