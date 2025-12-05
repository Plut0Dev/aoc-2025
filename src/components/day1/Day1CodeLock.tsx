"use client"
import { motion } from "motion/react";
import { redirect } from "next/navigation";
import React from "react";

interface numberFieldProps  {
    text : String
}
const NumberField = ({text}:numberFieldProps) => {
  return (
      <motion.div whileTap={{scale: 0.98}}
                  className={"w-full h-full bg-gray-300 flex justify-center items-center"}>
          {text}
      </motion.div>
  )
}
interface Day1CodeLockProps {
    unlockDoorFunction : ()=>void
}
export const Day1CodeLock = ({unlockDoorFunction}:Day1CodeLockProps) => {
    const [code, setCode] = React.useState("");
    const [step, setStep] = React.useState(0);
    const handleClick = ()=>{
        switch (step){
            case 0 :
                setCode("1")
                setStep(1)
                break;
            case 1:
                setCode("11")
                setStep(2)
                break
            case 2:
                setCode("113")
                setStep(3)
                break
            case 3:
                setCode("1139")
                setStep(4)
                break
            case 4:
                setCode("WRONG!")
                setStep(5)
                break
            case 5:
                setCode("6")
                setStep(6)
                break
            case 6:
                setCode("66")
                setStep(7)
                break
            case 7:
                setCode("668")
                setStep(8)
                break
            case 8:
                setCode("6686")
                unlockDoorFunction()
                setTimeout(()=>{
                    redirect("/")
                }, 500)
        }
    }
    return (
        <div
            onClick={handleClick}
            className={"bg-gray-900 h-30 w-20 grid gap-2 p-2 grid-rows-5 grid-cols-3 self-center relative left-10 -top-20 "}>
            <div className={"w-full h-full bg-emerald-500 col-span-3 flex text-[10px]  items-center"}> {code}</div>
            <NumberField text={"1"}></NumberField>
            <NumberField text={"2"}></NumberField>
            <NumberField text={"3"}></NumberField>
            <NumberField text={"4"}></NumberField>
            <NumberField text={"5"}></NumberField>
            <NumberField text={"6"}></NumberField>
            <NumberField text={"7"}></NumberField>
            <NumberField text={"8"}></NumberField>
            <NumberField text={"9"}></NumberField>
            <NumberField text={"*"}></NumberField>
            <NumberField text={"0"}></NumberField>
            <NumberField text={"#"}></NumberField>
        </div>
    )
}