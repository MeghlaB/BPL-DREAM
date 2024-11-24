import SelectedPlayer from "./SelectedPlayer"

export default function Selected({choosePlayers ,handlePlayerBtnRemove ,handaleToggoleBtn}) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Selected Player <span>({choosePlayers.length}/6)</span>  </h1>
      {
          choosePlayers.map((player ,idx)=>
          <SelectedPlayer 
          key={idx} player={player}
          handlePlayerBtnRemove={handlePlayerBtnRemove}
          ></SelectedPlayer>)
      }
      <div><button onClick={()=>handaleToggoleBtn('available')} className="btn bg-yellow-300">Add More Players</button></div>
    </div>
  )
}

//  

        
    