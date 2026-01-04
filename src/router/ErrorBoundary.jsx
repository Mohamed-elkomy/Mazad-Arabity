import { Component } from "react";
import { Link, useLocation } from "react-router-dom";

import buttons from "../assets/styles/buttons.module.css";

export default function ErrorBoundaryWrapper({ children }) {
  const location = useLocation();
  return <ErrorBoundary location={location}>{children}</ErrorBoundary>;
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
    if (this.state.hasError) {
      return (
        <section className="container text-center py-5" dir="rtl">
          <h1 className="fw-bold mb-3">
            حصلت مشكلة غير متوقعة
          </h1>

          <p className="text-muted mb-4">
            متقلقش، تقدر ترجع للصفحة الرئيسية وتكمّل تصفحك عادي.
          </p>

          <Link to="/" className={buttons.primaryBtn}>
            الرجوع للرئيسية
          </Link>
        </section>
      );
    }

    return this.props.children;
  }
}
