import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Favorites from './Components/Favorites';
import { ToastContainer } from "react-toastify";
import PrivateComp from './Components/Context/Privateroute';
import Profile from './Components/Profile';


function App() {

  return (
    <div className="App">
     <ToastContainer/>
     <NavbarComponent/>
     <Routes>
     <Route path = "/" element = {<PrivateComp ><Home/></PrivateComp>} />
     <Route path = "/signup" element = {<Signup/>} />
     <Route path = "/login" element = {<Login/>} />
     <Route path = "/favorites" element = {<PrivateComp><Favorites/></PrivateComp>} />
     <Route path = "/profile" element = {<PrivateComp><Profile/></PrivateComp>} />
     <Route path = "*" element = {<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
