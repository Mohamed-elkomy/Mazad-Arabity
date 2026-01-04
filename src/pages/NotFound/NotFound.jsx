import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import buttons from "../../assets/styles/buttons.module.css";

export default function NotFoundPage() {
    const { t } = useTranslation("common");

    return (
        <section
            className="container d-flex align-items-center justify-content-center text-center"
            style={{ minHeight: "70vh" }}
        >
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9 col-12">
                    <h1 className="display-3 fw-bold mb-3">404</h1>

                    <h2 className="h4 fw-bold mb-3">
                        {t("notFound.title")}
                    </h2>

                    <p className="text-muted mb-4">
                        {t("notFound.description")}
                    </p>

                    <Link to="/" className={`btn px-4 ${buttons.primaryBtn}`}>
                        {t("notFound.backHome")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
