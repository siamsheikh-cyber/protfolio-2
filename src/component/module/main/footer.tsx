import { motion } from "framer-motion";

function Footer() {
    return (
        <>

            <motion.div
                className="bg-[#0D1224] p-8 text-white"
                initial={{ opacity: 0, y: 50 }}        // নিচ থেকে offset
                whileInView={{ opacity: 1, y: 0 }}     // viewport এ এলে আসল অবস্থানে
                viewport={{ once: true, amount: 0.5 }} // একবার trigger, 50% দেখা হলে
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <p>
                    © Developer Portfolio{" "}
                    <span className="text-[#0EB9A5] cursor-pointer">
                        <a href="https://www.facebook.com/share/1CBd9ya6zm/">Siam Sheikh</a>
                    </span>
                </p>
            </motion.div>

        </>
    );
}

export default Footer;