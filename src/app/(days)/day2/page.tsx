import {Day2Computer} from "@/components/day2/Day2Computer";
import {Day2Input} from "@/app/(days)/day2/day2Input";


export default function Day2Page() {

    const solve1reg = (input: string) => {
        let result = 0
        const ranges = input.split(",");
        ranges.forEach(range => {
            const rangePoints = range.split("-")
            const rangeLength = Number(rangePoints[1]) - Number(rangePoints[0])
            Array.from({length: rangeLength + 1}).forEach((_, i) => {
                const number =  Number(rangePoints[0]) + i
                const regReps = /^(\d+)\1$/
                if (regReps.test(number.toString())) {
                    result += Number(number)
                }
            })

        })
        return result
    }
    const solve2 = (input: string) => {
        let result = 0
        const ranges = input.split(",");
        ranges.forEach(range => {
            const rangePoints = range.split("-")
            const rangeLength = Number(rangePoints[1]) - Number(rangePoints[0])
            Array.from({length: rangeLength + 1}).forEach((_, i) => {
                const number = Number(rangePoints[0]) + i
                const regReps = /^(\d+)\1+$/
                if (regReps.test(number.toString())) {
                    result += number
                }
            })
        })
        return result
    }
    const solution1 = solve1reg(Day2Input)
    const solution2 = solve2(Day2Input)
    console.log(solution1)
    console.log(solution2)

    return (

        <div className={"h-screen w-screen overflow-hidden flex justify-center items-center bg-stone-400"}>
            <div className={"w-full h-80 flex items-end bg-stone-600 absolute bottom-20"}>
                <div className={"w-full h-8 bg-stone-700"}></div>
            </div>

            <Day2Computer solution1={solution1.toString()} solution2={solution2.toString()}></Day2Computer>
        </div>
    )
}