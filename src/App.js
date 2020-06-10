import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from './TeamList';
import Form from './Form';

function App() {
  const [member, setMembers] = useState([
    {
      fname: "Jeovanni", 
      email: "jeovannildg@gmail.com", 
      role: "CEO"
    }
  ]);
  const addMember = memberObjParam => {
    setMembers([...member, {...memberObjParam, id: Date.now()}])
  }
  return (
    <div className="App">
      <h1>Team Members</h1>
      <TeamList/>
      <Form/>
    </div>
  );
}

export default App;
