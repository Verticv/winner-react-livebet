import React, { useState } from "react";
import useStore from "store/useStore";
import { singleOrMultiOptions } from "helpers/constants";
import BetNavListItem from "./partial/BetNavListItem";
import SelectLayoutButtons from "components/BetNav/partial/SelectLayoutButtons/SelectLayoutButtons";
import SingleViewSelectButtons from "components/SingleViewSelectButtons/SingleViewSelectButtons";
import NumberOfLiveMatches from "../common/NumberOfLiveMatches/NumberOfLiveMatches";

import "./BetNav.scss";

export default function BetNav() {
    const number = 80;
    const navListItemsDefinition = [
        {
            id: 0,
            icon: require("../../imagesHold/ico_7.png").default,
            text: "즐겨찾기",
            number,
            marginLeft: "-553px",
        },
        {
            id: 1,
            icon: require("../../imagesHold/ico_8.png").default,
            text: "전체",
            number,
            marginLeft: "-444px",
        },
        {
            id: 2,
            icon: require("../../imagesHold/ico_9.png").default,
            text: "축구",
            number,
            active: true,
            marginLeft: "-335px",
        },
        {
            id: 3,
            icon: require("../../imagesHold/ico_10.png").default,
            text: "야구",
            number,
            marginLeft: "-226px",
        },
        {
            id: 4,
            icon: require("../../imagesHold/ico_11.png").default,
            text: "농구",
            number,
            marginLeft: "-117px",
        },
        {
            id: 5,
            icon: require("../../imagesHold/ico_12.png").default,
            text: "배구",
            number,
            marginLeft: "-8px",
        },
        {
            id: 6,
            icon: require("../../imagesHold/ico_13.png").default,
            text: "아이스하키",
            number,
            marginLeft: "101px",
        },
        {
            id: 7,
            icon: require("../../imagesHold/image_27.png").default,
            text: "테니스",
            number,
            marginLeft: "210px",
        },
        {
            id: 8,
            icon: require("../../imagesHold/ico_14.png").default,
            text: "핸드볼",
            number,
            marginLeft: "319px",
        },
        {
            id: 9,
            icon: require("../../imagesHold/ico_15.png").default,
            text: "UFC",
            number,
            marginLeft: "428px",
        },
    ];
    const [navListItems] = useState(navListItemsDefinition);
    const changeSelectedNav = useStore((state) => state.changeSelectedNav);
    const singleOrMulti = useStore((state) => state.singleOrMulti);
    const isMultiView = singleOrMulti === singleOrMultiOptions.multi;
    const selectedNav = useStore((state) => state.selectedNav);

    return (
        <div style={{width: '1560px', background: '#000'}} className="navbar-wrapper">
            <div style={{width: '100%', display: 'flex'}}>
                <div className="navbar-list-wrapper">
                    {navListItems.map((item, index) => {
                        return (
                            <BetNavListItem
                                isLastElement={index === navListItems.length - 1}
                                key={item.id}
                                id={item.id}
                                icon={item.icon}
                                active={item.active}
                                number={item.number}
                                text={item.text}
                                marginLeft={item.marginLeft}
                                handleSetNavElementActive={() =>
                                    changeSelectedNav(item.id)
                                }
                            />
                        );
                    })}
                </div>
                <div className="select-layout-wrapper">
                    <SelectLayoutButtons />
                </div>
            </div>
            <div style={{width: '100%', display: 'flex', height: '46px', justifyContent: 'space-between'}}>
                <NumberOfLiveMatches navListItemsDefinition={navListItemsDefinition} selectedNav={selectedNav} isMultiView={isMultiView}/>
                <SingleViewSelectButtons />
            </div>
        </div>
    );
}
