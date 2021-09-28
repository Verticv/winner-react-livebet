import { singleOrMultiOptions } from "helpers/constants";
import React from "react";
import useStore from "store/useStore";
import SelectLayoutButton from "./SelectLayoutButton";

export default function SelectLayoutButtons() {
    const { singleOrMulti, changeSingleOrMulti } = useStore((state) => state);

    const layoutButtons = [
        {
            id: 0,
            image: require("../imagesHold/single_layout_icon.png").default,
            text: "싱글뷰",
            offset: "0px",
            active: singleOrMulti === singleOrMultiOptions.single,
            type: singleOrMultiOptions.single,
        },
        {
            id: 1,
            image: require("../imagesHold/multi_layout_icon.png").default,
            text: "멀티뷰",
            offset: "72px",
            active: singleOrMulti === singleOrMultiOptions.multi,
            type: singleOrMultiOptions.multi,
        },
    ];

    const handleSetLayoutActive = (som) => {
        changeSingleOrMulti(som)
    };

    return (
        <>
            {layoutButtons.map((layoutButton) => {
                const { image, text, offset, active, id } = layoutButton;
                return (
                    <SelectLayoutButton
                        key={id}
                        image={image}
                        active={active}
                        text={text}
                        offset={offset}
                        handleSetLayoutActive={() =>
                            handleSetLayoutActive(layoutButton.type)
                        }
                    />
                );
            })}
        </>
    );
}
