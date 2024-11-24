
import profile from '../../assets/Imges/logo.png'
import coinsPic from '../../assets/Imges/icons8-coins-64.png'
export default function Hearder( {coins}) {
  return (
    <div className='container m-auto mt-3  sticky z-[5] lg:z-15 top-0 bg-white/5 backdrop-blur-md transition-all duration-300 pb-8'>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex="0"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Fixture</a></li>
        <li><a>Teams</a></li>
        <li><a>Schedules</a></li>
      </ul>
    </div>
    <a className=" text-xl w-12"><img src={profile} alt="" /></a>
  </div>
  <div className="navbar-end gap-10">
  <div className=" hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 ">
      <li><a>Home</a></li>
        <li><a>Fixture</a></li>
        <li><a>Teams</a></li>
        <li><a>Schedules</a></li>
    </ul>
  </div>
    <a className="btn"><span>{coins}</span><span className=''>Coin</span><span><img className=' w-5 lg:w-7' src={coinsPic} alt="" /></span> </a>
  </div>
</div>
    </div>
  )
}
