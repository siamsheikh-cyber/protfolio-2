function LeftHero() {
    return (
        <div className="">
            <h2 className="text-[25px] sm:text-[38px] font-bold pb-3.5 relative">
                HELLO
                <span className="absolute hidden top-1/2 -translate-y-1/2 right-27 ml-3 w-72 h-[2px] bg-black dark:bg-white"></span>
            </h2>




            <h2 className="text-[38px] sm:text-[50px] font-bold pb-3.5 dark:bg-gradient-to-r dark:from-[#12C85B] dark:via-[#6e64fd] dark:to-yellow-500 dark:bg-clip-text dark:text-transparent">I AM SIAM SHEIKH</h2>

            <p className="text-[18px] sm:text-[28px] font-bold pb-3.5 dark:bg-gradient-to-r dark:from-[#6C62FF] dark:via-[#12C85B] dark:to-yellow-500 dark:bg-clip-text dark:text-transparent">MERN STACK DEVELOPER</p>

            <div className="flex gap-4 py-6">
                {/* <!-- Button 1 --> */}
                <button className="px-6 py-3  font-semibold text-white 
                    bg-gradient-to-r from-[#4758DD] via-[#8155f0] to-white
                    shadow-lg hover:bg-gradient-to-r hover:from-white hover:via-red-500 hover:to-pink-500  cursor-pointer
                    ">
                    HIRE ME
                </button>

                {/* <!-- Button 2 --> */}
                <button className="px-6 py-3  font-semibold text-white 
                    bg-gradient-to-r from-pink-500 via-red-500 to-white
                    shadow-lg hover:bg-gradient-to-r hover:from-white hover:via-[#4758DD] hover:to-blue-500  cursor-pointer
                    ">
                    GET CV
                </button>
            </div>

        </div>
    );
}

export default LeftHero;