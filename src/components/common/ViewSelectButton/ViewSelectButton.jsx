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
    key,
}) {
    const changeView = useStore((state) => state.changeView);
    const leaguesToAdd = useStore((state) => state.selectedLeagues);
    return (
        <button
            onClick={(e) => {
                if (viewName !== '리그선택') {
                    setActiveButton(viewName)
                }
                if (isMultiViewButton) {
                    setActiveButton(id)
                    if (onclick) {
                        onclick(e)
                    }
                } else {
                    changeView(viewType)
                }
            }}
            className={`nav-view-button ${activeButton === viewName || (viewName === '리그선택' && leaguesToAdd.length > 0) ? 'active' : '' } ${isMultiViewButton ? "multi" :""}`}
        >
            {!isMultiViewButton && <img src={icon} alt="" />}
            <p>{viewName}</p>
        </button>
    );
}
