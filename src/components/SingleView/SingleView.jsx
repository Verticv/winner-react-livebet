import React from "react";
import LiveMatchCards from "../common/cards/LiveMatchCards";
import LiveUpcomingMatchesCount from "../LiveUpcomingMatchesCount";
// import MatchBets from "./MatchBets";
import useStore from "store/useStore";
import UpcomingMatches from "../UpcomingMatches";
import MatchBets from "../common/MatchBets/MatchBets";
import "./SingleView.scss";


export default function SingleView() {
    const selectedNav = useStore((state) => state.selectedNav);
    console.log('selectedNavselectedNav', selectedNav)
    return (
        <div
            className="match-img-wrapper hide-scrollbar"
            style={{
                height: "954px",
                // left: "0",
                // position: "absolute",
                // top: "126px",
                // width: "1550px",
                overflowY: "scroll",
                overflowX: "hidden",
                background: "black",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    // left: "0",
                    // position: "absolute",
                    // top: "0",
                    width: "681px",
                }}
            >
                <div><LiveMatchCards /></div>

                
                <LiveUpcomingMatchesCount />
                {selectedNav === 0 && <div><LiveMatchCards tempFavorite /></div>}
                {/* <div style={{height: "40px", width: '100%', backgroundColor: '#0c0c0c'}}></div> */}
                <UpcomingMatches />

            </div>
            <div>
                <div className="match-img" />
                <div className="match-bets-wrapper">
                    <MatchBets />
                </div>
            </div>
        </div>
    );
}
