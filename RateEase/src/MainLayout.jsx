import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#D7D1C5]">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;