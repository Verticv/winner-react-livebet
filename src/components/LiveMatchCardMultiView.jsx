import React from "react";

export default function LiveMatchCardMultiView() {
    return (
        <div className="main-multi-group-3" style={{position: 'relative', flexShrink: 0, marginRight:'5px'}}>
            <div className="main-multi-line"></div>
            <div className="main-multi-row-31">
                <p className="main-multi-text">후반전 35분</p>
                <p className="main-multi-text-2">
                    12
                    <span className="main-multi-text-style">점수</span>
                </p>
            </div>
            <div className="main-multi-col-7">
                <div className="main-multi-row-7">
                    <div className="main-multi-team">
                        <div className="main-multi-group-4">
                            <img
                                className="main-multi-layer"
                                src={
                                    require("../imagesHold/multi/image_43.png")
                                        .default
                                }
                                alt=""
                                width="15"
                                height="10"
                            />
                        </div>
                        <div className="main-multi-bg-holder">
                            <p className="main-multi-h">h</p>
                        </div>
                        <p className="main-multi-text-3">fc바로셀로나</p>
                    </div>
                    <p className="main-multi-text-4">
                        0<span className="main-multi-text-style-2">0</span>
                        <span className="colore9ca4e">1</span>
                    </p>
                </div>
                <div className="main-multi-row-8">
                    <div className="main-multi-team-2">
                        <img
                            className="main-multi-layer-2"
                            src={
                                require("../imagesHold/multi/image_40.png")
                                    .default
                            }
                            alt=""
                            width="13"
                            height="15"
                        />
                        <div className="main-multi-bg-holder-2">
                            <img
                                className="main-multi-a"
                                src={
                                    require("../imagesHold/multi/a.png").default
                                }
                                alt="a"
                                width="8"
                                height="7"
                                title="a"
                            />
                        </div>
                        <p className="main-multi-text-5">레알마드리드</p>
                    </div>
                    <p className="main-multi-text-6">
                        0<span className="main-multi-text-style-2">0</span>
                        <span className="colore9ca4e">0</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
