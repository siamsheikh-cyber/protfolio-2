import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; // ✅ type-only import

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as any }, // ✅ TS-safe
    },
};

function LeftHero() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className=""
        >
            <motion.h2
                variants={item}
                className="text-[25px] sm:text-[38px] font-bold pb-3.5 relative"
            >
                HELLO
                <span className="absolute hidden top-1/2 -translate-y-1/2 ml-3 w-72 h-[2px] bg-black dark:bg-white"></span>
            </motion.h2>

            <motion.h2
                variants={item}
                className="text-[38px] sm:text-[50px] font-bold pb-3.5 
        dark:bg-gradient-to-r dark:from-[#14d662] dark:via-[#6e64fd] dark:to-yellow-500 
        dark:bg-clip-text dark:text-transparent"
            >
                I AM SIAM SHEIKH
            </motion.h2>

            <motion.p
                variants={item}
                className="text-[18px] sm:text-[28px] font-bold pb-3.5 
        dark:bg-gradient-to-r dark:from-[#6C62FF] dark:via-[#14d762] dark:to-yellow-500 
        dark:bg-clip-text dark:text-transparent"
            >
                MERN STACK DEVELOPER
            </motion.p>

            <motion.div variants={item} className="flex gap-4 py-6">
                <button
                    className="px-6 py-3 font-semibold text-white 
          bg-gradient-to-r from-[#4758DD] via-[#8155f0] to-white
          shadow-lg hover:bg-gradient-to-r hover:from-white hover:via-red-500 hover:to-pink-500 cursor-pointer"
                >
                    HIRE ME
                </button>

                <button
                    className="px-6 py-3 font-semibold text-white 
          bg-gradient-to-r from-pink-500 via-red-500 to-white
          shadow-lg hover:bg-gradient-to-r hover:from-white hover:via-[#4758DD] hover:to-blue-500 cursor-pointer"
                >
                    GET CV
                </button>
            </motion.div>
        </motion.div>
    );
}

export default LeftHero;
