import React, {useState} from 'react';
import ReactDOM from "react-dom";
import './App.css';
import TeamList from './TeamList';
import Form from './Form';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      fname: "Jeovanni", 
      email: "jeovannildg@gmail.com", 
      role: "CEO"
    }
  ]);
  const addNewMember = memberObjParam => {
    setMembers([...members, {...memberObjParam, id: Date.now()}]);
  };
  return (
    <div className="App">
      <h1>Team Members</h1>
      <TeamList members={members}/>
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
