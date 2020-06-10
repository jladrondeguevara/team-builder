import React, {useState} from 'react';
import "./TeamList.css";

// const members = [
//     {fname: "Jeovanni", email: "jeovannildg@gmail.com", role: "CEO"},
//     {fname: "Sam", email: "sdif@gmail.com", role: "Lead"},
//     {fname: "Rick", email: "dsjfha@gmail.com", role: "Engineer"},
//     {fname: "Ryan", email: "lfadknf@gmail.com", role: "Manager"}
// ]

const TeamList = (props) => {
    const [teamList, setTeamList] = useState(props.members); 

    return (
        <div className="TeamList">
            {props.members.map(member => (
                // return <li key={member.fname}>{member.fname}<br></br>{member.email}<br></br>{member.role}</li>
                <div className="member" key={member.id}>
                    <h2>{member.fname}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
        
    );
};

export default TeamList;