import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import About from './components/About';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode,setmode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
   setTimeout(() =>{
    setAlert(null);
   },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='Text-App Dark-Mode'


    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='Text-App Light-Mode'
    }

  }
  return (
   <>
   <Router>
   <Navbar title="Text-app" about="About" home="Home" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Switch>
          
          <Route exact path="/About">
            <About mode={mode}/>
          </Route>
         
          <Route exact path="/">
          <Textform showAlert={showAlert} heading="enter video" mode={mode}/>

          </Route>
        </Switch>
        </div>

        </Router>

   </>
  );
}

export default App;
