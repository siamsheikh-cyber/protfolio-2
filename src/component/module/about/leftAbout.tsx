import { motion } from "framer-motion";

function LeftAbout() {
    return (
        <>
            <div className="w-full md:basis-[50%]">

                <div className="flex justify-center md:pr-10 md:py-5">
                    <motion.img
                        src="../public/ex-3.png"
                        alt="photo"
                        className="w-[100%] sm:w-[80%]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />

                </div>

            </div>
        </>
    );
}

export default LeftAbout;