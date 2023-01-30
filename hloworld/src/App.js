import './App.css';
import About from './components/About';
import React,{useState} from 'react';

import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
const [mode,setMode]=useState('light')
const [alert,setAlert] =useState(null);


const showAlert=(message,type)=>{

  setAlert({msg:message,
            type:type})
            setTimeout(() => {
              setAlert(null)
            }, 2000);

}



const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor = 'grey'
    showAlert("Dark mode has been enabled","success")
  }
  else{setMode('light')
  document.body.style.backgroundColor = 'white'
  showAlert("Light mode has been enabled","success")
}
}

  return (
   <section>

<Navbar title = "Text Utils" mode = {mode} toggleMode={toggleMode}/> 

<Alert alert={alert} />

    <About showAlert={showAlert}/>
    
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading = "Enter Your Text Below" mode={mode}/>
    </div>

   </section>
  );
}

export default App;

