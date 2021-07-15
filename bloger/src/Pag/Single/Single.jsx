import "./Single.css"
import Sidebar from "../../Component/Sidebar/Sidebar"
import SinglePost from "../../Component/SinglePost/SinglePost"

export default function Single() {
    return (
        <div className="single">
            <SinglePost /> 
            <Sidebar />
        </div>
    )
}
