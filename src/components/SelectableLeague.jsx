import React from "react";

export default function SelectableLeague({
    league,
    handleLeaguesToAdd,
    leaguesToAdd,
}) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                position: "relative",
            }}
            className="main-live-league-row-8"
        >
            <button
                onClick={() => {
                    if (leaguesToAdd.includes(league.id)) {
                        handleLeaguesToAdd(leaguesToAdd.filter(le => le !== league.id));
                    } else {
                        handleLeaguesToAdd([...leaguesToAdd, league.id]);
                    }
                }}
                style={{
                    height: "16px",
                    width: "16px",
                    background: "#000000",
                    marginRight: "12px",
                }}
            >
                {leaguesToAdd.includes(league.id) && (
                    <img
                        className="main-live-league-chx-ck"
                        src={require("../imagesHold/chx_ck.png").default}
                        alt=""
                        width="16"
                        height="12"
                    ></img>
                )}
            </button>
            <div style={{ width: "32px", height: "16px" }}>
                <img src={league.flag} alt="" width="29" height="18" />
            </div>
            <p
                style={{
                    marginTop: "2px",
                    marginLeft: "6px",
                    whiteSpace: "nowrap",
                }}
            >
                {league.name}
            </p>
        </div>
    );
}
