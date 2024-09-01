import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function BackgroundPage({ children }) {
    return (
        <div css={s.mainLayout}>
            <div css={s.box}>
                {children}
            </div>
        </div>
    );
}

export default BackgroundPage;