import "./Login.css"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="Login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginput" placeholder="Enter Your Email..." />

                <label>Password</label>
                <input type="Password" className="loginput" placeholder="Enter Your Password..." />

                <button className="loginButon">Login</button>
            </form>
            <button className="loginRegisterButon">
                <Link className="link" to="/Register">Register</Link>
            </button>
        </div>
    )
}
