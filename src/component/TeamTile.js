import {React} from 'react';
import {Link} from 'react-router-dom';
import "./TeamTile.scss";
export const TeamTile =({teamName}) => {
    
    let teamsList = {
        RR:"-Logo.jpg",
        CSK:"-Logo.png",
        DC:"-Logo.jpg",
        GL:"-Logo.jpg",
        GT:"-Logo.png",
        KKR:"-Logo.png",
        Kochi:"-Logo.png",
        LSG:"-Logo.png",
        MI:"-Logo.png",
        PBKS:"-Logo.png",
        PWI:"-Logo.jpg",
        RCB:"-Logo.png",
        RPS:"-Logo.jpg",
        SRH:"-Logo.png"
    }
return(
    <div className="TeamTile">
        <Link to={`/team/${teamName}`}>
            {console.log(process.env.PUBLIC_URL+teamName+teamsList[teamName])}
            <img src={process.env.PUBLIC_URL+"Teams_Logo/"+teamName+teamsList[teamName]} alt="Team Logo"/>
        </Link>
    </div>
)
}
