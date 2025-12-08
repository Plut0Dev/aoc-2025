import {Day5Input, Day5TestInput} from "@/app/(days)/day5/day5Input";

export default function Day5Page() {
    const solve1 = (input: string) => {
        const inputs = input.split("\n\n")
        const ranges = inputs[0].split("\n")
        const items = inputs[1].split("\n")
        const freshIds = new Set()
        ranges.forEach((range, index) => {
            const firstNumber = Number(range.split("-")[0])
            const lastNumber = Number(range.split("-")[1])
            items.forEach((item) => {
                if (Number(item) >= firstNumber && Number(item) <= lastNumber) {
                    freshIds.add(item)
                }
            })
        })
        return freshIds.size
    }
    const solve2 = (input: string) => {

        const inputs = input.split("\n\n")
        const ranges = inputs[0].split("\n")
        let freshIds = 0;

        const rangeMap = ranges.map((range, index) => {
            const firstNumber = Number(range.split("-")[0])
            const lastNumber = Number(range.split("-")[1])
            return {
                from: Number(firstNumber),
                to: Number(lastNumber),
            }
        }).sort((a, b) => a.from - b.from)

        let lastTo = 0
        rangeMap.forEach((range) => {
            let firstNumber = range.from
            let lastNumber = range.to
            if (firstNumber <= lastTo) {
                firstNumber = lastTo
                if (lastNumber > lastTo) {
                    firstNumber = lastTo + 1
                }
                if (lastNumber < firstNumber) {
                    lastNumber = firstNumber
                }
            }
            if (lastNumber !== lastTo) {
                freshIds += lastNumber - firstNumber + 1
            }
            lastTo = lastNumber
        })

        return freshIds

    }
    const result1 = solve1(Day5Input)
    const result2 = solve2(Day5Input)
    console.log("Result1: " + result1)
    console.log("Result2: " + result2)
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <p className={"text-3xl"}>1:({result1.toString() + "),   2: (" + result2.toString()})!</p>
        </div>
    )
}