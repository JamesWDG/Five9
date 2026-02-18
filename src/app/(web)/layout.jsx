import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/app/another-responsive.css";
import "@/app/chatbot.css";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AIChatbot from "@/components/AIChatbot";
import Script from "next/script";   // 👈 IMPORTANT
import "../../../public/dmca-validator.html";

export const metadata = {
  title: "Five 9",
  description: "Five 9 - Landing Page",
  icons: {
    icon: "/images/footer-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9W3BMQ0C6N"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9W3BMQ0C6N');
          `}
        </Script>

        <CustomCursor />
        {children}
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
