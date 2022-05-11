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
    onclick,
    id,
}) {
    const changeView = useStore((state) => state.changeView);
    return (
        <button
            onClick={(e) => {
                if(viewName !== '리그선택')
                setActiveButton(viewName)
                if (isMultiViewButton) {
                    setActiveButton(id)
                    if (onclick) {
                        onclick(e)
                    }
                } else {
                    changeView(viewType)
                }
            }}
            className={`nav-view-button ${activeButton === viewName ? 'active' : ''} ${isMultiViewButton ? "multi" :""}`}
        >
            {!isMultiViewButton && <img src={icon} alt="" />}
            <p>{viewName}</p>
        </button>
    );
}
