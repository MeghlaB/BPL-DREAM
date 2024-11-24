import footerImage from "../../src/assets/Imges/logo-footer.png"
import NewsLetter from "../NewsLetter/NewsLetter"

export default function Footer() {
  return (
    <div className="bg-[#06091A] relative mt-64 ">
        <div className="">
            <NewsLetter></NewsLetter>
        </div>
        <div className=" container  mx-auto -mt-40 bg-[#06091A] flex flex-col justify-center items-center" >
            <div>
             <img className="mb-9" src={footerImage} alt="" />
            </div>
            <footer className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 pt-4 gap-6lg:gap-36 mb-10  items-center justify-center space-y-6">
            <nav className="px-5 lg:px-2">
                <h6 className="font-bold text-white pb-3">About Us</h6>
                <p className="max-w-md text-[16px] text-gray-500">We are a passionate team dedicated to providing the best services to our customers.</p>
            </nav>
            <nav className="px-5 lg:px-2">
                <h6 className="font-bold text-white pb-3">Quick Links</h6>
                <ul className="max-w-md list-disc text-[16px] text-gray-500 ml-8">
                    <li>Homes</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <nav className="px-5 lg:px-2">
                <h6 className="font-bold text-white pb-3">Subscribe</h6>
                <p className="max-w-md text-[16px] text-gray-500">Subscribe to our newsletter for the latest updates.</p>
                <div className="join pt-2 max-w-xs">
                    <input
                    type="text"
                    placeholder="Enter your email"
                    className=" join-item" />
                    <button className="btn bg-gradient-to-tr from-orange-200 via-orange-400 to-purple-500  join-item shadow-inner">Subscribe</button>
                </div>
            </nav>
            </footer>
        </div>
        <div className="max-w-xs md:max-w-sm lg:max-w-[850px] m-auto">
        <hr />
        </div>
        <div className="text-center text-xl text-gray-500 pb-4">
            <h3 className="pt-2 text-xs">@2024 Your Company All Rights Reserved.</h3>
        </div>
   
    </div>
  )
}
