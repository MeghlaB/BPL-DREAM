
import { MdDeleteForever } from "react-icons/md";
export default function SelectedPlayer({player ,handlePlayerBtnRemove}) {
    console.log(handlePlayerBtnRemove)
    // console.log(player)
    const {image,name,role,biddingPrice} =player
  return (
    <div className='container m-auto pt-4 '>
        <div className='w-full mt-2-4  mb-3 pl-4 bg-base-200 rounded-lg flex justify-between'>
            <div className="p-3" >
                <div className='flex items-center gap-5'>
                    <div className=''>
                        <img className='w-[80px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full object-cover' src={image} alt={name}/>
                    </div>
                   <div>
                       <h1 className='text-[18px] lg:text-2xl font-bold'>{name}</h1>
                       <h5 className='text-[18px] text-black'>{role}</h5>
                       <p className="text-[16px] text-black">{biddingPrice}</p>
                   </div>
               </div>
            </div>
            <div className="p-3">
            <h1 onClick={()=>handlePlayerBtnRemove(player.playerId)} className="text-5xl"> <MdDeleteForever /></h1>
            </div>
        </div>
        
    </div>
  )
}
