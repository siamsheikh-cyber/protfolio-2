import { motion } from "framer-motion";

function TopProject() {
    return (
        <>
            <div className="text-center mb-[50px]">

                <motion.h1
                    className="text-[19px] sm:text-2xl font-bold mb-3 block dark:hidden"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Home Light Demos
                </motion.h1>

                <motion.h1
                    className="text-[19px] sm:text-2xl font-bold mb-3 hidden dark:block"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Home Dark Demos
                </motion.h1>


                <motion.p
                    className="text-[#92a1b5] w-[100%] sm:w-[60%] mx-auto text-[14px] font-[300]"
                    initial={{ opacity: 0, y: -50 }}      // উপরের দিকে 50px উপরে শুরু
                    whileInView={{ opacity: 1, y: 0 }}    // viewport এ এলে আসল অবস্থানে
                    viewport={{ once: true, amount: 0.5 }} // একবার trigger, 50% দেখা হলে
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    A clean and minimal personal portfolio showcasing my creative projects, professional works, and design journey.
                </motion.p>

            </div>
        </>
    );
}

export default TopProject;