"use client"
import {StarMission} from "@/components/overview/StarMission";
import {Challenges} from "@/lib/challangesObject";
import {useEffect} from "react";
import {Snowfall} from "react-snowfall";




export default function Home() {

    return (
        <div className={"bg-emerald-900 w-screen h-screen flex flex-col justify-between py-16"}>
            <h1 className={"font-mono font-bold text-[48px] text-center"}>AoC 2025</h1>
            <div className={"grid grid-cols-3 gap-x-1 gap-y-8"}>
            {Object.entries(Challenges).map(([key, challenge]) => (
                <StarMission key={key} day={key} state={challenge.state}></StarMission>
            ))}
            </div>
            <Snowfall/>
        </div>
    );
}

