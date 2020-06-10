import React, {useState} from 'react';
import "./TeamList.css";

const TeamList = (props) => {
    const [teamList, setTeamList] = useState(props.members); 

    return (
        <div className="TeamList">
            {props.members.map(member => (
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