import React, {useState} from 'react';
import "./TeamList.css";

const members = [
    {fname: "Jeovanni", email: "jeovannildg@gmail.com", role: "CEO"},
    {fname: "Sam", email: "sdif@gmail.com", role: "Lead"},
    {fname: "Rick", email: "dsjfha@gmail.com", role: "Engineer"},
    {fname: "Ryan", email: "lfadknf@gmail.com", role: "Manager"}
]

const TeamList = (props) => {
    const [teamList, setTeamList] = useState(members); 

    return (
        <div className="TeamList">
            <ul>
                {teamList.map(member => {
                    return <li key={member.fname}>{member.fname}<br></br>{member.email}<br></br>{member.role}</li>
                })}
            </ul>
        </div>
    );
};

export default TeamList;