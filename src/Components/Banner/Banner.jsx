import './banner.css'
import banner from '../../assets/Imges/banner-main.png'
import { ToastContainer} from 'react-toastify';
export default function Banner( { claimButton }) {

  return (
    <div className="bg-black container mx-auto banner flex flex-col items-center justify-center space-y-5 py-11 px-2 lg:px-0">
      <img className='w-52 ' src={banner} alt="" />
      <h1 className='text-[18px] lg:text-2xl font-bold text-center text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className='text-xs lg:text-xl text-center font-bold text-gray-500'> Beyond Boundaries Beyond Limits</p>
      <div className='border max-w-md max-auto px-2 py-2 border-yellow-300 rounded-2xl'>
        <button onClick={()=>claimButton() } className="btn bg-yellow-300 font-bold ">Claim Free Credit</button>
        <ToastContainer/>
      </div>
     
    </div>
  )
}