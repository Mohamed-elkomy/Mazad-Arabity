import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../components/ui/Loader/Loader";

export default function RouteLoader({ children }) {
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(false);

    const showTimeout = useRef(null);
    const hideTimeout = useRef(null);

    useEffect(() => {
        clearTimeout(showTimeout.current);
        clearTimeout(hideTimeout.current);

        showTimeout.current = setTimeout(() => {
            setLoading(true);
        }, 120);

        hideTimeout.current = setTimeout(() => {
            setLoading(false);
        }, 400);

        return () => {
            clearTimeout(showTimeout.current);
            clearTimeout(hideTimeout.current);
        };
    }, [pathname]);

    return (
        <>
            {loading && <Loader />}
            {children}
        </>
    );
}
