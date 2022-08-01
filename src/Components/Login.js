import React from "react";
import useUser from "./Hooks/useUser";

function Login() {
    const { onLogin } = useUser();

    return (
        <>
            Formulario Autentificacion - Usuario
            <button onClick={() => onLogin({ user: "foo", password: "bar" })}>
                Login
            </button>
        </>
    );
}
export default Login;