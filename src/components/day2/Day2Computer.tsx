"use client"
import {motion} from "motion/react";
import * as Popover from "@radix-ui/react-popover";
import {useState} from "react";
import {redirect} from "next/navigation";
import {Day2Keyboard} from "@/components/day2/Day2Keyboard";

export const Day2Computer = ({solution1, solution2}:{solution1:string, solution2:string}) => {
    const [del1, setDel1] = useState(false);
    const [del2, setDel2] = useState(false);

    const buttonClassname = "border-2 text-[12px] p-1 bg-indigo-300 h-fit rounded-sm"
    return (
        <div className={"z-2 flex flex-col gap-10"}>
            <div className={"flex flex-col justify-center items-center"}>
                <div className={"w-100 h-70 bg-sky-700 border-8 p-4 border-black flex-col flex gap-4"}>
                    <div className={"bg-white h-full w-full border-black border-3 p-1"}>
                        <div className={"flex justify-end bg-gray-200 p-1"}>
                            <div
                                className={"bg-red-800 rounded-xs text-white w-2 h-2 text-[8px] flex justify-center items-center"}>x
                            </div>
                        </div>
                        <div className={"flex justify-center gap-4 h-full items-center"}>
                            {!del1 &&
                                <Popover.Root>
                                    <Popover.Trigger>
                                        <motion.div className={buttonClassname}>
                                            Select Filter1
                                        </motion.div>
                                    </Popover.Trigger>
                                    <Popover.Portal>
                                        <Popover.Content
                                            className={"z-3 w-30 mb-2 h-15 border-2 flex flex-col justify-center items-center gap-2 text-[8px]"}
                                            side={"top"}>
                                            delete {solution1} ID's
                                            <motion.button className={"bg-rose-600 text-white font-bold rounded-sm p-1"}
                                                           onClick={() => {
                                                               setDel1(true)
                                                               if (del2) {
                                                                   setTimeout(() => redirect("/"), 500)
                                                               }
                                                           }}
                                            >
                                                delete
                                            </motion.button>
                                        </Popover.Content>
                                    </Popover.Portal>
                                </Popover.Root>
                            }
                            {!del2 &&
                                <Popover.Root>
                                    <Popover.Trigger>
                                        <motion.div className={buttonClassname}>
                                            Select Filter2
                                        </motion.div>
                                    </Popover.Trigger>
                                    <Popover.Portal>
                                        <Popover.Content
                                            className={"z-3 w-30 mb-2 h-15 border-2 flex flex-col gap-2 justify-center items-center text-[8px]"}
                                            side={"top"}>
                                            delete {solution2} ID's
                                            <motion.button className={"bg-rose-600 text-white font-bold rounded-sm p-1"}
                                                           onClick={() => {
                                                               setDel2(true)
                                                               if (del1) {
                                                                   setTimeout(() => redirect("/"), 500)
                                                               }
                                                           }}
                                            >
                                                delete
                                            </motion.button>
                                        </Popover.Content>
                                    </Popover.Portal>
                                </Popover.Root>
                            }
                        </div>
                    </div>
                    <div className={"h-4 w-full bg-black opacity-30"}></div>
                </div>
                <div className={"h-10 w-2 bg-black"}></div>
                <div className={"h-2 w-20 bg-black"}></div>
            </div>
            <Day2Keyboard></Day2Keyboard>
        </div>
    )
}