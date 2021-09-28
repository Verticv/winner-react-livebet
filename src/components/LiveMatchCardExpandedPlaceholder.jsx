import React from 'react'

export default function LiveMatchCardExpandedPlaceholder() {
    return (
        <div
            className="main-multi-bg-holder-35"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                }}
            >
                <img
                    src={require("../imagesHold/multi/ico_54.png").default}
                    alt=""
                    width="62"
                    height="62"
                    style={{ marginBottom: "12px" }}
                />
                <p
                    className="main-multi-text-86"
                    style={{ whiteSpace: "nowrap" }}
                >
                    상단에 있는 경기를 더블클릭하거나
                    <br />
                    여기로 드래그 하세요.
                </p>
            </div>
        </div>
    );
}
