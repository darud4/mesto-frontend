import { Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function Menu({ email }) {

    const [isMenu, setMenu] = useState(false);

    function handleClick() {
        setMenu(!isMenu);
    }

    return (
        <Switch>
            <Route path='/signin'>
                <Link to='/signup' className='header__action'>Регистрация</Link>
            </Route>
            <Route path='/signup'>
                <Link to='/signin' className='header__action'>Войти</Link>
            </Route>
            <Route path='/'>
                <button className={`header__menu-btn ${isMenu ? 'header__menu-btn_close' : ''}`} type="button" onClick={handleClick}></button>
                <div className={`header__menu ${isMenu ? 'header__menu_active' : ""}`}>                <span className='header__menu-text'>{email}</span>
                    <Link to='/logout' className='header__menu-link'>Выйти</Link>
                </div>
            </Route>
        </Switch>
    )
}

export default Menu;