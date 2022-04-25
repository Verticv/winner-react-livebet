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
                const defaultMatchesResults = [{
                    id: 101,
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
                {
                    id: 102,
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
                {
                    id: 103,
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
                {
                    id: 104,
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
                {
                    id: 105,
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
                {
                    id: 106,
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                }]
                updateMultiViewMatchesResults(defaultMatchesResults)
                window.cardsData = defaultMatchesResults
                const notEmptyMatchCards = resultsCardsList.map(card => {
                    const newCard = {...card}
                    newCard.isEmpty = true
                    return newCard
                }) || []
                console.log('notEmptyMatchCards', notEmptyMatchCards)
                const defaultData = [
                    {
                        id: 201,
                        title: "후반전 35분",
                        team1: "FC바로셀로나",
                        team2: "레알마드리드",
                        team1Result1: "0",
                        team1Result2: "0",
                        team1Goal: "1",
                        team2Result1: "0",
                        team2Result2: "0",
                        team2Goal: "0",
                    },
                    {
                        id: 202,
                        title: "후반전 15분",
                        team1: "맨체스터유나이티드",
                        team2: "리버풀",
                        team1Result1: "1",
                        team1Result2: "0",
                        team1Goal: "1",
                        team2Result1: "5",
                        team2Result2: "0",
                        team2Goal: "0",
                    },
                    {
                        id: 203,
                        title: "후반전 15분",
                        team1: "맨시티",
                        team2: "첼시",
                        team1Result1: "1",
                        team1Result2: "0",
                        team1Goal: "1",
                        team2Result1: "0",
                        team2Result2: "0",
                        team2Goal: "0",
                    },
                    {
                        id: 204,
                        title: "후반전 11분",
                        team1: "바이헤른뮌헨",
                        team2: "프랑크푸르트",
                        team1Result1: "1",
                        team1Result2: "0",
                        team1Goal: "1",
                        team2Result1: "0",
                        team2Result2: "0",
                        team2Goal: "0",
                    },
                    {
                        id: 205,
                        title: "후반전 11분",
                        team1: "바이헤른뮌헨",
                        team2: "프랑크푸르트",
                        team1Result1: "1",
                        team1Result2: "0",
                        team1Goal: "1",
                        team2Result1: "0",
                        team2Result2: "0",
                        team2Goal: "0",
                    },
                    {
                        id: 206,
                        title: "후반전 11분",
                        team1: "바이헤른뮌헨",
                        team2: "프랑크푸르트",
                        team1Result1: "1",
                        team1Result2: "0",
                        team1Goal: "1",
                        team2Result1: "0",
                        team2Result2: "0",
                        team2Goal: "0",
                    },
                    {
                        id: 207,
                        title: "후반전 11분",
                        team1: "바이헤른뮌헨",
                        team2: "프랑크푸르트",
                        team1Result1: "1",
                        team1Result2: "0",
                        team1Goal: "1",
                        team2Result1: "0",
                        team2Result2: "0",
                        team2Goal: "0",
                    },
                ]
                updateMultiViewMatches(defaultData)
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
