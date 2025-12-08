import {Day4Input, Day4TestInput} from "@/app/(days)/day4/day4Input";
import {Day1Input} from "@/app/(days)/day1/day1Input";

export default function Day4Page() {
    const solve1 = (input: string) => {
        let result = 0
        const gridRows = input.split("\n")
        gridRows.forEach((rowString, rowIndex) => {
            const row = rowString.split("")
            const beforeRow = gridRows[rowIndex - 1] ? gridRows[rowIndex - 1].split("") : null
            const nextRow = gridRows[rowIndex + 1] ? gridRows[rowIndex + 1].split("") : null
            row.forEach((element, index) => {
                    let adjacentRolls = 0
                    if (element === "@") {
                        if (row[index - 1] && element === row[index - 1]) {
                            adjacentRolls++
                        }
                        if (row[index + 1] && element === row[index + 1]) {
                            adjacentRolls++
                        }
                        if (beforeRow && beforeRow[index] === element) {
                            adjacentRolls++
                        }
                        if (nextRow && nextRow[index] === element) {
                            adjacentRolls++
                        }
                        if (beforeRow && beforeRow[index + 1] && element === beforeRow[index + 1]) {
                            adjacentRolls++
                        }
                        if (beforeRow && beforeRow[index - 1] && element === beforeRow[index - 1]) {
                            adjacentRolls++
                        }
                        if (nextRow && nextRow[index + 1] && element === nextRow[index + 1]) {
                            adjacentRolls++
                        }
                        if (nextRow && nextRow[index - 1] && element === nextRow[index - 1]) {
                            adjacentRolls++
                        }
                        if (adjacentRolls < 4) {
                            result++
                        }
                    }
                }
            )
        })
        return result
    }
    const solve2 = (input: string) => {
        let result = 0
        let currentGridRows: string[][] = input.split("\n").map<string[]>((string)=>string.split(""))
        let isDone = false
        while (!isDone) {
            let addedThisRound = 0
            let newGrid:string[][] = []
            currentGridRows.forEach((rowString,rowIndex) => {
                const row = rowString
                newGrid.push(row)
                const beforeRow = currentGridRows[rowIndex - 1] ? currentGridRows[rowIndex - 1] : null
                const nextRow = currentGridRows[rowIndex + 1] ? currentGridRows[rowIndex + 1] : null
                row.forEach((element, index) => {
                        let adjacentRolls2 = 0
                        if (element === "@") {
                            if (row[index - 1] && element === row[index - 1]) {
                                adjacentRolls2++
                            }
                            if (row[index + 1] && element === row[index + 1]) {
                                adjacentRolls2++
                            }
                            if (beforeRow && beforeRow[index] === element) {
                                adjacentRolls2++
                            }
                            if (nextRow && nextRow[index] === element) {
                                adjacentRolls2++
                            }
                            if (beforeRow && beforeRow[index + 1] && element === beforeRow[index + 1]) {
                                adjacentRolls2++
                            }
                            if (beforeRow && beforeRow[index - 1] && element === beforeRow[index - 1]) {
                                adjacentRolls2++
                            }
                            if (nextRow && nextRow[index + 1] && element === nextRow[index + 1]) {
                                adjacentRolls2++
                            }
                            if (nextRow && nextRow[index - 1] && element === nextRow[index - 1]) {
                                adjacentRolls2++
                            }
                            if (adjacentRolls2 < 4) {
                                newGrid[rowIndex][index] = "x"
                                addedThisRound ++;
                                result++
                            }
                        }
                    }
                )
            })
            if (addedThisRound === 0) {
                isDone = true
            }
            currentGridRows = newGrid

        }
        return result

    }
    const result1 = solve1(Day4Input)
    const result2 = solve2(Day4Input)
    console.log(result1)
    console.log(result2)
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <p className={"text-3xl"}>1:({result1.toString()+"),   2: ("+result2.toString()})!</p>
        </div>
    )
}