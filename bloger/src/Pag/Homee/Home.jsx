
import Sidebar from "../../Component/Sidebar/Sidebar";
import Postss from "../../Component/Postss/Postss";
import "./Home.css";
import Header from "../../Component/Header/Header";

export default function Home() {
    return (
        <>
        <Header  />
        <div class="home">
           <Postss />
            <Sidebar />
        </div>
        </>
    )
}
