
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router ,
  Switch,
  Route
}from "react-router-dom";




function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert(
      {
        msg : message,
        type : type
      })
     setTimeout( () => {
      setAlert(null)
     },1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "Textutils" about= "About us" mode = {mode} toggleMode = {toggleMode} />
    <Alert alert = {alert} />
    <div className='container my-3'>  
    <Switch>
      <Route exact path = "/about">
    <About mode={mode} />
      </Route>
      <Route exact path="/">
    <Textform heading = "Enter the text below" mode = {mode} showAlert = {showAlert}/>
      </Route>
    </Switch>
    </div>
    </Router>
</>
)
}



export default App;
