import {BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
// import Nav from './componants/Nav';
import SignIn from './componants/pages/SignIn';
import Home from './componants/pages/Home';
import About from './componants/pages/About';
import SignUp from './componants/pages/SignUp';
import Profile from './componants/pages/Profile';
import NavBar from './componants/compo/NavBar';

function App() {
  return (
    <BrowserRouter>

    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
