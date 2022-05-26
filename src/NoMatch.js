import { useLocation } from "react-router-dom";

function NoMatch() {
    const location = useLocation();

    return (
        <h2>There is no match for <code>{location.pathname}</code></h2>
    )
}

export default NoMatch;