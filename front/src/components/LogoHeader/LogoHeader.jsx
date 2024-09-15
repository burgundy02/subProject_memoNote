import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosContact } from "react-icons/io";

function LogoHeader(props) {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div css={s.layout}>
            <div css={s.header}>
                <div>
                    <div css={s.logo}>
                        <h3><span onClick={() => navigate("/")}>LOGO</span></h3>
                    </div>
                    {
                        location.pathname === '/auth/sign'
                            ?
                            <></>
                            :
                            <>
                                {
                                    1 + 1 == 1
                                        ?
                                        <>
                                            <div css={s.logoItems}>
                                                <span>guest님 환영합니다</span>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div css={s.logoItems}>
                                                <button onClick={() => navigate("/auth/sign")}>LOGIN</button>
                                            </div>
                                            {/* <div>
                                                <button onClick={() => navigate("/auth/join")}>회원가입</button>
                                            </div>
                                            <ul>
                                                <li><IoIosContact /></li>
                                            </ul> */}
                                        </>
                                }
                            </>
                    }
                </div>
            </div>
        </div >
    );
}

export default LogoHeader;