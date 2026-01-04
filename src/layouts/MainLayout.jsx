import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer/Footer";
import Navbar from "../components/layout/Navbar/Navbar";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <main id="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

