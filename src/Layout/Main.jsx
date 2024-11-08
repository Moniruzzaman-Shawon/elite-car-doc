import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default main;