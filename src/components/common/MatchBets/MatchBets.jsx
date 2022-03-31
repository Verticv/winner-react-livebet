import { betTypes } from "helpers/constants";
import getRandomNumberInInterval from "helpers/getRandomNumberInInterval";
import React, { useCallback, useState } from "react";
import useStore from "store/useStore";
import MatchDetail from "./MatchDetail/MatchDetail";
import MatchBetsTabs from "./MatchBetsTabs/MatchBetsTabs";

import "./MatchBets.scss"

export default function MatchDetails() {
    // This is here just so the component refreshes and generates new random values, to illustrate that
    // match details would change upon live card selection.
    const { selectedCardId } = useStore(state => state);
    const [selectedTab, setSelectedTab] = useState("all");
    const handleChangeSelectedTab = (newTab) => {
        setSelectedTab(newTab);
    }

    const matchBets = useCallback(
        () => {
            return [
                {
                    id: 0,
                    typeIdentifier: betTypes.overUnder,
                    betType: "홈팀 오버언더",
                    option1: "오버",
                    option2: "언더",
                    kof1: getRandomNumberInInterval(1.5, 5).toFixed(2),
                    kof2: getRandomNumberInInterval(1.5, 5).toFixed(2),
                    tieKof: getRandomNumberInInterval(1.5, 5).toFixed(2),
                    selectedCardId: selectedCardId,
                },
                {
                    id: 1,
                    typeIdentifier: betTypes.overUnder,
                    betType: "오버언더",
                    option1: "오버",
                    option2: "언더",
                    kof1: getRandomNumberInInterval(1.5, 5).toFixed(2),
                    kof2: getRandomNumberInInterval(1.5, 5).toFixed(2),
                    tieKof: getRandomNumberInInterval(1.5, 5).toFixed(2),
                },
                {
                    id: 2,
                    typeIdentifier: betTypes.winLoseHandicap,
                    betType: "승무패핸디캡",
                    option1: "맨체스터유나이티드",
                    option2: "리버풀",
                    kof1: getRandomNumberInInterval(1.5, 5).toFixed(2),
                    kof2: getRandomNumberInInterval(1.5, 5).toFixed(2),
                    tieKof: getRandomNumberInInterval(1.5, 5).toFixed(2),
                },
            ];
        },
        [selectedCardId],
    )

    // function getBets() {
    //     if (selectedTab === "all") {
    //         return matchBets().map((matchBet) => {
    //             return <MatchDetail key={matchBet.id} bet={matchBet} />;
    //         });
    //     } else {
    //         return matchBets().filter(match => match.typeIdentifier === selectedTab).map((matchBet) => {
    //             return <MatchDetail key={matchBet.id} bet={matchBet} />;
    //         });
    //     }
    // }

    return (
        <div className="match-bets-content">
            <MatchBetsTabs handleChangeSelectedTab={handleChangeSelectedTab} />
            <div className="match-bet-card-wrapper">
                <div className="line"></div>
            {
                    selectedTab === "all" ?
                    matchBets().map((matchBet) => {
                        return <MatchDetail key={matchBet.id} bet={matchBet} />;
                    })
                :
                    matchBets().filter(match => match.typeIdentifier === selectedTab).map((matchBet) => {
                        return <MatchDetail key={matchBet.id} bet={matchBet} />;
                    })
                
            }
            </div>
        </div>
    );
}


// .line {
//     background-image: -moz-linear-gradient( 0deg, rgb(29,25,34) 0%, rgb(94,40,48) 30%, rgb(88,23,23) 50%, rgb(95,40,48) 70%, rgb(29,25,34) 100%);
//     background-image: -webkit-linear-gradient( 0deg, rgb(29,25,34) 0%, rgb(94,40,48) 30%, rgb(88,23,23) 50%, rgb(95,40,48) 70%, rgb(29,25,34) 100%);
//     background-image: -ms-linear-gradient( 0deg, rgb(29,25,34) 0%, rgb(94,40,48) 30%, rgb(88,23,23) 50%, rgb(95,40,48) 70%, rgb(29,25,34) 100%);
//     position: absolute;
//     left: 757px;
//     top: 693px;
//     width: 793px;
//     height: 1px;
//     z-index: 400;
//   }
  