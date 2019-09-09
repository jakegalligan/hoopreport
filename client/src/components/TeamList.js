import React, {useState, useEffect} from 'react';
import './App.css';
import Team from './Team';

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  //get the list of teams from the API and add them to the teams array
  useEffect(()=> {
      fetch('https://www.balldontlie.io/api/v1/teams')
      //convert response to json
        .then(res => res.json())
      //loop through array and add teams to teams array
        .then (json => setTeams(json.data))
  }, [])

  console.log(teams);


  return (
    <div>Hello</div>
  )
}


export default TeamList;