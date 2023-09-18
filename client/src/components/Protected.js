import { Navigate } from "react-router-dom";

const Protected = ({children}) => {
    const username = localStorage.getItem("username");
    return username ? children : <Navigate to="/" />
}

export default Protected;