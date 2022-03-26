import React from 'react'

export default function BetId() {
    return (
        <div
            style={{
                height: "35px",
                width: "360px",
                background: "linear-gradient(90deg, #2a2a34 0, #1a1a20 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 8px",
            }}
        >
            <p
                style={{
                    color: "#e9ca4e",
                    textTransform: "uppercase",
                }}
            >
                <span style={{ color: "#fff" }}>ID : </span>186123533
            </p>
            <p className="text-171">2020-05-16 03:45:11</p>
        </div>
    );
}
