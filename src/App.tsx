import React, {useState} from 'react';
import './App.css';
import { Login } from './components/pages/login/Login';
import { TypeStudent } from './types/types';
import { DetailStudent } from "./components/detail/DetailStudent"
import { Navbar } from "./components/pages/navbar/Navbar"
import { Footer } from "./components/pages/footer/Footer"
import { callApi } from "./api/callApi"

function App() {
  //*****************
  const myStudent: TypeStudent = {
    name: "Matteo",
    surname: "Bellia",
    login: "matteobelliaa",
    classe: "Full-Stack Developer 2",
    repos: null
  }

  //Variabile di stato seza Type
  const [student, setStudent] = useState(myStudent);

  return (
    <div className="App">
      <Navbar />
      <DetailStudent {...student}/>
      <button onClick={(() => callApi(student))}>call</button>
      <Footer />
    </div>
  );
}

export default App;
