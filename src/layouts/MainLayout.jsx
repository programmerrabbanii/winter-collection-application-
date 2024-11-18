import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bannar from "../components/Bannar";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;