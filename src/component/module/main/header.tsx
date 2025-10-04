import { useState } from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "@/component/mode-toggle";
import { Link } from "react-router";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200/30 dark:border-gray-800/30 shadow-sm"
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                {/* Logo */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8 hidden sm:block"
                        alt="Logo"
                    />
                    <span className="self-center text-[20px] sm:text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        SIAM SHEIKH
                    </span>
                </motion.a>

                {/* Right section */}
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <motion.div whileHover={{ rotate: 15 }} whileTap={{ rotate: -15 }}>
                        <ModeToggle />
                    </motion.div>

                    {/* Hamburger button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setOpen(!open)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        {open ? (
                            <motion.svg
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </motion.svg>
                        ) : (
                            <motion.svg
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </motion.svg>
                        )}
                    </motion.button>
                </div>

                {/* Menu links */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    id="navbar-user"
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${open ? "block" : "hidden"}`}
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                        {["Home", "About", "Services", "Project", "Contact"].map((item, index) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                            >
                                <Link
                                    to={item.toLowerCase() === "home" ? "/" : item.toLowerCase()}
                                    className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    {item}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Animated underline effect */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute bottom-0 left-0 h-[2px] w-full  bg-blue-500 "
            />
        </motion.nav>
    );
}
