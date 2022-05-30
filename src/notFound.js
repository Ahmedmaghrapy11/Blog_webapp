import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry!</h2>
            <p>This page could not be found.</p>
            <Link to="/">Back To Home</Link>
        </div>
    );
}

export default NotFound;