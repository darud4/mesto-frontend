import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function Logout({ onLogout }) {
    useEffect(() => {
        onLogout();
    }, [onLogout]);
    return (<Redirect to='/signin' />)
}

export default Logout;