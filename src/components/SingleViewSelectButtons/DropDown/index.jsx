import React, { useEffect, useState } from "react";
import checkIcon from "imagesHold/check.png";

import "./style.scss";

export default function SelectBox({ items }) {
    const [showItems, setShowItems] = useState(false);
    const [selectedItem, setSelectedItem] = useState(items[0]);
    useEffect(() => {
        const closeDropdown = (e) => {
            if (( e.path[0].className !== 'select-box--selected-item')
                && e.path[0].tagName !== 'IMG'
                && e.path[0].tagName !== 'SPAN'){
                setShowItems(false);
            };
        };
        document.body.addEventListener('click', closeDropdown);
        return () => document.body.addEventListener('click', closeDropdown);
    }, []);

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
            <div className="select-box--container">
                <div onClick={dropDown}  className="select-box--selected-item">                    
                    <img className="icon" src={checkIcon} alt="check" />
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
