import React from "react";
import useStore from "store/useStore";

export default function ViewSelectButton({ viewName, viewType, icon }) {
    const selectedView = useStore((state) => state.selectedView);
    const changeView = useStore((state) => state.changeView);
    const isSelected = viewType === selectedView;
    return (
        <button
            onClick={() => changeView(viewType)}
            className={`${isSelected ? "active" : ""}`}
        >
            <img src={icon} alt="" />
            <p>{viewName}</p>
        </button>
    );
}
