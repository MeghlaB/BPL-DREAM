
export default function NewsLetter() {
  return (
    <div className=" px-2 container m-auto relative -top-52 pb-7 ">
      <div className=" border bg-white/15 p-5 rounded-3xl border-white  ">
        <div className="bg-white rounded-2xl banner flex flex-col items-center justify-center text-center space-y-6 py-32  ">
        <h1 className=' text-[19px] lg:text-2xl font-bold text-black'>Subscribe to our Newsletter</h1>
        <h3 className=' text-[10px] lg:text-xl text-gray-500'>Get the latest updates and news right in your inbox!</h3>
          <div className=""> 
            <input type="email" placeholder="Enter your email" className="py-2 px-4 rounded-lg border border-gray-500 outline-amber-400" />
            <button className="btn bg-gradient-to-tr from-orange-200 via-orange-400 to-purple-500  join-item shadow-inner px-2">Subscribe</button>
            
        </div>
        </div>
      </div>
    </div>
  )
}
