import { useEffect, useState } from "react"
import Player from "../../Player/Player"


export default function Availble({choosePlayer}) {
    const[players , setPlayers] = useState([]) 

    useEffect(()=>{
        fetch('Player.json')
        .then(res => res.json())
        .then(data => setPlayers(data.players))
    },[])
  return (
    <div>
      <h1 className="text-2xl font-bold">Available Players</h1>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 lg:px-6 py-3 items-center justify-center">
      {
            players.map((player)=> 
            <Player 
            key={player.playerId} 
            player={player}
            choosePlayer={choosePlayer}
            ></Player>)
        }
    </div>
    </div>
  )
}
