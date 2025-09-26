import { FaPhone } from "react-icons/fa6";

function RightExperience() {
    return (
        <div className="basis-[50%]">
            <div className="sm:pl-32 sm:pt-10 relative">
                <span className="w-[165px] h-[175px] hidden sm:block top-[30px] left-[20px] z-0  border-dashed border-gray-400 border-[2px] absolute">
                    <span className="w-[165px] h-[175px] border-[2px] border-dotted border-gray-400 absolute">
                        <span className="w-[150px] h-[160px] border-[2px] top-[4px] left-[4px] border-dashed border-gray-400 absolute"></span>
                    </span>
                </span>
                <div className="flex items-center gap-6 sm:gap-8 mb-15">
                    <h2 className="text-[100px] sm:text-[120px] font-bold text-[#854FEE] z-10 dark:bg-gradient-to-r dark:from-[#12C85B] dark:via-[#6C62FF] dark:to-yellow-500 dark:bg-clip-text dark:text-transparent">
                        2
                    </h2>                    <p className="font-bold text-black dark:text-white text-[18px] sm:text-[25px]"> Years
                        <span className="block">Experience</span>
                        <span className="block">Working</span>
                    </p>
                </div>
                <div className="flex items-center gap-x-3.5">
                    <h2><FaPhone className="text-[40px] sm:text-[50px] "></FaPhone></h2>
                    <div className="">
                        <p className="text-[#854FEE] text-[16px] sm:text-[20px] font-[300]">call us now</p>
                        <p className="text-[19px] sm:text-[25px] font-bold">(+88)-013-3953-9820</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightExperience;