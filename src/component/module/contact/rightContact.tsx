import { BiSolidPhoneCall } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io"
import { LuMapPin } from "react-icons/lu"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { TiSocialFacebookCircular } from "react-icons/ti"

function RightContact() {
    return <>
        <div className="lg:w-[50%] lg:block md:hidden flex items-start mb-15 lg:mb-0">
            <div className=" lg:pl-20 sm:pt-30">
                <div className="flex gap-5 mb-7 items-center ">
                    <MdOutlineAlternateEmail className="bg-gray-500  cursor-pointer text-[45px] dark:text-black p-3 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />

                    <p className="text-1xl text-black dark:text-white">siamthecoder@gmail.com</p>
                </div>
                <div className="flex gap-5 mb-7 items-center ">
                    <BiSolidPhoneCall className="bg-gray-500  cursor-pointer text-[45px] dark:text-black p-3 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    <h1 className="text-1xl text-black dark:text-white">+8801339539820</h1>
                </div>
                <div className="flex gap-5 items-center ">
                    <LuMapPin className="bg-gray-500  cursor-pointer text-[45px] dark:text-black p-3 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    <p className="text-1xl text-black dark:text-white">DHAKA, BANGLADESH</p>
                </div>
                <div className="flex flex-wrap gap-5 lg:gap-7 mt-13">
                    <FaGithub className="bg-gray-500 text-white  cursor-pointer text-[55px] sm:text-[65px] dark:text-black p-4 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    <IoLogoLinkedin className="bg-gray-500 text-white  cursor-pointer text-[55px] sm:text-[65px] dark:text-black p-4 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    <FaSquareInstagram className="bg-gray-500  text-white cursor-pointer text-[55px] sm:text-[65px] dark:text-black p-4 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300" />
                    <TiSocialFacebookCircular className="bg-gray-500  cursor-pointer text-[55px] sm:text-[65px] dark:text-black p-4 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300 text-white" />
                </div>
            </div>
            <div>
                <button className="hidden  font-bold border dark:border-gray-400 px-3 py-2 [writing-mode:vertical-rl] text-center relative text-black dark:text-white">
                    CONTACT
                </button>
            </div>

        </div>
    </>
}

export default RightContact