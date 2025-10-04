import { motion } from "framer-motion";

function LeftContact() {
    return (
        <motion.div
            className="lg:w-[50%] mb-5 lg:mb-0"
            initial={{ opacity: 0, x: 100 }}       // ডান থেকে শুরু
            whileInView={{ opacity: 1, x: 0 }}     // viewport এ এলে আসল অবস্থানে
            viewport={{ once: true, amount: 0.5 }} // একবার trigger, 50% দেখা হলে
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <form className="dark:bg-[black] bg-white text-[#0D1224] p-8 border border-gray-600 dark:text-white">

                <p className="dark:text-[#DDD6FE] hidden sm:block text-[14px] mb-3">
                    If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
                </p>

                <h5 className="text-[18px] mb-1.5">Your Name:</h5>
                <input
                    className="dark:bg-[#10172D] w-full p-3 rounded-[5px] border border-gray-600 focus:border-[#16F2B3] focus:ring-0.5 focus:ring-[#16F2B3] outline-none"
                    type="text"
                />

                <h5 className="text-[18px] mb-1.5 mt-3">Your Email:</h5>
                <input
                    className="dark:bg-[#10172D] w-full p-3 rounded-[5px] border border-gray-600 focus:border-[#16F2B3] focus:ring-0.5 focus:ring-[#16F2B3] outline-none"
                    type="email"
                />

                <h5 className="text-[18px] mb-1.5 mt-3">Your Message:</h5>
                <textarea
                    className="dark:bg-[#10172D] w-full p-3 h-[130px] rounded-[5px] border border-gray-600 focus:border-[#16F2B3] focus:ring-0.5 focus:ring-[#16F2B3] outline-none"
                />


                <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <button className="mt-1.5 dark:mt-2 gap px-6 py-3 rounded-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md cursor-pointer uppercase hover:bg-gradient-to-r hover:from-[#12C85B] hover:via-[#6C62FF] hover:to-yellow-500 hover:bg-clip-text hover:border hover:border-cyan-300 hover:text-transparent">
                        Send Message
                    </button>
                </motion.div>


            </form>
        </motion.div>
    );
}

export default LeftContact;
