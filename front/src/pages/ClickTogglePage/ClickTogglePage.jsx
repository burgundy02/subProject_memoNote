import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ClickToggle from '../../components/ClickToggle/ClickToggle';

function ClickTogglePage(props) {
    return (
        <div css={s.box}> 
            <ClickToggle />
        </div>
    );
}

export default ClickTogglePage;