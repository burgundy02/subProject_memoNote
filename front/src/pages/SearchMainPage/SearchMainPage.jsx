/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';
import * as s from './style';

function SearchMainPage(props) {
    const navigate = useNavigate();

    const handleButtonOnClick = () => {
        navigate("/");
    }
    return (
        <div css={s.layout}>
            <div css={s.buttonBox}>
                <button onClick={handleButtonOnClick}>취소</button>
            </div>
            <Search>

            </Search>
        </div>
    );
}

export default SearchMainPage;