import { betTypes } from "helpers/constants";
import getRandomNumberInInterval from "helpers/getRandomNumberInInterval";
import React, { useCallback, useState } from "react";
import useStore from "store/useStore";
import MatchDetail from "./MatchBet";
import MatchBetsTabs from "./MatchBetsTabs";

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

    function getBets() {
        if (selectedTab === "all") {
            return matchBets().map((matchBet) => {
                return <MatchDetail key={matchBet.id} bet={matchBet} />;
            });
        } else {
            return matchBets().filter(match => match.typeIdentifier === selectedTab).map((matchBet) => {
                return <MatchDetail key={matchBet.id} bet={matchBet} />;
            });
        }
    }

    return (
        <>
            <MatchBetsTabs handleChangeSelectedTab={handleChangeSelectedTab} />
            <div className="group-49">
                <div className="bg-holder-42">
                    <div className="bg-holder-43">
                        <div className="bg-holder-44">
                            <img
                                className="bg-7"
                                src={
                                    require("../imagesHold/bg_143.png").default
                                }
                                alt=""
                                width="729"
                                height="386"
                            />
                        </div>
                    </div>
                </div>
                <img
                    className="line-25"
                    src={require("../imagesHold/line_7.png").default}
                    alt=""
                    width="282"
                    height="349"
                />
                <img
                    className="line-26"
                    src={require("../imagesHold/line_8.png").default}
                    alt=""
                    width="282"
                    height="349"
                />
                <div className="col-12">{getBets()}</div>
            </div>
        </>
    );
}
