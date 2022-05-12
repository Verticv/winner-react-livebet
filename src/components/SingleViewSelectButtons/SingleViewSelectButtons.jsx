import { viewTypes } from "helpers/constants";
import React, { useState } from "react";
import ViewSelectButton from "../common/ViewSelectButton/ViewSelectButton";
import SelectBox from './DropDown'

export default function SingleViewSelectButtons() {
    const [activeButton, setActiveButton] = useState('시간순보기')
    const [activeFirstButton, setFirstActiveButton] = useState('')
    const views = [
        {
            id: 0,
            name: "시간순보기",
            type: viewTypes.chronological,
            icon: require("../../imagesHold/ico_17.png").default,
        },
        {
            id: 1,
            name: "리그순보기",
            type: viewTypes.viewLeague,

            icon: require("../../imagesHold/ico_18.png").default,
        },
    ];
    const view = [
        {
            id: 0,
            name: "리그선택",
            type: viewTypes.selectLeague,
            icon: require("../../imagesHold/ico_16.png").default,
        },
    ]

    return (
        <div className="view-select-button">
            {view.map((view) => {
                return (
                    <>
                    <ViewSelectButton
                        setActiveButton={setFirstActiveButton}
                        activeButton={activeFirstButton}
                        key={view.id}
                        viewName={view.name}
                        viewType={view.type}
                        icon={view.icon}
                    />
                    </>
                );
            })}
            {views.map((view) => {
                return (
                    <>
                    <ViewSelectButton
                        setActiveButton={setActiveButton}
                        activeButton={activeButton}
                        key={view.id}
                        viewName={view.name}
                        viewType={view.type}
                        icon={view.icon}
                    />
                    </>
                );
            })}
            {/* <div> */}
            <SelectBox
                items={[
                    { value: "전체경기", id: 1 },
                    { value: "진행중", id: 2 },
                    { value: "예정중", id: 3 },
                ]}
        />
            {/* </div> */}
        </div>
    );
}
