import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../components/ui/Loader/Loader";

export default function RouteLoader({ children }) {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const showTimeout = useRef(null);
    const hideTimeout = useRef(null);

    useEffect(() => {
        // نظف أي تايمرز قديمة
        clearTimeout(showTimeout.current);
        clearTimeout(hideTimeout.current);

        // استنى شوية قبل ما تظهر اللودر (عشان نمنع flicker)
        showTimeout.current = setTimeout(() => {
            setLoading(true);
        }, 120);

        // أخفي اللودر بعد مدة ثابتة
        hideTimeout.current = setTimeout(() => {
            setLoading(false);
        }, 400);

        return () => {
            clearTimeout(showTimeout.current);
            clearTimeout(hideTimeout.current);
        };
    }, [location.key]);

    return (
        <>
            {loading && <Loader />}
            {children}
        </>
    );
}
