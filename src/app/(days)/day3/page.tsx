import {Day3Input, Day3TestInput} from "@/app/(days)/day3/day3Input";
import {Day3ElevatorAndBatteries} from "@/components/day3/Day3ElevatorAndBatteries";


export default function Day3Page() {
    const solve1 = (input: string) => {
        let result = 0
        const banks = input.split("\n");
        banks.forEach((bank) => {
            console.log(bank);
            let bankArray = bank.split("")
            bankArray.pop()
            const highestFirst = bankArray.sort((a, b) => Number(b) - Number(a))[0]
            const highestSecond = bank.substring(bank.indexOf(highestFirst) + 1).split("").sort((a, b) => Number(b) - Number(a))[0]
            const highestPossible = Number(highestFirst.toString() + highestSecond)
            console.log(highestPossible)
            result += highestPossible
        })
        return result
    }
    const solve2 = (input: string) => {
        let result = 0
        const banks = input.split("\n");
        banks.forEach((bank) => {
            let zwischenResult = ""
            const bankArray = bank.split("").slice(0, bank.length - 11)
            const firstDigit = bankArray.sort((a, b) => Number(b) - Number(a))[0]
            zwischenResult = firstDigit.toString()
            let lastDigit = firstDigit
            let lastSubstring = bank.substring(bank.indexOf(lastDigit) + 1)

            for (let i = 0; i < 11; i++) {
                let nextSubstring = lastSubstring.substring(0, lastSubstring.length - (10 - i))
                let nextDigit = nextSubstring.split("").sort((a, b) => Number(b) - Number(a))[0]
                lastSubstring = lastSubstring.substring(lastSubstring.indexOf(nextDigit) + 1)
                lastDigit = nextDigit
                zwischenResult += nextDigit
            }
            result += Number(zwischenResult)
        })
        return result
    }
    console.log(solve1(Day3Input));
    console.log(solve2(Day3Input));


    return (
        <div className={"select-none h-screen w-screen overflow-hidden flex flex-col justify-center items-center bg-stone-400 gap-2 p-4"}>
            <Day3ElevatorAndBatteries />
        </div>
    )
}