import clsx from "clsx";
import jss from "jss";
import React from "react";

export default function MatchBetTab({ tab, handleSelectTab }) {
    const styles = {
        tab: `
        padding: 0 16px;
        height: 40px;
        min-width: 66px;
        box-sizing: border-box;
        background: url(${
            tab.selected
                ? require("../imagesHold/bg_150.jpg").default
                : require("../imagesHold/match_bet_background.png").default
        });
        background-size: 100% 100%;
        margin-left: 1px;
        z-index: 3;
        box-shadow: 0px 1px 1px 1px rgba(255,255,255,0.05) inset;
        // border-left: 1px solid;
        // border-right: 1px solid;
        // border-bottom: none;
        // border-top: 1px solid;
        // border-image-slice: 1;
        // border-image-source: linear-gradient(270deg, rgba(255,255,240,0.1) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(255,255,240,0.1) 100%);
         
        ${
            tab.selected
                ? `
        background-repeat: no-repeat;
        border-left: none;
        border-right: none;      
        `
                : ""
        }
        `,
        tabHover: {
            "&:hover": {
                background: `url(${
                    require("../imagesHold/bg_150.jpg").default
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                borderLeft: "none",
                borderRight: "none",
            },
        },
        tabText: `
            left: 19px;
            ${tab.selected ? "opacity: 1.0;" : "opacity: 0.4;"}
            ${tab.selected ? "color: black;" : "color: white;"}
            line-height: 40px;
            text-align: center;
            text-transform: uppercase;
            `,
    };
    const { classes } = jss.createStyleSheet(styles).attach();

    return (
        <button
            onClick={handleSelectTab}
            className={clsx(classes.tab, classes.tabHover)}
        >
            <p className={classes.tabText}>{tab.name}</p>
        </button>
    );
}
