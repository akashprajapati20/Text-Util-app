
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp.js';
import TextForm from './components/TextForm.js';
import React,{useState} from 'react';

import  Alert  from './components/Alert.js';
import About from './components/About';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
// import { Router,Route, Switch } from "react-router";



  
function App() {
  const[mode,SetMode] = useState('light');
  const[alert,SetAlert] = useState(null);

  const showAlert=(message,type)=>{
    SetAlert({msg:message ,
      type:type})
     setTimeout(() => {
       SetAlert(null); 
     }, 1000);

  }
  const toggleMode=()=>{
    if(mode==='light'){
      SetMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode is enabled","success");
    }
    else{
      SetMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
    }
  }
  return (<>
    <Router>
      <NavbarComp title2="Home" mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert}/>
    
    <div className='container my-3'>
      
 
 <Routes>
  
  <Route path="/about" element={<About />} />
  <Route path="/" element={<TextForm heading="Enter your text" showAlert={showAlert}  mode={mode}/>} />
  
 </Routes>
 </div>
 </Router>
 </>
  );
}

export default App;
