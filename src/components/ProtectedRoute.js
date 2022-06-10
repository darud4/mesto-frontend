import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ loggedIn, component: Component, ...props }) {
    return (<Route>
        {() => loggedIn ? <Component {...props} /> : <Redirect to="/signin" />}
    </Route>)
}

export default ProtectedRoute;