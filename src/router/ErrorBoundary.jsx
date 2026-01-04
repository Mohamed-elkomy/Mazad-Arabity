import { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { withTranslation } from "react-i18next";

import buttons from "../assets/styles/buttons.module.css";

export default function ErrorBoundaryWrapper({ children }) {
  const location = useLocation();
  return <ErrorBoundaryWithI18n location={location}>{children}</ErrorBoundaryWithI18n>;
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Route error boundary caught:", error, info);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ hasError: false });
    }
  }

  render() {
    const { t } = this.props;

    if (this.state.hasError) {
      return (
        <section className="container text-center py-5">
          <h1 className="fw-bold mb-3">
            {t("error.title")}
          </h1>

          <p className="text-muted mb-4">
            {t("error.description")}
          </p>

          <Link to="/" className={buttons.primaryBtn}>
            {t("error.backHome")}
          </Link>
        </section>
      );
    }

    return this.props.children;
  }
}

const ErrorBoundaryWithI18n = withTranslation("common")(ErrorBoundary);
