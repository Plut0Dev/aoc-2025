import {Star} from "lucide-react";
import {motion} from "motion/react";
import {redirect} from "next/navigation";

export interface StarMissionProps extends React.HTMLAttributes<HTMLDivElement> {
    state: 0 | 25 | 30 | 50 | 60 | 75 | 100;
    link1?: string;
    day: string
}

export const StarMission = ({day, state, link1, ...props}: StarMissionProps) => {

    const clipCss = () => {
        switch (state) {
            case 25:
                return `absolute [clip-path:inset(0_0_25%_0)]`
            case 30:
                return `absolute [clip-path:inset(0_0_30%_0)]`
            case 50:
                return `absolute [clip-path:inset(0_0_50%_0)]`
            case 60:
                return `absolute [clip-path:inset(0_0_60%_0)]`
            case 75:
                return `absolute [clip-path:inset(0_0_75%_0)]`
            case 100:
                return `absolute [clip-path:inset(0_0_100%_0)]`
            default:
                return `absolute [clip-path:inset(0_0_${state}%_0)]`
        }
    }


    return (

        <div className={"flex flex-col justify-center items-center half-darkened"}>
            <motion.div className={"flex"}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        onClick={() => redirect(`/${day}`)}
            >
                <Star size={100} color={"#FFC834"} strokeWidth={4} className={""}/>
                <Star size={100} color={"#000000"} strokeWidth={4} className={clipCss()}/>
            </motion.div>
            <p className={"text-2xl font-black text-center"}>{day}</p>
        </div>
    )
}