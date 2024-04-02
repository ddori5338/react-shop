import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Navbar = () => {
    const dispatch = useDispatch();
    let authenticate = useSelector(state => state.auth.authenticate);
    
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

    let [width, setWidth] = useState(0);

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }

    const goToHome = () => {
        navigate("/");
    }

    const logout = () => {
        // setAuthenticate(false);
        dispatch(authenticateAction.logout());
        navigate("/");
    }

    const search = (event) => {
        if (event.key === "Enter") {
            // 입력한 검색어를 읽어와서 url을 바꿔준다.
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    }

    return (
        <div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                {menuList.map((menu, index) => (
                    <button key={index}>{menu}</button>
                ))}
                </div>
                <div className="search-box-side">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="제품 검색" onKeyPress={(event) => search(event)}/>
                </div>
            </div>
            <div className="nav-header">
                <div className="burger-menu hide">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                </div>
                <div>
                    {authenticate === false ?
                    <div className="login-button" onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>
                    : <div className="login-button" onClick={logout}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그아웃</div>
                    </div>
                    }
                </div>
            </div>
            <div className="nav-section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="" onClick={goToHome}/>
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu) => <li>{menu}</li>)}
                </ul>
                <div className="search-box show">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="제품 검색" onKeyPress={(event) => search(event)}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
