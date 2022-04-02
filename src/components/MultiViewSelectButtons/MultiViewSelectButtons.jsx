import React, { useState } from "react";

import ViewSelectButton from "../common/ViewSelectButton/ViewSelectButton";

export default function MultiViewSelectButtons() {
    const [activeButton, setActiveButton] = useState(0)
    const views = [
        {
            id: 0,
            name: "전체추가",
        },
        {
            id: 1,
            name: "전체삭제",
        }
    ];
    return (
        <div className="view-select-button">
            {views.map((view) => {
                return (
                    <ViewSelectButton
                        key={view.id}
                        viewName={view.name}
                        id={view.id}
                        icon={view.icon}
                        isMultiViewButton={true}
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                    />
                );
            })}
        </div>
    );
}
