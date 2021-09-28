import React from "react";
import BetId from "./BetId";
import BetSlipMyBets from "./BetSlipMyBets";

export default function MyBets() {
    return (
        <div
            style={{
                position: "relative",
                width: "360px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
            }}
        >
            <div
                style={{
                    height: "40px",
                    width: "360px",
                    background:
                        "linear-gradient(90deg, #2c2c34 0, #24242a 100%)",
                }}
            >
                <div className="col-18">
                    <div className="bg-43"></div>
                    <div className="row-36">
                        <img
                            className="ico-33"
                            src={require("../imagesHold/ico_6.png").default}
                            alt=""
                            width="24"
                            height="14"
                        />
                        <p className="text-168">나의 베팅내역</p>
                        <div className="wrapper-35">
                            <div className="bg-holder-96">
                                <div className="bg-44"></div>
                            </div>
                            <div className="bg-holder-97">
                                <div className="col-22">
                                    <div className="bg-45"></div>
                                    <div className="row-31">
                                        <p className="text-169">10</p>
                                        <img
                                            className="ico-34"
                                            src={
                                                require("../imagesHold/ico_5.png")
                                                    .default
                                            }
                                            alt=""
                                            width="23"
                                            height="19"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BetId />
            <BetSlipMyBets />
            <div className="group-85">
                <div className="row-25">
                    <p className="text-174">배당률</p>
                    <p className="text-175">6.10</p>
                </div>
            </div>
            <div className="bg-54"></div>
            <div className="group-86">
                <div className="row-24">
                    <p className="text-176">베팅금액</p>
                    <p className="text-177">30,000</p>
                </div>
            </div>
            <div className="bg-54"></div>
            <div className="group-87">
                <div className="row-23">
                    <p className="text-178">적중금액</p>
                    <p className="text-179">베팅대기중</p>
                    <p className="text-180">183,000</p>
                </div>
            </div>
            <div className="bg-54"></div>
            <div className="group-88">
                <div className="bg-holder-100">
                    <div className="bg-57"></div>
                </div>
                <div className="bg-holder-101">
                    <div className="col-11">
                        <img
                            className="bg-58"
                            src={require("../imagesHold/bg_81.png").default}
                            alt=""
                            width="311"
                            height="1"
                        />
                        <div className="group-89">
                            <img
                                className="ico-35"
                                src={require("../imagesHold/ico_4.png").default}
                                alt=""
                                width="15"
                                height="14"
                            />
                            <p className="text-181">전체보기</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
