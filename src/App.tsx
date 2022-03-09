import React, { useState } from "react";
import "./App.css";
import { TypeStudent } from "./types/types";
import { DetailStudent } from "./components/detail/DetailStudent";
import { Navbar } from "./components/pages/navbar/Navbar";
import { Footer } from "./components/pages/footer/Footer";
import { callApi } from "./api/callApi";
import { TypeUser, TypeUserContext } from "./types/types";
import { userContext } from "./hook/userContext";

function App() {
  //*****************
  const myStudent: TypeStudent = {
    name: "Matteo",
    surname: "Bellia",
    login: "matteobelliaa",
    classe: "Full-Stack Developer 2",
    repos: null,
  };

  const [user, setUser] = useState<TypeUser>({
    username: "Matteo",
    password: "Password!$",
    session: false,
  });

  //Variabile di stato seza Type
  const [student, setStudent] = useState(myStudent);
  const userValue : TypeUserContext = { user };

  return (
    <div className="App">
      <userContext.Provider value={userValue}>
        <Navbar />
        <DetailStudent {...student} />
        <button onClick={() => callApi(student)}>call</button>
        <Footer />
      </userContext.Provider>
    </div>
  );
}

export default App;
