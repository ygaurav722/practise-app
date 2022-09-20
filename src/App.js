import React,{Component} from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import SignUp from './component/SignUp';
import HomePage from './component/HomePage';
import Users from './component/Users';
import About from './component/About';
import NavBar from './component/NavBar';
import SignIn from './component/SignIn';


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
            {/* <Route path='/signin' element={<SignIn/>} /> */}
            <Route path='/users' element={<Users/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
  }
}

export default App;
