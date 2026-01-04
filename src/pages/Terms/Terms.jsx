import { Link } from "react-router-dom";
import PolicyCard from "../../components/sections/Policy/PolicyCard";
import styles from "../../assets/styles/PolicyPages.module.css";

const WHATSAPP_LINK = (msg) =>
    `https://wa.me/201000000000?text=${encodeURIComponent(msg)}`;

export default function TermsPage() {
    return (
        <section className={styles.policyContainer}>
            <h1
                className={`${styles.pageTitle} animate__animated animate__fadeInDown`}
            >
                الشروط والأحكام
            </h1>

            <PolicyCard title="مقدمة">
                <p>
                    توضح هذه الشروط والأحكام إطار استخدام منصة{" "}
                    <strong>مزاد عربيتى</strong> والخدمات المقدمة من خلالها. باستخدامك
                    للمنصة أو الموقع، فإنك توافق على الالتزام بجميع البنود الواردة في
                    هذه الصفحة.
                </p>
            </PolicyCard>

            <PolicyCard title="1. استخدام المنصة">
                <p>
                    يلتزم المستخدم باستخدام منصة مزاد عربيتى بشكل قانوني، وعدم إساءة
                    الاستخدام أو محاولة التلاعب بالمزايدات أو الوصول غير المصرح به إلى
                    أي جزء من أنظمة المنصة.
                </p>
            </PolicyCard>

            <PolicyCard title="2. حساب المستخدم">
                <p>
                    يجب على المستخدم إدخال بيانات صحيحة عند إنشاء الحساب، ويُحظر مشاركة
                    بيانات الدخول مع أي طرف آخر. يحق لإدارة{" "}
                    <strong>مزاد عربيتى</strong> تعليق أو إيقاف الحساب في حال وجود نشاط
                    مخالف للشروط أو محاولة التلاعب بالمزايدات.
                </p>
            </PolicyCard>

            <PolicyCard title="3. المزايدات والسيارات">
                <p>
                    تتيح منصة مزاد عربيتى عرض السيارات والمشاركة في مزايدات مباشرة
                    للوصول إلى أفضل سعر. جميع المعلومات المعروضة تخص البائع، وتخضع
                    المزايدات لقواعد وضوابط محددة داخل المنصة.
                </p>
            </PolicyCard>

            <PolicyCard title="4. المسؤولية">
                <p>
                    تبذل إدارة مزاد عربيتى أقصى جهدها لتوفير معلومات دقيقة حول السيارات
                    المعروضة، إلا أن المستخدم يتحمل مسؤولية التحقق من حالة السيارة
                    ومواصفاتها قبل إتمام المزايدة أو الشراء.
                </p>
            </PolicyCard>

            <PolicyCard title="5. الإلغاء والاسترداد">
                <p>
                    تخضع عمليات الإلغاء أو الاعتراض على المزايدات لشروط{" "}
                    <Link to="/returns">سياسة الاسترجاع والاسترداد</Link> المعتمدة داخل
                    المنصة.
                </p>
            </PolicyCard>

            <PolicyCard title="6. الملكية الفكرية">
                <p>
                    جميع محتويات المنصة، بما في ذلك النصوص، الصور، الشعارات، التصاميم
                    والبرمجيات، مملوكة لـ <strong>مزاد عربيتى</strong>، ولا يجوز نسخها أو
                    إعادة استخدامها دون إذن كتابي مسبق.
                </p>
            </PolicyCard>

            <PolicyCard title="7. تعديل الشروط">
                <p>
                    تحتفظ إدارة مزاد عربيتى بحق تعديل هذه الشروط والأحكام في أي وقت،
                    وتصبح التعديلات سارية فور نشرها على الموقع أو داخل التطبيق.
                </p>
            </PolicyCard>

            <PolicyCard title="8. التواصل معنا">
                <p>
                    لأي استفسار بخصوص الشروط والأحكام، يمكنك التواصل معنا عبر{" "}
                    <a
                        href={WHATSAPP_LINK(
                            "استفسار بخصوص الشروط والأحكام في منصة مزاد عربيتى"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: 600 }}
                    >
                        التواصل معنا
                    </a>
                    .
                </p>
            </PolicyCard>
        </section>
    );
}
