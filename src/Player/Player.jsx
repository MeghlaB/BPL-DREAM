import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa6";
export default function Player({player ,choosePlayer}) {

    const {name,country,image,battingType,biddingPrice,role,bowlingType,rating} = player
  return (
    <div>
        <div>
      <div className="card bg-base-100 w-full border">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt={name}
      className="rounded-xl object-cover w-full  h-52" />
  </figure>
  <div className="card-body  text-left">
    <h2 className="card-title items-center font-bold"><span className="text-black text-2xl"><CgProfile /></span>{name}</h2>
    <div className="flex justify-between pb-3">
        <h3 className="flex gap-4 items-center"><FaFlag /><span className="text-gray-500">{country}</span></h3>
        <button className="btn ">{role}</button>
    </div>
    <hr />
    <div className=" pt-3">
        <div className="flex justify-between pt-3 gap-8">
          <h1 className="text-2xl font-bold">Rating</h1>
          <h1 className="text-[18px] font-semibold ">{rating}</h1>
        </div>
        <div className="flex justify-between pt-3 gap-8">
            <h1 className="text-[18px] font-semibold ">{battingType}</h1>
            <h1 className="text-[14px] font-semibold text-gray-500">{bowlingType && bowlingType !== "None"?bowlingType : "N/A"}</h1>
        </div>
      <div className="flex justify-between gap-9 pt-4 items-center">
        <h1 className="text-xl font-bold">${biddingPrice}</h1>
        <button onClick={()=>choosePlayer(player)} className="btn">Choose Player</button>
      </div>
    </div>
  </div>
</div>
      </div> 
    </div>
  )
}
