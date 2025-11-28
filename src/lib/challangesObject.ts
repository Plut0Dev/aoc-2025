import {StarMissionProps} from "@/components/StarMission/StarMission";

export const Challenges : ChallengesType = {
    day1: {
        state: 0,
        link1: "/day1"
    },
    day2: {
        state: 0,
    },
    day3: {
        state: 0,
    },
    day4: {
        state: 0,
    },
    day5: {
        state: 0,
    },
    day6: {
        state: 0,
    },
    day7: {
        state: 0,
    },
    day8: {
        state: 0,
    },
    day9: {
        state: 0,
    },
    day10: {
        state: 0,
    },
    day11: {
        state: 0,
    },
    day12: {
        state: 0,
    }
}

interface ChallengeType{
    state: 0 | 25 | 30 | 50 | 60 | 75 | 100;
    link1?: string;
    link2?: string;
}
interface ChallengesType {
    day1: ChallengeType;
    day2: ChallengeType;
    day3: ChallengeType;
    day4: ChallengeType;
    day5: ChallengeType;
    day6: ChallengeType;
    day7: ChallengeType;
    day8: ChallengeType;
    day9: ChallengeType;
    day10: ChallengeType;
    day11: ChallengeType;
    day12: ChallengeType;
}