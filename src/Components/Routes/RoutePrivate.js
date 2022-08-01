import React from "react";
import { Navigate } from "react-router-dom";
import useUser from "../Hooks/useUser";

function RoutePrivate(children) {

    const { user } = useUser();
    if (!user)
        return <Navigate to="/login" replace="true" />

    return <>
        {children}
    </>
}
export default RoutePrivate;