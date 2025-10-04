import { motion } from "framer-motion"
function RightHero() {
    return (
        <div className="pr-6 pt-6 md:pr-0 md:pt-6 lg:pr-6 lg:pt-6 dark:pt-6">
            <div
                className=""
            >
                <motion.img
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                    src="../public/EX-1.png"
                    alt="photo"
                    className="max-w-full"
                />
            </div>
        </div>
    );
}

export default RightHero;