import clsx from "clsx";
import jss from "jss";
import React from "react";
const bg = require("../imagesHold/layout_button_background.png").default;
const activeBg = require("../imagesHold/bg_134.png").default;
export default function SelectLayoutButton({
    text,
    image,
    offset,
    active,
    handleSetLayoutActive,
}) {
    const styles = {
        background: `
                height: 73px;
                left: ${offset};
                position: absolute;
                top: 0;
                width: 64px;
                -webkit-border-radius: 10px;
                -moz-border-radius: 10px;
                border-radius: 10px;
                background: url(${active ? activeBg : bg}) no-repeat;
                -webkit-box-shadow: 0 3px 0 0 #351a27;
                -moz-box-shadow: 0 3px 0 0 #351a27;
                box-shadow: 0 3px 0 0 #351a27; /*drop shadow*/
        `,
        text: {
            left: "4px",
            position: "absolute",
            top: "23px",
            opacity: active ? "1" : "0.4",
            color: active ? "#000000" : "#fefefe",
            textAlign: "center",
            textTransform: "uppercase",
        },
        icon: {
            position: "absolute",
            right: "16px",
            top: "0",
            filter: active ? "brightness(0%)" : "none",
        },
        hoverBackground: {
            "&:hover": {
                background: `url(${activeBg}) no-repeat`,
            },
            "&:hover $icon": {
                filter: "brightness(0%)",
            },
            "&:hover $text": {
                borderRadius: "4px",
                color: "#000000",
                opacity: "1"
            },
        },
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    return (
        <button
            className={clsx(classes.background, classes.hoverBackground)}
            onClick={handleSetLayoutActive}
        >
            <div
                style={{
                    height: "38px",
                    left: "8px",
                    position: "absolute",
                    top: "19px",
                    width: "48px",
                }}
            >
                <img
                    className={classes.icon}
                    src={image}
                    alt=""
                    width="16"
                    height="16"
                />
                <p className={classes.text}>{text}</p>
            </div>
        </button>
    );
}
