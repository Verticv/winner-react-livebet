import { singleOrMultiOptions } from 'helpers/constants';
import React from 'react'
import useStore from 'store/useStore';

export default function BetSlipLayout() {
    const singleOrMulti = useStore((state) => state.singleOrMulti);
    const changeSingleOrMulti = useStore((state) => state.changeSingleOrMulti);
    return (
        <div
            style={{
                height: "40px",
                width: "360px",
            }}
        >
            <button
                onClick={() => changeSingleOrMulti(singleOrMultiOptions.single)}
                style={{
                    height: "40px",
                    position: "absolute",
                    width: "179px",
                    background: "#1d1e22",
                }}
            >
                {singleOrMulti === singleOrMultiOptions.single && (
                    <div
                        style={{
                            height: "40px",
                            left: "0",
                            position: "absolute",
                            top: "0",
                            width: "179px",
                            background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0, rgba(255, 255, 255, 0.1) 100%), #303035",
                            borderBottom: "1px solid #FCE7AA",
                        }}
                    >
                        <div className="col-10"></div>
                    </div>
                )}
                <p
                    style={{
                        left: "76px",
                        position: "absolute",
                        top: "12px",
                        color:
                            singleOrMulti === singleOrMultiOptions.single
                                ? "#e5b877"
                                : "#909090",
                        textAlign: "center",
                        textTransform: "uppercase",
                        opacity:
                            singleOrMulti === singleOrMultiOptions.single
                                ? 1
                                : 0.3,
                    }}
                >
                    싱글
                </p>
            </button>
            <button
                onClick={() => changeSingleOrMulti(singleOrMultiOptions.multi)}
                style={{
                    height: "40px",
                    left: "180px",
                    position: "absolute",
                    width: "180px",
                    background: "#1d1e22",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {singleOrMulti === singleOrMultiOptions.multi && (
                    <div
                        style={{
                            height: "40px",
                            width: "179px",
                            background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0, rgba(255, 255, 255, 0.1) 100%), #303035",
                            borderBottom: "1px solid #FCE7AA",
                        }}
                    >
                        <div className="col-10"></div>
                    </div>
                )}
                <p
                    style={{
                        opacity:
                            singleOrMulti === singleOrMultiOptions.multi
                                ? "1"
                                : "0.3",
                        color:
                            singleOrMulti === singleOrMultiOptions.multi
                                ? "#e5b877"
                                : "#909090",
                        textAlign: "center",
                        textTransform: "uppercase",
                        fontFamily: "'NotoSansCJKkr-Regular'",
                        fontSize: "14px",
                        position: 'absolute',
                        zIndex: "1"
                    }}
                >
                    멀티
                </p>
            </button>
        </div>
    );
}
