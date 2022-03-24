import React from "react";
import useStore from "store/useStore";
import "./SideButton.scss"

export default function LiveMatchCardButton({matchCard, isSelected}) {
    const addBetSlipBet = useStore(s =>s.addBetSlipBet)
    // const styles = {
    //     buttonContainer: {
    //         height: "145px",
    //         left: "638px",
    //         position: "absolute",
    //         top: "0",
    //         width: "43px",
    //         background: `url(${
    //             require("../../../../imagesHold/big_red_button_bg.png").default
    //         })`,
    //         mozBackgroundClip: "padding",
    //         webkitBackgroundClip: "padding-box",
    //         backgroundClip: "padding-box",
    //         zIndex: "1",
    //         boxShadow: "-5px 1px 16px 0px rgb(8 8 8 / 74%)",
    //         "&:hover": {
    //             textShadow:
    //                 "0.4px 0.4px 9.6px rgb(255 237 154 / 90%), -0.4px -0.4px 9.6px rgb(255 237 154 / 90%), 0.4px -0.4px 9.6px rgb(255 237 154 / 90%), -0.4px 0.4px 9.6px rgb(255 237 154 / 90%)",
    //             background: `url(${
    //                 require("../../../../imagesHold/bg_222.png").default
    //             })`,
    //         },
    //     },
    // };
    // const { classes } = jss.createStyleSheet(styles).attach();
    const handlePlusButton = (event) => {
        event.stopPropagation();
        addBetSlipBet(matchCard);
    };
    const redCard = true;

    return (
        <button onClick={handlePlusButton} className={`side-button ${redCard ? "red-card" : "blue-card"} ${isSelected ? "active" : ""}`}>
            <div className="side-button-wrapper">
                {redCard ? (
                    <>
                        <p className="plus">+</p>
                        <p className="number">23</p>
                    </>
                ) : (<>
                <p className="text">정보</p>
                </>)}
            </div>
            <div className="line"></div>
        </button>
    );
}
