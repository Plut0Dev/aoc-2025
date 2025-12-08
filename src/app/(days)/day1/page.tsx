import {Day1Input, Day1TestInput} from "./day1Input"
import {Day1Tresor} from "@/components/day1/Day1Tresor";
import React from "react"
import {Day1Door} from "@/components/day1/Day1Door";

export default function day1Page() {


    const solve1 = (input: string) => {
        let currentNumber: number = 50
        let result: number = 0
        const steps = input.split("\n")
        const turn = (input: string) => {
            const direction = input.slice(0, 1)
            const amount = Number(input.slice(1))

            switch (direction) {
                case 'L':
                    currentNumber = currentNumber - amount
                    while (currentNumber < 0) {
                        currentNumber = 100 - Math.abs(currentNumber)
                    }
                    break
                case 'R':
                    currentNumber = currentNumber + amount
                    while (currentNumber > 99) {
                        currentNumber = currentNumber - 100
                    }
                    break
            }
            return currentNumber
        }
        steps.forEach((step) => {
            currentNumber = turn(step)
            if (currentNumber === 0) {
                result++
            }
        })
        return result
    }

    const solve2 = (input: string) => {
        let result = 0
        let currentNumber: number = 50
        const steps = input.split("\n")
        const turn = (input: string) => {
            let overZeros = 0;
            const direction = input.slice(0, 1)
            const amount = Number(input.slice(1))

            switch (direction) {
                case 'L':
                    if (currentNumber === 0){
                        overZeros--
                    }
                    currentNumber = currentNumber - amount
                    while (currentNumber < 0) {
                        overZeros++
                        currentNumber = 100 - Math.abs(currentNumber)
                    }
                    if (currentNumber === 0){
                        overZeros++
                    }



                    break
                case 'R':
                    currentNumber = currentNumber + amount
                    while (currentNumber > 99) {
                        overZeros++
                        currentNumber = currentNumber - 100
                    }
                    break
            }

            return overZeros
        }
        steps.forEach((step) => {

            result = result + turn(step)

        })
        return result
    }

    console.log("The First Try is " + solve1(Day1Input))
    console.log("The code is " + solve2(Day1Input))

    return (
        <div className={"flex w-screen bg-gray-500 h-screen p-2 overflow-hidden"}>
            <Day1Door/>
            <Day1Tresor/>
            <div className={"w-10 h-12 bg-amber-200 text-black text-center relative self-center -top-30 -left-40 select-none"}>
                ----
                <br/>
                ----
            </div>
        </div>
    )
}