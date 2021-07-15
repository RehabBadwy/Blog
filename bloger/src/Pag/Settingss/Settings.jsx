import "./Settings.css"
import Sidebar from "../../Component/Sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUp">Update Your Acount</span>
                    <span className="settingDel">Delete Your Acount</span>
                </div>
                <from className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                    <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="" />
                  <label htmlFor="fileInput"><i className="settingsPPIcon far fa-user-circle"></i> </label>
                  <input id="fileInput" type="file" className="settingsPPInput" style={{ display: "none" }} />
                    </div>

                 <label>UserName</label>
                 <input type="text" placeholder="Safak" name="name" />
                 <label>Email</label>
                 <input type="email" placeholder="safak@gmail.com" name="email" />
                 <label>Password</label>
                <input type="password" placeholder="Password" name="password" />

                <button className="settingsSubmit" type="submit" >
                Update
              </button>
                </from>
            </div>
            <Sidebar />
        </div>
    )
}
