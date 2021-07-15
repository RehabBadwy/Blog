import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sideItem">
                <span className="sideTitle">ABOUT ME</span>
                <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.</p>
            </div>

            <div className="sideItem">
                <span className="sideTitle">CATEGORIES</span>
                <ul className="sideList">
                    <li className="sideli">Life</li>
                    <li className="sideli">Music</li>
                    <li className="sideli">Style</li>
                    <li className="sideli">Sport</li>
                    <li className="sideli">Teach</li>
                    <li className="sideli">Cinema</li>
                </ul>
            </div>

            <div className="sideItem">
            <span className="sideTitle">FOLLOW US</span>
            <div className="sideSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
            </div>
            </div>
        </div>
    )
}
