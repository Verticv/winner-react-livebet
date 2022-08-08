import React, { useState } from "react";

import { betTypes } from "helpers/constants";
import MatchBetTab from "./MatchBetTab";

import "./MatchBetsTabs.scss";

export default function MatchBetsTabs({ handleChangeSelectedTab }) {
    // const styles = {
    //     tabContainer: `
    //         height: 40px;
    //         left: 0;
    //         position: absolute;
    //         top: 528px;
    //         width: 859px;
    //         display: flex;
    //                         `,
    // };
    // const { classes } = jss.createStyleSheet(styles).attach();

    const tabs = [
        { id: 0, name: "전체", selected: true, betIdentifier: "all" },
        {
            id: 4,
            name: "승무패핸디캡",
            selected: false,
            betIdentifier: betTypes.winLoseHandicap,
        },
        {
            id: 3,
            name: "오버언더",
            selected: false,
            betIdentifier: betTypes.overUnder,
        },
        {
            id: 2,
            name: "핸디캡",
            selected: false,
            betIdentifier: betTypes.handicap,
        },
        {
            id: 1,
            name: "팀골",
            selected: false,
            betIdentifier: betTypes.teamGoal,
        },
    ];

    const [stateTabs, setTabs] = useState(tabs);

    const handleSelectTab = (id) => {
        const navCopy = [...tabs];
        const itemToSetActive = navCopy.find((a) => a.id === id);
        navCopy.forEach((navListItem) => (navListItem.selected = false));
        itemToSetActive.selected = true;
        setTabs(navCopy);
        handleChangeSelectedTab(itemToSetActive.betIdentifier);
    };

    return (
        <div className="taps-wrapper hide-scrollbar">
            {stateTabs.map((tab) => {
                return (
                    <MatchBetTab
                        key={tab.id}
                        tab={tab}
                        handleSelectTab={() => handleSelectTab(tab.id)}
                    />
                );
            })}
        </div>
    );
}
