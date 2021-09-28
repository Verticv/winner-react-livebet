import React from "react";

export default function BetAmountInput() {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "35px",
                    width: "360px",
                    background:
                        "linear-gradient(90deg, #2a2a34 0, #1a1a20 100%)",
                    padding: "0 8px",
                }}
            >
                <p className="text-158">베팅금액</p>
                <div
                    className="row-26"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingRight: "10px",
                    }}
                >
                    <button
                        onClick={() => console.log("Refresh")}
                        className="wrapper-9"
                    >
                        <div
                            className="bg-holder-85"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div
                                className="bg-24"
                                style={{ position: "absolute" }}
                            ></div>
                            <div
                                className="col-9"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow:
                                        "-3px -3px 3px 0px rgba(255,216,125,0.75) inset",
                                }}
                            >
                                <img
                                    src={
                                        require("../imagesHold/icon.png")
                                            .default
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                    </button>
                    <p className="text-159">0</p>
                </div>
            </div>
            {/* 
                BET AMOUNT BUTTONS
            */}
            <div className="group-75">
                <div
                    style={{
                        height: "69px",
                        position: "absolute",
                        width: "340px",
                        left: "10px",
                        marginTop: "12px",
                    }}
                >
                    <div className="row-33">
                        <button
                            onClick={() => console.log("5,000")}
                            className="wrapper-29"
                        >
                            <div className="bg-holder-86"></div>
                            <div className="col-3">
                                <img
                                    className="bg-27"
                                    src={
                                        require("../imagesHold/bg_17.png")
                                            .default
                                    }
                                    alt=""
                                    width="95"
                                    height="1"
                                />
                                <p className="text-160">5,000</p>
                            </div>
                        </button>
                        <button
                            onClick={() => console.log("10,000")}
                            className="wrapper-30"
                        >
                            <div className="bg-holder-87"></div>
                            <div className="col-4">
                                <img
                                    className="bg-29"
                                    src={
                                        require("../imagesHold/bg_17.png")
                                            .default
                                    }
                                    alt=""
                                    width="109"
                                    height="1"
                                />
                                <p className="text-161">10,000</p>
                            </div>
                        </button>
                        <button
                            onClick={() => console.log("50,000")}
                            className="wrapper-31"
                        >
                            <div className="bg-holder-88"></div>
                            <div className="col-5">
                                <img
                                    className="bg-31"
                                    src={
                                        require("../imagesHold/bg_17.png")
                                            .default
                                    }
                                    alt=""
                                    width="109"
                                    height="1"
                                />
                                <p className="text-162">50,000</p>
                            </div>
                        </button>
                    </div>
                    <div className="row-34">
                        <button
                            onClick={() => console.log("100,000")}
                            className="wrapper-32"
                        >
                            <div className="bg-holder-89"></div>
                            <div className="col-6">
                                <img
                                    className="bg-33"
                                    src={
                                        require("../imagesHold/bg_17.png")
                                            .default
                                    }
                                    alt=""
                                    width="109"
                                    height="1"
                                />
                                <p className="text-163">100,000</p>
                            </div>
                        </button>
                        <button
                            onClick={() => console.log("1,000,000")}
                            className="wrapper-33"
                        >
                            <div className="bg-holder-90"></div>
                            <div className="col-7">
                                <img
                                    className="bg-35"
                                    src={
                                        require("../imagesHold/bg_17.png")
                                            .default
                                    }
                                    alt=""
                                    width="109"
                                    height="1"
                                />
                                <p className="text-164">1,000,000</p>
                            </div>
                        </button>
                        <button
                            onClick={() => console.log("maximum")}
                            className="wrapper-34"
                        >
                            <div className="bg-holder-91"></div>
                            <div className="bg-holder-92">
                                <div
                                    className="col-8"
                                    style={{
                                        boxShadow:
                                            "rgb(255 244 162) -2px -9px 18px 0px inset",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <img
                                        className="bg-37"
                                        src={
                                            require("../imagesHold/bg_38.png")
                                                .default
                                        }
                                        alt=""
                                        width="101"
                                        height="1"
                                    />
                                    <p className="text-165">최대</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/* Place a bet and cancel bet */}
            <div
                style={{
                    height: "60px",
                    position: "absolute",
                    width: "360px",
                    background:
                        "linear-gradient(90deg, #1a1a20 0, #161616 100%)",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "2px",
                }}
            >
                <button
                    onClick={() => console.log("Cancel All")}
                    className="wrapper-2"
                >
                    <div className="bg-holder-93">
                        <div className="bg-38"></div>
                    </div>
                    <div className="col">
                        <img
                            className="bg-39"
                            src={require("../imagesHold/bg_6.png").default}
                            alt=""
                            width="144"
                            height="1"
                        />
                        <div className="group-78">
                            <img
                                className="ico-31"
                                src={require("../imagesHold/ico.png").default}
                                alt=""
                                width="14"
                                height="14"
                            />
                            <p className="text-166">전체취소</p>
                        </div>
                    </div>
                </button>
                <button
                    onClick={() => console.log("Place a bet")}
                    className="wrapper-3"
                >
                    <div className="bg-holder-94">
                        <div className="bg-40"></div>
                    </div>
                    <div className="bg-holder-95">
                        <div className="bg-41"></div>
                    </div>
                    <div className="col-2">
                        <img
                            className="bg-42"
                            src={require("../imagesHold/bg_12.png").default}
                            alt=""
                            width="150"
                            height="1"
                        />
                        <div className="group-79">
                            <img
                                className="ico-32"
                                src={require("../imagesHold/ico_2.png").default}
                                alt=""
                                width="16"
                                height="16"
                            />
                            <p className="text-167">베팅하기</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}
