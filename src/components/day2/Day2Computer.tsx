"use client"
import {motion} from "motion/react";
import * as Popover from "@radix-ui/react-popover";
import {useState} from "react";
import {redirect} from "next/navigation";

export const Day2Computer = ({solution1, solution2}:{solution1:string, solution2:string}) => {
    const [del1, setDel1] = useState(false);
    const [del2, setDel2] = useState(false);
    const Key = ({text, color, span}: { text: string, color: "red" | "white" | "gray", span?: string }) => {
        let colorSchema = ""
        switch (color) {
            case "red":
                colorSchema = "bg-rose-700 text-white";
                break
            case "white":
                colorSchema = "bg-amber-50 text-black"
                break
            case "gray":
                colorSchema = "bg-stone-400 text-black"
        }
        return (
            <div
                className={`${colorSchema} ${span} font-bold w-full h-full  text-[10px] flex justify-center items-center`}>
                {text}
            </div>
        )

    }
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
            <div className={"flex gap-16 items-center"}>

                <div className={"border-8 w-80 h-30 grid grid-cols-15 grid-rows-6 bg-black gap-1"}>
                    <Key color={"red"} text={"esc"}></Key>

                    <Key color={"white"} text={"1"}></Key>
                    <Key color={"white"} text={"2"}></Key>
                    <Key color={"white"} text={"3"}></Key>
                    <Key color={"white"} text={"4"}></Key>

                    <Key color={"gray"} text={"5"}></Key>
                    <Key color={"gray"} text={"6"}></Key>
                    <Key color={"gray"} text={"7"}></Key>
                    <Key color={"gray"} text={"8"}></Key>

                    <Key color={"white"} text={"9"}></Key>
                    <Key color={"white"} text={"0"}></Key>
                    <Key color={"white"} text={"'"}></Key>
                    <Key color={"white"} text={"`"}></Key>

                    <Key color={"gray"} text={"<-"} span={"col-span-2"}></Key>
                    <Key color={"gray"} text={"tab"} span={"col-span-2"}></Key>
                    <Key color={"white"} text={"q"}></Key>
                    <Key color={"white"} text={"w"}></Key>
                    <Key color={"white"} text={"e"}></Key>
                    <Key color={"white"} text={"r"}></Key>
                    <Key color={"white"} text={"t"}></Key>
                    <Key color={"white"} text={"z"}></Key>
                    <Key color={"white"} text={"u"}></Key>
                    <Key color={"white"} text={"i"}></Key>
                    <Key color={"white"} text={"o"}></Key>
                    <Key color={"white"} text={"p"}></Key>
                    <Key color={"white"} text={"ü"}></Key>
                    <Key color={"white"} text={"!"}></Key>

                    <Key color={"white"} text={"etr"} span={"row-span-2"}></Key>

                    <Key color={"gray"} text={"cl"} span={"col-span-2"}></Key>
                    <Key color={"white"} text={"a"}></Key>
                    <Key color={"white"} text={"s"}></Key>
                    <Key color={"white"} text={"d"}></Key>
                    <Key color={"white"} text={"f"}></Key>
                    <Key color={"white"} text={"g"}></Key>
                    <Key color={"white"} text={"h"}></Key>
                    <Key color={"white"} text={"j"}></Key>
                    <Key color={"white"} text={"k"}></Key>
                    <Key color={"white"} text={"l"}></Key>
                    <Key color={"white"} text={"ö"}></Key>
                    <Key color={"white"} text={"ä"}></Key>
                    <Key color={"white"} text={"$"}></Key>

                    <Key color={"gray"} text={"sft"} span={"col-span-2"}></Key>
                    <Key color={"white"} text={"<"}></Key>
                    <Key color={"white"} text={"y"}></Key>
                    <Key color={"white"} text={"x"}></Key>
                    <Key color={"white"} text={"c"}></Key>
                    <Key color={"white"} text={"v"}></Key>
                    <Key color={"white"} text={"b"}></Key>
                    <Key color={"white"} text={"n"}></Key>
                    <Key color={"white"} text={"m"}></Key>
                    <Key color={"white"} text={","}></Key>
                    <Key color={"white"} text={"."}></Key>
                    <Key color={"white"} text={"-"}></Key>
                    <Key color={"gray"} text={"sft"} span={"col-span-2"}></Key>

                    <Key color={"gray"} text={"crl"}></Key>
                    <Key color={"gray"} text={"opt"}></Key>
                    <Key color={"gray"} text={""} span={"col-span-2"}></Key>
                    <Key color={"gray"} text={""} span={"col-span-7"}></Key>
                    <Key color={"gray"} text={""}></Key>

                    <Key color={"gray"} text={"opt"}></Key>
                    <Key color={"gray"} text={"crl"}></Key>
                    <Key color={"gray"} text={"fn"}></Key>

                </div>
                <div className={"h-20 w-10 bg-black p-1 gap-1 grid grid-rows-5 rounded-xl grid-cols-2"}>
                    <Key text={""} color={"gray"} span={"row-span-2 rounded-md"}></Key>
                    <Key text={""} color={"gray"} span={"row-span-2 rounded-md"}></Key>
                </div>
            </div>
        </div>
    )
}