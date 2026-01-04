import { Link } from "react-router-dom";
import buttons from "../../assets/styles/buttons.module.css";

export default function NotFoundPage() {
    return (
        <section
            className="container d-flex align-items-center justify-content-center text-center"
            style={{ minHeight: "70vh" }}
            dir="rtl"
        >
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9 col-12">
                    <h1 className="display-3 fw-bold mb-3">404</h1>

                    <h2 className="h4 fw-bold mb-3">
                        الطريق ده مش رايح على مزاد
                    </h2>

                    <p className="text-muted mb-4">
                        الصفحة اللي بتحاول توصلها مش موجودة أو اتنقلت.
                        خلّيك معانا وارجع للصفحة الرئيسية وشوف أحدث المزايدات 🚗
                    </p>

                    <Link to="/" className={`btn px-4 ${buttons.primaryBtn}`}>
                        الرجوع للرئيسية
                    </Link>
                </div>
            </div>
        </section>
    );
}
