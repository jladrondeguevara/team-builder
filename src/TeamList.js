import React, {useState} from 'react';
import "./TeamList.css";

const members = [
    {id: 0, fname: "Jeovanni", lname: "Ladron de Guevara", email: "jeovannildg@gmail.com"},
    {id: 1, fname: "Sam", lname: "Lopez", email: "sdif@gmail.com"},
    {id: 2, fname: "Rick", lname: "Garcia", email: "dsjfha@gmail.com"},
    {id: 3, fname: "Ryan", lname: "Nicolas", email: "lfadknf@gmail.com"}
]


const TeamList = (props) => {
    const [teamList, setTeamList] = useState(members); 

    return (
        <div className="TeamList">
            <ul>
                {teamList.map(member => {
                    return <li key={member.id}>{member.fname}<br></br>{member.lname}<br></br>{member.email}</li>
                })}
            </ul>
        </div>
    );
};

export default TeamList;