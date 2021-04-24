  import './App.css';
  import playerData from './FakeData/fakedata.json'
  import { useEffect, useState } from 'react';
  import PlayerList from './Components/PlayerList/PlayerList';
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
  import MyTeam from './Components/MyTeam/MyTeam';

  function App() {
    //declaring state
    const[player,setPlayer]=useState([])
    const[myTeam,setMyTeam]=useState([])

    //set fakeData using useEffect from json file
    useEffect(()=>{
      setPlayer(playerData);
    },[])

    //function for button

    const handleAddedPlayer=(player)=>{
      const newList=[...myTeam,player];
      setMyTeam(newList);
    }
    return (
      <div className="App">
      <h1 className="mt-2">UEFA Champion League</h1>
      <h2 className="mt-3 ">Make your dream team today</h2>
      <div className="blank"></div>
         <div className="player-field">
              <div className="playerList">
              {
                player.map(player=> <PlayerList player={player} handleAddedPlayer={handleAddedPlayer} key={player.id}></PlayerList>)
              }
              </div>
              <div className='my-team mt-4'>
                <MyTeam myTeam={myTeam}></MyTeam>
              </div>
        </div>
      </div>
    );
  }
  export default App;
