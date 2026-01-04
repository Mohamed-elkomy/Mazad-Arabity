import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Footer from "../components/layout/Footer/Footer";
import Navbar from "../components/layout/Navbar/Navbar";

export default function MainLayout() {
    const { i18n } = useTranslation();
    const isAr = i18n.language === "ar";

    return (
        <div
            dir={isAr ? "rtl" : "ltr"}
            lang={isAr ? "ar" : "en"}
            style={{ overflowX: "hidden" }}
        >
            <Navbar />

            <main id="main-content">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
