import clsx from "clsx";
import jss from "jss";
import React from "react";
import useStore from "store/useStore";

export default function ViewSelectButton({ viewName, viewType, icon }) {
    const selectedView = useStore((state) => state.selectedView);
    const changeView = useStore((state) => state.changeView);
    const isSelected = viewType === selectedView;
    const styles = {
        bg: `
                height: 31px;
                left: 0;
                position: absolute;
                top: 0;
                width: 148px;
    `,
        bgSelected: `
                height: 32px;
                left: 6px;
                position: absolute;
                top: 1px;
                width: 136px;
                border: 2px solid #b89c5e; /*stroke*/
                -webkit-border-radius: 6px;
                -moz-border-radius: 6px;
                border-radius: 6px;
                background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnLTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNTAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9IjAlIj4KPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNjE0YTIxIiBzdG9wLW9wYWNpdHk9IjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzQ4MzcxYiIgc3RvcC1vcGFjaXR5PSIxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2JnLTIpIiAvPjwvc3ZnPg==);
                background: -moz-linear-gradient(90deg, #614a21 0, #48371b 100%);
                background: -o-linear-gradient(90deg, #614a21 0, #48371b 100%);
                background: -webkit-linear-gradient(90deg, #614a21 0, #48371b 100%);
                background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #614a21), to(#48371b));
                background: -webkit-linear-gradient(bottom, #614a21 0, #48371b 100%);
                background: -moz-linear-gradient(bottom, #614a21 0, #48371b 100%);
                background: -o-linear-gradient(bottom, #614a21 0, #48371b 100%);
                background: linear-gradient(0deg, #614a21 0, #48371b 100%);
                -moz-background-clip: padding;
                -webkit-background-clip: padding-box;
                background-clip: padding-box; /*Will not allow bg color to leak outside borders*/
            `,
        buttonBackground: `
                    height: 32px;
                    position: relative;
                    width: 136px;
                    border: 2px solid #b89c5e; /*stroke*/
                    -webkit-border-radius: 6px;
                    -moz-border-radius: 6px;
                    border-radius: 6px;
                    background: -moz-linear-gradient(90deg, #2a2a2a 0, #0e0e0e 100%);
                    background: -o-linear-gradient(90deg, #2a2a2a 0, #0e0e0e 100%);
                    background: -webkit-linear-gradient(90deg, #2a2a2a 0, #0e0e0e 100%);
                    background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #2a2a2a), to(#0e0e0e));
                    background: -webkit-linear-gradient(bottom, #2a2a2a 0, #0e0e0e 100%);
                    background: -moz-linear-gradient(bottom, #2a2a2a 0, #0e0e0e 100%);
                    background: -o-linear-gradient(bottom, #2a2a2a 0, #0e0e0e 100%);
                    background: linear-gradient(0deg, #2a2a2a 0, #0e0e0e 100%);
                    background:${
                        isSelected
                            ? "linear-gradient(0deg, #614a21 0, #48371b 100%);"
                            : "linear-gradient(0deg, #2a2a2a 0, #0e0e0e 100%);"
                    }${
            isSelected ? "box-shadow: inset 0px -10px 30px -12px #ffce62;" : ""
        }
                    -moz-background-clip: padding;
                    -webkit-background-clip: padding-box;
                    background-clip: padding-box; /*Will not allow bg color to leak outside borders*/
            `,
        hoverBackground: {
            "&:hover": {
                background:
                    "linear-gradient(0deg, #614a21 0, #48371b 100%) no-repeat",
                boxShadow: "inset 0px -10px 30px -12px #ffce62",
            },
            "&:hover $icon": {
                filter: "brightness(4)",
            },
        },
        icon: {
            marginRight: "8px",
            marginLeft: "4px",
            filter: isSelected ? "brightness(4)" : "",
        },
        text: { fontSize: "16px", textTransform: "uppercase" },
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    
    return (
        <button
            onClick={() => changeView(viewType)}
            className={clsx(classes.buttonBackground, classes.hoverBackground)}
            style={{ display: "flex", justifyContent: "center", alignItems: "center"}}
        >
            <img className={classes.icon} src={icon} alt="" />
            <p
                className={classes.text}
            >
                {viewName}
            </p>
        </button>
    );
}
