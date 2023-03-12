import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Pages/Nav';
import Home from './Pages/Main/Home';
import Login from './Pages/Login';
import Createpost from './Pages/Create_Post/CreatePost';
import { auth } from "./config/fairebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          {user && <Route path='/createpost' element={<Createpost/>}/>}
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
