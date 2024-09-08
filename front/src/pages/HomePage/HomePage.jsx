import React from 'react';
/** @jsxImportSource @emotion/react */
import { IoMdSearch, IoIosAddCircleOutline, IoIosContact, IoIosCog } from "react-icons/io";
import * as s from './style';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

function HomePage(props) {
    return (
        <>
            <div css={s.layout}>
                <div css={s.container}>
                    <div css={s.header}>
                        <div>
                            <div>
                                <h3><span>LOGO</span></h3>
                            </div>

                            <div>
                                <ul>
                                    <li><IoIosContact /></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div css={s.body}>
                        <div css={s.moveViewContainer}>
                            <div css={s.viewText}>
                                <span>
                                    <Link to={'/memo/start'} >Start</Link>
                                </span>
                            </div>
                            <div css={s.viewText}>
                                <span>
                                    <Link to={'/memo/add'}>Add</Link>
                                </span>
                            </div>
                            <div css={s.viewText}>
                                <span>
                                    <Link to={'/memo/search'}>Search</Link>
                                </span>
                            </div>
                        </div>

                        <div css={s.countViewContainer}>
                            <div css={s.countBox}>
                                <CountUp start={0} end={1820398} duration={5} separator="," />
                                <span>Total Views</span>
                            </div>
                            <div css={s.countBox}>
                                <CountUp start={0} end={2024} duration={5} separator="," />
                                <span>Question</span>
                            </div>
                            <div css={s.countBox}>
                                <CountUp start={0} end={32} duration={5} separator="," />
                                <span>Views</span>
                            </div>
                        </div>
                    </div>
                    <div css={s.footer}>
                        <ul>
                            <li>공간</li>
                            <li>공간</li>
                            <li>공간</li>
                            <li>공간</li>
                        </ul>
                        <div>footer</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;