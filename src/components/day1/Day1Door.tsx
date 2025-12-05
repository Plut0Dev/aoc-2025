"use client"
import {motion} from "motion/react";
import React from "react";
import {Day1CodeLock} from "./Day1CodeLock";

export const Day1Door = () => {
    const [open, setOpen] = React.useState(false);

    function openDoor() {
        if (!open) {
            setOpen(true);
        }
    }

    return (
        <>
            <motion.div className={"relative h-full w-100 bg-yellow-950 border-8 border-black"}
                        animate={open && {skewY:-20}}
            >
                <div className={"absolute -translate-x-1/2 right-1/2 h-full w-2 bg-black"}></div>
                <div className={"absolute top-1/2 h-2 -translate-y-1/2 w-full bg-black"}></div>
                <motion.div className={"absolute top-1/2 h-4 -translate-y-1/2 w-16 bg-amber-500 right-20"}
                animate={open && {rotate:-20}}>
                    <div
                        className={"absolute top-1/2 h-8 rounded-full -translate-y-1/2 w-8 bg-amber-500 -right-1"}></div>
                </motion.div>
            </motion.div>
            <Day1CodeLock unlockDoorFunction={openDoor}/>
        </>
    )
}