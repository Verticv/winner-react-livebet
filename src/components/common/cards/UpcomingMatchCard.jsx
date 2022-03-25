import jss from "jss";
import React from "react";
import useStore from "store/useStore";
import MatchFavoriteButton from "./CardSideButtons/FavoriteButton";

export default function UpcomingMatchCard({ upcomingMatchCard }) {
    const changeSelectedCardId = useStore(
        (state) => state.changeSelectedCardId
    );
    const selectedCardId = useStore(
        (state) => state.selectedCardId
    );
    const selected = upcomingMatchCard.id === selectedCardId;
    const styles = {
        container: {
            height: "110px",
            flexShrink: "0",
            marginBottom: "8px",
            position: "relative",
            width: "681px",
            background: selected
                ? `url(${require("../../../imagesHold/upcoming_card_selected.png").default})`
                : `url(${require("../../../imagesHold/upcoming_card.png").default})`,
            "&:hover": {
                background: `url(${require("../../../imagesHold/upcoming_card_selected.png").default})`,
            },
        },
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    return (
        <div className={classes.container}>
            <div className="f-5">
                <img
                    className="layer-24"
                    src={require("../../../imagesHold/image_80.png").default}
                    alt=""
                    width="18"
                    height="18"
                />
                <img
                    className="layer-25"
                    src={require("../../../imagesHold/image_105.png").default}
                    alt=""
                    width="30"
                    height="19"
                />
                <p className="text-84">라리가</p>
            </div>
            <div className="row-29">
                <div className="col-33">
                    <div className="row-43">
                        <MatchFavoriteButton matchCard={upcomingMatchCard} />
                        <div className="team-9">
                            <img
                                className="layer-27"
                                src={
                                    require("../../../imagesHold/image_66.png")
                                        .default
                                }
                                alt=""
                                width="13"
                                height="15"
                            />
                            <div className="bg-holder-33">
                                <p className="h-5">h</p>
                            </div>
                            <p className="text-85">fc바로셀로나</p>
                        </div>
                    </div>
                    <div className="team-10">
                        <div className="group-41">
                            <img
                                className="layer-28"
                                src={
                                    require("../../../imagesHold/image_110.png")
                                        .default
                                }
                                alt=""
                                width="12"
                                height="14"
                            />
                        </div>
                        <div className="bg-holder-34">
                            <img
                                className="a-5"
                                src={require("../../../imagesHold/a.png").default}
                                alt="a"
                                width="8"
                                height="9"
                                title="a"
                            />
                        </div>
                        <p className="text-86">레알마드리드</p>
                    </div>
                </div>
                <div className="col-28">
                    <div className="wrapper-39">
                        <div className="text-87">
                            <p>경기시간</p>
                        </div>
                    </div>
                    <p className="text-88">02-06 21:00</p>
                </div>
            </div>
            <div className="line-18"></div>
            <button
                onClick={() => changeSelectedCardId(upcomingMatchCard.id)}
                className="btn-holder"
                style={{ boxShadow: "-5px 1px 16px 0px rgb(8 8 8 / 74%)" }}
            >
                <div className="line-19"></div>
                <img
                    className="btn-6"
                    src={require("../../../imagesHold/btn_2.png").default}
                    alt=""
                    width="43"
                    height="110"
                />
            </button>
            <p style={{ pointerEvents: "none" }} className="text-89">
                정보
            </p>
        </div>
    );
}
