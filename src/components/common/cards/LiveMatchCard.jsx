/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useStore from "store/useStore";
// import LiveMatchCardButton from "./SideButton/LiveMatchCardButton";
// import LiveMatchCoefficient from "./LiveMatchCoefficient";
// import FavoriteButton from "./CardSideButtons/FavoriteButton";
import MatchButton from "./CardSideButtons/MatchButton";
import CardHeader from "./CardHeader/CardHeader";
import CardBody from "./CardBody/CardBody";
import CardFooter from "./CardFooter/CardFooter";

export default function LiveMatchCard({
    matchCard,
    isRed = true,
    isFavoriteCard = false,
}) {
    const { id } = matchCard;

    const [isActive, setIsActive] = useState(false);

    const selectedCardId = useStore((state) => state.selectedCardId);
    const changeSelectedCardId = useStore(
        (state) => state.changeSelectedCardId
    );
    
    const selected = selectedCardId === matchCard.id;

    const handleContainerClick = () => {
        changeSelectedCardId(id);
    };

    return (
        <div
            role="button"
            onClick={handleContainerClick}
            key={id + "live-match-card"}
            style={{ background: "", display: "flex", marginBottom: "10px" }}
        >
            <div
                style={{ width: "638px", height: isRed ? "145px" : "110px" }}
                className="card-content"
            >
                <CardHeader
                    isRed={isRed}
                    isActive={isActive || selected}
                    setIsActive={setIsActive}
                />
                <CardBody
                    {...matchCard}
                    isRed={isRed}
                    isActive={isActive || selected}
                    setIsActive={setIsActive}
                />
                {isRed && <CardFooter />}
            </div>
            <MatchButton
                isRed={isRed}
                isFavoriteCard={isFavoriteCard}
                isSelected={selected}
                matchCard={matchCard}
            />
            {/* <FavoriteButton isSelected={selected} matchCard={matchCard} /> */}
        </div>
    );

    // return (
    //     <div
    //         role="button"
    //         onClick={handleContainerClick}
    //         key={id + "live-match-card"}
    //         className={classes.container}
    //     >
    //         <div className={classes.inlay}>
    //             <div className="row-39">
    //                 <div className="col-36">
    //                     <div className="team-5">
    //                         <div className="group-34">
    //                             <img
    //                                 className="layer-14"
    //                                 src={
    //                                     require("../../../imagesHold/image_67.png")
    //                                         .default
    //                                 }
    //                                 alt=""
    //                                 width="15"
    //                                 height="10"
    //                             />
    //                         </div>
    //                         <div className="bg-holder-26">
    //                             <p className="h-3">h</p>
    //                         </div>
    //                         <p className="text-54">{team1}</p>
    //                     </div>
    //                     {
    //                         // Star/Favorite Icon
    //                     }
    //                     <MatchFavoriteButton matchCard={matchCard} />
    //                     <div className="team-6">
    //                         <img
    //                             className="layer-16"
    //                             src={
    //                                 require("../../../imagesHold/image_64.png")
    //                                     .default
    //                             }
    //                             alt=""
    //                             width="13"
    //                             height="15"
    //                         />
    //                         <div className="bg-holder-27">
    //                             <img
    //                                 className="a-3"
    //                                 src={require("../../../imagesHold/a.png").default}
    //                                 alt="a"
    //                                 width="8"
    //                                 height="9"
    //                                 title="a"
    //                             />
    //                         </div>
    //                         <p className="text-55">{team2}</p>
    //                     </div>
    //                 </div>
    //                 <div className="col-40">
    //                     <div className="wrapper-52">
    //                         <div className="text-56">
    //                             <p>{currentTime}</p>
    //                         </div>
    //                     </div>
    //                     <button
    //                         onClick={(event) => {
    //                             event.stopPropagation();
    //                             changePlayingMatchId(id);
    //                         }}
    //                     >
    //                         <img
    //                             className="ico-19"
    //                             src={
    //                                 playingMatchId === id
    //                                     ? require("../../../imagesHold/play_button_selected.png")
    //                                           .default
    //                                     : require("../../../imagesHold/play_button.png")
    //                                           .default
    //                             }
    //                             alt=""
    //                             width="33"
    //                             height="33"
    //                         />
    //                     </button>
    //                 </div>
    //                 <div className="col-27">
    //                     <p className="text-57">
    //                         {team1stats}
    //                         <span className="colore9ca4e">{team1Goals}</span>
    //                     </p>
    //                     <p className="text-58">
    //                         {team2stats}
    //                         <span className="colore9ca4e">{team2Goals}</span>
    //                     </p>
    //                 </div>
    //             </div>
    //             <LiveMatchCoefficient
    //                 team1={team1}
    //                 team2={team2}
    //                 team1WinKof={team1WinKof}
    //                 team2WinKof={team2WinKof}
    //                 tieKof={tieKof}
    //                 parentClasses={classes}
    //                 parentSelected={selected}
    //                 matchCard={matchCard}
    //             />
    //         </div>
    //         <LiveMatchCardButton matchCard={matchCard} />
    //         <div className="f-4">
    //             <div className="s-4">
    //                 <img
    //                     className="layer-22"
    //                     src={require("../../../imagesHold/image_70.png").default}
    //                     alt=""
    //                     width="18"
    //                     height="18"
    //                 />
    //                 <img
    //                     className="layer-23"
    //                     src={require("../../../imagesHold/image_61.png").default}
    //                     alt=""
    //                     width="29"
    //                     height="18"
    //                 />
    //                 <p className="text-77">{league}</p>
    //             </div>
    //             <div className="e-4">
    //                 <img
    //                     className="c-3"
    //                     src={require("../../../imagesHold/c.png").default}
    //                     alt=""
    //                     width="18"
    //                     height="18"
    //                 />
    //                 <div className="y-3"></div>
    //                 <div className="r-3"></div>
    //                 <img
    //                     className="p-3"
    //                     src={require("../../../imagesHold/p.png").default}
    //                     alt=""
    //                 />
    //                 <img
    //                     className="ico-20"
    //                     src={require("../../../imagesHold/g.png").default}
    //                     alt=""
    //                     width="18"
    //                     height="18"
    //                 />
    //             </div>
    //         </div>
    //         <div className="line-16"></div>
    //         <div className="line-17"></div>
    //         {/* <img className="gra-4" src={require("../imagesHold/gra.png").default} alt="" width="31" height="145"/> */}
    //     </div>
    // );
}
