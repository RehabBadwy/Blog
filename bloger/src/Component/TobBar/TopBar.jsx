import "./TopBar.css"
import { Link } from "react-router-dom"
export default function TobBar() {
    const user = false
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topItem">
                        <Link className="link" to="/" >Home</Link>
                    </li>
                    <li className="topItem">
                    <Link className="link" to="/" >ABOUT</Link>
                    </li>
                    <li className="topItem">
                    <Link className="link" to="/" >CONTACT</Link>
                    </li>
                    <li className="topItem">
                    <Link className="link" to="/Write" >WRITE</Link>
                    </li>
                    
                    <li className="topItem">
                    {user && "LOGOUT"}
                    </li>
                </ul>
            </div>


            <div className="topRight">
            {
                user ? (
                    <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""/>
                ) : (
                 <ul className="topList">
                <li className="topItem">
                    
                    <Link className="link" to="/Login" >LOGIN</Link>
                </li>

                <li className="topItem">
                    <Link className="link" to="/Register" >REGISTER</Link>
                    </li>
                </ul>
                )
            }
            <i className="topSearch fas fa-search"></i>
            </div>
            
        </div>
    )
}
