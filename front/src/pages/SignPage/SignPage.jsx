import React, { useState } from 'react';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function SignPage(props) {
    const [mode, setMode] = useState(false);
    const [userInput, setUserInput] = useState({
        username: "",
        password: "",
        checkPassword: "",
        email: "",
    });
    const handleInputOnChange = (e) => {
        setUserInput(inputs => ({
            ...inputs,
            [e.target.name]: e.target.value
        }
        ))
    }
    return (
        <div css={s.layout}>
            <LogoHeader />
            <div css={s.signLayout}>
                <div css={s.loginContainer}>
                    {
                        !mode &&
                        <>
                            <div css={s.boxContainer}>
                                <div css={s.loginBox}>
                                    <h2 onClick={() => setMode(false)}>LOGIN</h2>
                                    <h2 onClick={() => setMode(true)}>REGISTER</h2>
                                </div>
                                <div css={s.inputBox}>
                                    <div css={s.inputSection}>
                                        <span>ID</span>
                                        <input type="text" autoFocus />
                                    </div>
                                    <div css={s.inputSection}>
                                        <span>Password</span>
                                        <input type="password" />
                                    </div>
                                    <button>LOGIN</button>
                                </div>
                            </div>
                        </>
                    }
                    {
                        mode &&
                        <div css={s.boxContainer}>
                            <div css={s.signupBox}>
                                <h2 onClick={() => setMode(false)}>LOGIN</h2>
                                <h2 onClick={() => setMode(true)}>REGISTER</h2>
                            </div>
                            <div css={s.inputBox}>
                                <div css={s.inputSection}>
                                    <span>ID</span>
                                    <input type="text" name='username' value={userInput.username} onChange={handleInputOnChange} />
                                </div>
                                <div css={s.inputSection}>
                                    <span>Password</span>
                                    <input type="password" name='password' value={userInput.password} onChange={handleInputOnChange} />
                                </div>
                                <div css={s.inputSection}>
                                    <span>checkPassowrd</span>
                                    <input type="password" name='checkPassword' value={userInput.checkPassword} onChange={handleInputOnChange} />
                                </div>
                                <div css={s.inputSection}>
                                    <span>EMAIL</span>
                                    <input type="text" name='email' value={userInput.email} onChange={handleInputOnChange} />
                                </div>
                                <button>JOIN</button>

                            </div>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
}

export default SignPage;