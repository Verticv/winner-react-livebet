import { viewTypes } from "helpers/constants";
import React from "react";
import ViewSelectButton from "./ViewSelectButton";

export default function ViewSelectButtons() {
    const views = [
        {
            id: 0,
            name: "리그선택",
            type: viewTypes.selectLeague,
            icon: require("../imagesHold/ico_16.png").default,
        },
        {
            id: 1,
            name: "시간순보기",
            type: viewTypes.chronological,
            icon: require("../imagesHold/ico_17.png").default,
        },
        {
            id: 2,
            name: "리그순보기",
            type: viewTypes.viewLeague,

            icon: require("../imagesHold/ico_18.png").default,
        },
    ];
    return (
        <div style={{ display: "flex", justifyContent:'space-between' }} className="row-32">
            {views.map((view) => {
                return (
                    <ViewSelectButton
                        key={view.id}
                        viewName={view.name}
                        viewType={view.type}
                        icon={view.icon}
                    />
                );
            })}
        </div>
    );
}
