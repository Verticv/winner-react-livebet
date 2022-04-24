import React, { useState } from "react";
import useStore from "store/useStore";

import ViewSelectButton from "../common/ViewSelectButton/ViewSelectButton";

export default function MultiViewSelectButtons() {
    const [activeButton, setActiveButton] = useState(0);
    const cardsList = useStore((state) => state.multiViewLiveMatchCards);
    const updateMultiViewMatches = useStore((state) => state.updateMultiViewMatches);
    const resultsCardsList = useStore((state) => state.multiViewLiveMatchResultsCards);
    const updateMultiViewMatchesResults = useStore((state) => state.updateMultiViewMatchesResults);


    const views = [
        {
            id: 0,
            name: "전체추가",
            onclick: (event) => {
                event.stopPropagation();
                if (cardsList.length > 0) {
                    
                    const newMatchCards = [...cardsList, ...resultsCardsList]
                    const lastId = newMatchCards[newMatchCards.length - 1].id
                    const newData = [{
                        id: lastId + 1,
                        team1: "FC바로셀로나",
                        team2: "레알마드리드",
                        isEmpty: true,
                    },
                    {
                        id: lastId + 2,
                        team1: "FC바로셀로나",
                        team2: "레알마드리드",
                        isEmpty: true,
                    },
                    {
                        id: lastId + 3,
                        team1: "FC바로셀로나",
                        team2: "레알마드리드",
                        isEmpty: true,
                    }]
                    const newMatchResultsCards = newMatchCards.filter(card => !card.isEmpty)
                    newMatchResultsCards.push(...newData)
                    updateMultiViewMatchesResults(newMatchResultsCards)
                    updateMultiViewMatches([])
                }
            },
        },
        {
            id: 1,
            name: "전체삭제",
            onclick: (event) => {
                event.stopPropagation();
                updateMultiViewMatchesResults([{
                    id: 0,
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
                {
                    id: 1,
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
                {
                    id: 2,
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
                {
                    id: 3,
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
                {
                    id: 4,
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
                {
                    id: 5,
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                }])
                const notEmptyMatchCards = resultsCardsList.map(card => {
                    const newCard = {...card}
                    newCard.isEmpty = true
                    return newCard
                }) || []
                console.log('notEmptyMatchCards', notEmptyMatchCards)
                updateMultiViewMatches([...cardsList, ...notEmptyMatchCards])
            },
        },
    ];
    return (
        <div className="view-select-button">
            {views.map((view) => {
                return (
                    <ViewSelectButton
                        key={view.id}
                        viewName={view.name}
                        id={view.id}
                        icon={view.icon}
                        onclick={view.onclick}
                        isMultiViewButton={true}
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                    />
                );
            })}
        </div>
    );
}
