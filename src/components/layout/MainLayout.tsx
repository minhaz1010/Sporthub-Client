import Navbar from "../ui/Navbar.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../ui/Footer.tsx";
import LazyComponent from "../../utils/LazyComponent.tsx";

const LazyNavbar = LazyComponent(Navbar);
const LazyFooter = LazyComponent(Footer);

const MainLayout = () => {
    return (
        <div>
            <LazyNavbar />
            <Outlet />
            <LazyFooter />
        </div>
    );
};

export default MainLayout;