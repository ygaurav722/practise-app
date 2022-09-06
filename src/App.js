import React,{Component} from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import Users from './pages/Users';
import About from './pages/About';
import NavBar from './NavBar';
import SignIn from './pages/SignIn';


class App extends Component {
  render(){
  return (  
    <div>    
      <Router>
        <NavBar/>
        <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/users' element={<Users/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
  }
}

export default App;
