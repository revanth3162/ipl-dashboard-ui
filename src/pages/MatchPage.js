
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../component/MatchDetailCard';
import { YearSelector } from '../component/YearSelector';
import "./MatchPage.scss"
export const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();
    useEffect(
      () => {
        const fetchMatches = async () =>{
          const response = await fetch(`http://ipl-dashboard-server-app-ipl-dashboard-server.linuxops-pune-a33.conygre.com//team/${teamName}/matches?year=${year}`);
          const data = await response.json();
          setMatches(data);
        };
        fetchMatches();
      }, [teamName, year]
    );

  return (
    <div className="MatchPage">
      <div className="year-selector">
          <h3>Select Year</h3>
          <YearSelector teamName = {teamName}/>
      </div>
       
       <div>
       <h1 className="page-heading">{teamName} matches in {year}</h1>
       {matches.map(match => <MatchDetailCard teamName = {teamName} match={match}/>)}
       </div>
       
    </div>
  );
}

export default MatchPage;
