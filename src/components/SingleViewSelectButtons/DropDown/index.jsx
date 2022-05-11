import React, { useState } from "react";
import checkIcon from "imagesHold/check.png";

import "./style.css";

export default function SelectBox({ items }) {
    const [showItems, setShowItems] = useState(false);
    const [selectedItem, setSelectedItem] = useState(items[0]);

    const dropDown = () => {
        setShowItems((prevState) => !prevState);
    };

    const selectItem = (event, item) => {
        event.stopPropagation();
        setSelectedItem(item);
        setShowItems(false);
    };

    return (
        <div className="select-box--box">
            <div onClick={dropDown} className="select-box--container">
                <div className="select-box--selected-item">
                    <img src={checkIcon} alt="check" />
                    <span className="text">{selectedItem.value}</span>
                    <div
                        className={`select-box--arrow ${
                            showItems ? "select-box--arrow-up" : ""
                        }`}
                    >
                        <span className="select-box--arrow-down" />
                    </div>
                </div>
                <div
                    style={{ display: showItems ? "block" : "none" }}
                    className={`select-box--items`}
                >
                    <img src="../../../imagesHold/ico_16.png" alt="" />
                    {items.map((item) => (
                        <div
                            key={item.id}
                            onClick={(event) => selectItem(event, item)}
                            className={`${
                                selectedItem === item ? "selected" : ""
                            } ${
                                selectedItem === item ? "active" : ""
                            } select-box--item`}
                        >
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
