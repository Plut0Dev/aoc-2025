"use client"
import {Day3TestInput} from "@/app/(days)/day3/day3Input";
import {useState} from "react";
import {redirect} from "next/navigation";


export const Day3ElevatorAndBatteries = () => {

    const [selectedBatteries, setSelectedBatteries] = useState<number[][]>([])
    const [elevatorWorking, setElevatorWorking] = useState<boolean>(false)
    const selectableBatteries = [
        [0,1,2,3,4,5,6,7,8,9,10,11],
        [0,1,2,3,4,5,6,7,8,9,10,14],
        [2,4,5,6,7,8,9,10,11,12,13,14],
        [0,2,3,5,7,8,9,10,11,12,13,14]
    ]
    const handleClick = () => {
        if (selectedBatteries.length === 3) {
            setElevatorWorking(true)
            setTimeout(() => {
                redirect("/")
            }, 1000)
        }
        setSelectedBatteries([...selectedBatteries, selectableBatteries[selectedBatteries.length]])
    }
    return (
        <>
            <div className={"w-40 h-1k0 flex items-center p-2 bg-stone-300 gap-2 justify-start"}>
                <div className={`h-5 w-5 rounded-full ${elevatorWorking?"bg-green-400":"bg-red-400"}`}></div>
                <p className={"w-full text-center"}>{!elevatorWorking?"not working":"-2"}</p>
            </div>
            <div className={"bg-stone-700 h-110 w-80 flex justify-center border-4 border-stone-800"}>
                <div className={"bg-stone-100 h-full w-2"}></div>
            </div>
            <div className={"cursor-pointer gap-2 flex justify-center items-center bg-stone-400"}
                 onClick={handleClick}>
                {Array.from({length: 4}).map(
                    (_, bankIndex) => (

                        <div key={bankIndex}
                             className={"w-50 h-20 rounded-md bg-gray-500 grid p-2 grid-cols-5 grid-rows-3 gap-1"}>
                            {Array.from({length: 15}).map((_, batteryIndex) => (
                                <div key={batteryIndex}
                                     className={`${selectedBatteries[bankIndex]?.includes(batteryIndex) ? "bg-green-400" : "bg-red-400"} w-full h-full flex justify-center items-center`}>
                                    {Day3TestInput.split("\n")[bankIndex].split("")[batteryIndex]}
                                </div>
                            ))}

                        </div>
                    ))}
            </div>
        </>
    )
}
