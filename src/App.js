import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NAvBar';
import Home from './components/Home';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
function App() {
  const [name,setName] = useState("Hello");
  const test = async()=>{
    const response = await axios.get("http://localhost:8000/user")
    setTimeout(2000)
    setName(response.data)
  }
  useEffect(()=>{
    test()
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={ <SignupForm />}></Route>
          <Route path='/login' element={ <LoginForm />}></Route>
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Welcome {name?.user_name}</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
