import React from "react";
import useStore from "store/useStore";

import "./ViewSelectButton.scss"

export default function ViewSelectButton({
    viewName,
    viewType,
    icon,
    isMultiViewButton = false,
    activeButton,
    setActiveButton,
    id
}) {
    const selectedView = useStore((state) => state.selectedView);
    const changeView = useStore((state) => state.changeView);
    const isSelected = viewType === selectedView || (activeButton !== undefined && activeButton === id);
    return (
        <button
            onClick={() => isMultiViewButton ? setActiveButton(id) : changeView(viewType)}
            className={`${isSelected ? "active" : ""} nav-view-button ${isMultiViewButton ? "multi" :""}`}
        >
            {!isMultiViewButton && <img src={icon} alt="" />}
            <p>{viewName}</p>
        </button>
    );
}
