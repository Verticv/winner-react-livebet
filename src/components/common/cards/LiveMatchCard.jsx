import React, { useState } from "react";
import useStore from "store/useStore";
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
                    {...matchCard}
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
                {isRed && (
                    <CardFooter
                        isRed={isRed}
                        isActive={isActive || selected}
                        {...matchCard}
                    />
                )}
            </div>
            <MatchButton
                isRed={isRed}
                isFavoriteCard={isFavoriteCard}
                isSelected={selected}
                matchCard={matchCard}
            />
        </div>
    );
}
