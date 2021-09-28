import clsx from "clsx";
import getRandomNumberInInterval from "helpers/getRandomNumberInInterval";
import jss from "jss";
import React, { useEffect, useState } from "react";

export default function CoefficientWithUpdate(props) {
    const enabled = process.env.NODE_ENV !== 'development';
    function getDisplayValue(prev, current) {
        if (current > prev) return displayOptions.up;
        else if (current < prev) return displayOptions.down;
        else return displayOptions.middle;
    }
    const newCoefficient = () => getRandomNumberInInterval(1.5, 5).toFixed(2);
    const initialCoefficient = newCoefficient();
    const [coefficient, setCoefficient] = useState({
        current: initialCoefficient,
        previous: initialCoefficient,
    });

    useEffect(() => {
        function getNewData() {
            const chanceToGetNewCof = 0.2;
            if (Math.random() < chanceToGetNewCof) {
                setCoefficient((prev) => {
                    return {
                        current: newCoefficient(),
                        previous: prev.current,
                    };
                });
            } else {
                setCoefficient((prev) => {
                    return {
                        current: prev.current,
                        previous: prev.current,
                    };
                });
            }
        }
        if (enabled) {
            const updateInterval = 5000;
            const interval = setInterval(getNewData, updateInterval);
            return () => clearInterval(interval);
        }
    }, [enabled]);

    const displayOptions = {
        up: "up",
        down: "down",
        middle: "middle",
    };
    const display = getDisplayValue(coefficient.previous, coefficient.current);
    const styles = {
        redNeonBorder: `
            border: 1px solid #ffbc93; /*stroke*/
            border-radius: 3.88px/3.81px;
            background: #7c2323;
            background-clip: padding-box; /*Will not allow bg color to leak outside borders*/
            box-shadow: 0 0 10.92px 1.08px #ff4c23; /*outer glow*/
    `,
        blueNeonBorder: `
                border: 1px solid #93d0ff; /*stroke*/
                border-radius: 3.88px/3.81px;
                background: #293868;
                background-clip: padding-box; /*Will not allow bg color to leak outside borders*/
                box-shadow: 0 0 10.92px 1.08px #236bff; /*outer glow*/
         `,
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    return (
        <div
            className={clsx(
                display === displayOptions.up && classes.redNeonBorder,
                display === displayOptions.down && classes.blueNeonBorder
            )}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "32px",
                width: "45px",
            }}
        >
            <p
                style={{
                    fontFamily: "Roboto-Regular",
                    fontSize: "14px",
                    color: props.selected ? "#FFF" : "#d1cecf",
                }}
            >
                {coefficient.current}
            </p>
            {display === displayOptions.up && (
                <img
                    style={{
                        position: "absolute",
                        top: "-6px",
                    }}
                    src={require("../imagesHold/up_arrow.png").default}
                    alt=""
                />
            )}
            {display === displayOptions.down && (
                <img
                    style={{
                        position: "absolute",
                        top: "22px",
                    }}
                    src={require("../imagesHold/down_arrow.png").default}
                    alt=""
                />
            )}
        </div>
    );
}
