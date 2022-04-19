import React, { useState } from "react";
import useStore from "store/useStore";
import MatchButton from "./CardSideButtons/MatchButton";
import CardHeader from "./CardHeader/CardHeader";
import CardBody from "./CardBody/CardBody";
import CardFooter from "./CardFooter/CardFooter";

export default function LiveMatchCard({
    data,
    setData,
    matchCard,
    isRed = true,
    isFavoriteCard = false,
}) {
    const { id } = matchCard;

    const [isActive, setIsActive] = useState(false);
    const withHeader = matchCard.withHeader;
    const marginBottom = matchCard.marginBottom
    console.log('withHeader', withHeader)

    const selectedCardId = useStore((state) => state.selectedCardId);
    const changeSelectedCardId = useStore(
        (state) => state.changeSelectedCardId
    );

    console.log('selectedCardId', selectedCardId)

    const selected = matchCard.active;

    const handleContainerClick = () => {
        changeSelectedCardId(id);
    };

    return (
        <div
            role="button"
            onClick={handleContainerClick}
            key={id + "live-match-card"}
            style={{ background: "", display: "flex", marginBottom: marginBottom }}
        >
            <div
                style={{ width: "638px", height: isRed ? withHeader ? "145px" : "105px" : withHeader ? "110px" : "70px" }}
                className="card-content"
            >
                {withHeader && (
                    <CardHeader
                        {...matchCard}
                        isRed={isRed}
                        isActive={isActive || selected}
                        setIsActive={setIsActive}
                    />
                )}
                <CardBody
                    {...matchCard}
                    isRed={isRed}
                    isActive={isActive || selected}
                    setIsActive={setIsActive}
                />
                {isRed && (
                    <CardFooter
                        isRed={isRed}
                        matchCard={matchCard}
                        setIsActive={setIsActive}
                    />
                )}
            </div>
            <MatchButton
                data={data}
                setData={setData}
                withHeader={withHeader}
                isRed={isRed}
                isFavoriteCard={isFavoriteCard}
                isSelected={selected || (isRed && isFavoriteCard && matchCard.active)}
                matchCard={matchCard}
                isActive={isActive}
                setIsActive={setIsActive}
            />
        </div>
    );
}
