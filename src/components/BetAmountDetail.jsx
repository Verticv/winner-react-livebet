import React from 'react'

export default function BetAmountDetail({name, amount}) {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "35px",
                    width: "360px",
                    background:
                        "linear-gradient(90deg, #1a1a20 0, #161616 100%)",
                    padding: "0 8px",
                    marginBottom: "1px"
                }}
            >
                <p className="text-146">{name}</p>
                <p className="text-147">{amount}</p>
            </div>
            <div className="bg-21"></div>
        </>
    );
}
