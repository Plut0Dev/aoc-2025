"use client"
import {motion} from "motion/react";

export const Day1Tresor = () => {
    return (
        <div className={"relative bg-gray-700 w-60 h-80 border-gray-800 border-10 self-end  -left-10"}>
            <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{rotate: 640}}
                className={"absolute top-1/2 -translate-1/2 left-3/10  bg-gray-800 rounded-full w-10 h-10 text-white flex justify-center items-start font-extrabold"}>^
            </motion.div>
        </div>
    )
}