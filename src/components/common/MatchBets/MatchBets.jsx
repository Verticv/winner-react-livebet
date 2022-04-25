import { betTypes } from "helpers/constants";
import React, { useCallback, useState } from "react";
import useStore from "store/useStore";
import MatchDetail from "./MatchDetail/MatchDetail";
import MatchBetsTabs from "./MatchBetsTabs/MatchBetsTabs";
import background from "../../../imagesHold/match-bet-card.png"

import "./MatchBets.scss";

export default function MatchDetails() {
    // This is here just so the component refreshes and generates new random values, to illustrate that
    // match details would change upon live card selection.
    const { selectedCardId } = useStore((state) => state);
    const [selectedTab, setSelectedTab] = useState("all");
    const handleChangeSelectedTab = (newTab) => {
        setSelectedTab(newTab);
    };

    const matchBets = useCallback(() => {
        return [
            {
                id: 0,
                typeIdentifier: betTypes.overUnder,
                betType: "홈팀 오버언더",
                option1: "오버",
                option2: "언더",
                row1kof1: 1.25,
                row1kof2: 3.3,
                row1tieKof: 4.05,
                isRow1Active: true,
                row2kof1: 1.25,
                row2kof2: 3.3,
                row2tieKof: 4.05,
                isRow2Active: true,
                selectedCardId: selectedCardId,
            },
            {
                id: 1,
                typeIdentifier: betTypes.overUnder,
                betType: "오버언더",
                option1: "오버",
                option2: "언더",
                row1kof1: 3.15,
                row1kof2: 1.3,
                row1tieKof: 4.05,
                isRow1Active: false,
                row2kof1: 1.45,
                row2kof2: 2.4,
                row2tieKof: 4.05,
                isRow2Active: false,
            },
            {
                id: 2,
                typeIdentifier: betTypes.winLoseHandicap,
                betType: "승무패핸디캡",
                option1: "맨체스터유나이티드",
                option2: "리버풀",
                row1kof1: 9.5,
                row1kof2: 1.22,
                row1tieKof: 5.75,
                isRow1Active: false,
                row2kof1: 1.3,
                row2kof2: 8.25,
                row2tieKof: 4.9,
                isRow2Active: false,
            },
        ];
    }, [selectedCardId]);

    const CardContent = (
        <div className="match-bet-card-wrapper">
            <div className="line"></div>
            <img style={{height: "100%", position: "absolute", left: "0"}} src={background} alt="" />
            {selectedTab === "all"
                ? matchBets().map((matchBet) => {
                      return <MatchDetail key={matchBet.id} bet={matchBet} />;
                  })
                : matchBets()
                      .filter((match) => match.typeIdentifier === selectedTab)
                      .map((matchBet) => {
                          return (
                              <MatchDetail key={matchBet.id} bet={matchBet} />
                          );
                      })}
        </div>
    );

    return (
        <div className="match-bets-content">
            <MatchBetsTabs handleChangeSelectedTab={handleChangeSelectedTab} />
            {CardContent}
            {/* {CardContent} */}
        </div>
    );
}
