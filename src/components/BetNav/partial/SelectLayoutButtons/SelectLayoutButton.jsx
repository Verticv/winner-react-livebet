import React from "react";

export default function SelectLayoutButton({
    text,
    image,
    offset,
    active,
    handleSetLayoutActive,
}) {
    return (
        <button
            className={`select-layout-button ${active ? "active" : ""}`}
            onClick={handleSetLayoutActive}
        >
            <div className="layout-button-content">
                <img src={image} alt="" width="16" height="16" />
                <p>{text}</p>
            </div>
            <div className="fade" />
        </button>
    );
}
