import { motion } from "framer-motion";

function BottomProject() {
    // light images
    const images = [
        { src: "../public/index_1.png", alt: "site_1" },
        { src: "../public/index_2.png", alt: "site_2" },
        { src: "../public/index_3.png", alt: "site_3" },
        { src: "../public/index_4.png", alt: "site_4" },
        { src: "../public/index_5.png", alt: "site_5" },
        { src: "../public/index_6.png", alt: "site_6" },
    ];

    // dark images 
    const darkImages = [
        { src: "../public/dindex_1.png", alt: "site_1" },
        { src: "../public/dindex_2.png", alt: "site_2" },
        { src: "../public/dindex_3.png", alt: "site_3" },
        { src: "../public/dindex_4.png", alt: "site_4" },
        { src: "../public/dindex_5.png", alt: "site_5" },
        { src: "../public/dindex_6.png", alt: "site_6" },
    ];
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                {/* light mode */}
                {images.map((img, index) => (
                    <motion.img
                        key={index}
                        className="bg-[#F7F8F9] shadow-[0_4px_3px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:transform hover:scale-101 transition duration-400 cursor-pointer block dark:hidden"
                        src={img.src}
                        alt={img.alt}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                    />
                ))}



                {/* dark mode */}

                {darkImages.map((img, index) => (
                    <motion.img
                        key={index}
                        className="bg-[#F7F8F9] shadow-[0_4px_3px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:transform hover:scale-101 transition duration-400 cursor-pointer hidden dark:block"
                        src={img.src}
                        alt={img.alt}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                    />
                ))}



            </div>
        </>
    );
}

export default BottomProject;