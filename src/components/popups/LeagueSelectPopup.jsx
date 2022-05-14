import SelectableLeague from "components/popups/SelectableLeague/SelectableLeague";
import { viewTypes } from "helpers/constants";
import React, { useRef, useState } from "react";
import useStore from "store/useStore";
import { useOnClickOutside } from "../../helpers/functions";
import "./LeagueSelectPopup.scss";

export default function LeagueSelectPopup(props) {
    const leagues = [
        {
            id: 0,
            name: "라리가",
            flag: require("../../imagesHold/image_141.png").default,
        },
        {
            id: 1,
            name: "분데스리가",
            flag: require("../../imagesHold/image_145.png").default,
            marginTop: "5px",
        },
        {
            id: 2,
            name: "프리미어리그",
            flag: require("../../imagesHold/image_149.png").default,
            marginTop: "5px",
        },
        {
            id: 3,
            name: "라리가",
            flag: require("../../imagesHold/image_153.png").default,
            marginTop: "5px",
        },
        {
            id: 4,
            name: "프리미어리그",
            flag: require("../../imagesHold/image_143.png").default,
        },
        {
            id: 5,
            name: "라리가",
            flag: require("../../imagesHold/image_147.png").default,
            marginTop: "5px",
        },
        {
            id: 6,
            name: "분데스리가",
            flag: require("../../imagesHold/image_145.png").default,
            marginTop: "5px",
        },
        {
            id: 7,
            name: "프리미어리그",
            flag: require("../../imagesHold/image_149.png").default,
            marginTop: "5px",
        },
    ];
    const { selectedView, changeView, selectedLeagues, changeLeagues } =
        useStore((state) => state);
    const [leaguesToAdd, setLeaguesToAdd] = useState(selectedLeagues);

    const handleLeaguesToAdd = (leaguesToAdd) => {
        setLeaguesToAdd(leaguesToAdd);
    };
    const ref = useRef();
    useOnClickOutside(ref, () => changeView(viewTypes.chronological));
    function allLeaguesSelected() {
        let allLeaguesSelected = true;
        leagues.forEach((league) => {
            if (!leaguesToAdd.includes(league.id)) allLeaguesSelected = false;
        });
        return allLeaguesSelected;
    }
    function toggleAllLeagues(toggleOn) {
        if (toggleOn) handleLeaguesToAdd(leagues.map((league) => league.id));
        else handleLeaguesToAdd([]);
    }
    return (
        selectedView === viewTypes.selectLeague && (
            <>  
                <div style={{zIndex: '30', position: 'fixed', background: 'black', opacity: 0.702, width: '1920px', height: '100vh'}} />
                <div className="league-popup">
                    <div className="league-popup-wrapper" ref={ref}>
                        <div className="header">
                            <div className="line-1" />
                            <p className="text">리그선택 </p>
                            <button
                                // style={{ borderLeft: "1px solid black" }}
                                onClick={() =>
                                    changeView(viewTypes.chronological)
                                }
                            >
                                <div className="button-content">
                                    <div>
                                        <img
                                            src={
                                                require("../../imagesHold/ico.png")
                                                    .default
                                            }
                                            alt="fffff"
                                        />
                                    </div>
                                </div>
                            </button>
                        </div>

                        <div className="main-live-league-bg-holder-3">
                            <div className="main-live-league-col">
                                <div className="main-live-league-group-4">
                                    <button
                                        onClick={() =>
                                            toggleAllLeagues(
                                                !allLeaguesSelected()
                                            )
                                        }
                                        className="main-live-league-chck"
                                    >
                                        {allLeaguesSelected() && (
                                            <img
                                                className="main-live-league-chx-ck"
                                                src={
                                                    require("../../imagesHold/chx_ck.png")
                                                        .default
                                                }
                                                alt=""
                                                width="16"
                                                height="12"
                                            ></img>
                                        )}
                                    </button>
                                    <p
                                        style={{ whiteSpace: "nowrap" }}
                                        className="main-live-league-text-2"
                                    >
                                        모든 리그 선택
                                    </p>
                                </div>
                                <div className="main-live-league-group-5">
                                    <div
                                        style={{
                                            display: "flex",
                                            // justifyContent: "space-between",
                                            flexDirection: "column",
                                        }}
                                        className="main-live-league-col-2"
                                    >
                                        {leagues
                                            .slice(
                                                0,
                                                Math.ceil(leagues.length / 2)
                                            )
                                            .map((league) => {
                                                return (
                                                    <SelectableLeague
                                                        key={
                                                            league.id +
                                                            "league-select"
                                                        }
                                                        league={league}
                                                        handleLeaguesToAdd={
                                                            handleLeaguesToAdd
                                                        }
                                                        leaguesToAdd={
                                                            leaguesToAdd
                                                        }
                                                    />
                                                );
                                            })}
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            // justifyContent: "space-between",
                                            flexDirection: "column",
                                        }}
                                        className="main-live-league-col-3"
                                    >
                                        {leagues
                                            .slice(
                                                Math.floor(leagues.length / 2),
                                                leagues.length
                                            )
                                            .map((league) => {
                                                return (
                                                    <SelectableLeague
                                                        key={
                                                            league.id +
                                                            "league-select"
                                                        }
                                                        league={league}
                                                        handleLeaguesToAdd={
                                                            handleLeaguesToAdd
                                                        }
                                                        leaguesToAdd={
                                                            leaguesToAdd
                                                        }
                                                    />
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-live-league-bg-holder-4">
                            <div className="main-live-league-bg-holder-5">
                                <div className="main-live-league-group-6">
                                    <button
                                        onClick={() => {
                                            changeView(viewTypes.chronological);
                                            handleLeaguesToAdd(selectedLeagues);
                                        }}
                                        className="main-live-league-bg-holder-7"
                                    >
                                        <p
                                            style={{ pointerEvents: "none" }}
                                            className="main-live-league-text-11"
                                        >
                                            취소
                                        </p>
                                    </button>
                                    <div className="main-live-league-wrapper-4">
                                        <div>
                                            <button
                                                onClick={() => {
                                                    changeLeagues(leaguesToAdd);
                                                    changeView(
                                                        viewTypes.chronological
                                                    );
                                                }}
                                                className="main-live-league-bg-holder-10"
                                            >
                                                <p
                                                    style={{
                                                        pointerEvents: "none",
                                                    }}
                                                    className="main-live-league-text-12"
                                                >
                                                    확인
                                                </p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    );
}
