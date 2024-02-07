import { AiFillHome } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import "./index.css"

const Header =()=>(
    <div className="Header-page">
        <h1 className="header-heading">
            Create Exam
        </h1>
        <div className="navigation-box">
            <AiFillHome size={25} className="nav-icon" />
            <IoMenu size={30} className="nav-icon"/>
            <button type="button" className="log-out-button">Log Out</button>
        </div>
    </div>
)

export default Header
