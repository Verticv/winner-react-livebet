import React from "react";
import LiveMatchCardExpanded from "./LiveMatchCardExpanded";
import LiveMatchCardExpandedPlaceholder from "./LiveMatchCardExpandedPlaceholder";

export default function LiveMatchCardExpandedMultiView() {
    const isPlaceholder = false;
    return (
        <div style={{ height: "490px", width: "510px", background: "#181a1b" }}>
            {isPlaceholder ? (
                <LiveMatchCardExpandedPlaceholder />
            ) : (
                <LiveMatchCardExpanded />
            )}
        </div>
    );
}
