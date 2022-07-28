import React from "react";
import useStore from "store/useStore";

export default function BetNavListItem({
    isLastElement,
    id,
    icon,
    text,
    number,
    marginLeft,
    handleSetNavElementActive,
}) {
    const selectedNav = useStore(state => state.selectedNav)
    const active = selectedNav === id;
    const lastElementClasses = isLastElement ? 'english' : ''
    return (
        <button
            className={`navbar-button ${active ? 'active': ''}`}
            onClick={handleSetNavElementActive}
            >   
            <div className="fade" />
            <div className="navbar-button-border">
                <div className="navbar-button-inner">
                    <div className="navbar-button-content">
                        <div className="button-content-wrapper">
                            <img src={icon} alt="" />
                            <p className={lastElementClasses}>{text}</p>
                            <div className={`${lastElementClasses} number`} style={{width: 'fit-content', margin: 'auto'}}>
                                <span>{number}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
}