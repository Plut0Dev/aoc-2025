export const Day2Keyboard = () => {
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
    return (
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
    )
}