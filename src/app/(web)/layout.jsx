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
// import "../../../public/dmca-validator.html";

export const metadata = {
  title: "Five 9",
  description: "Five 9 - Landing Page",
  icons: {
    icon: "/images/footer-logo.png",
  },
  verification: {
    google: "qi-YYpeUo7yZFyFYidtfhWcufy_gRrbWjJik-d1d8h4",
  },
  other: {
    "dmca-site-verification": "bW9wb1VkVXRqWVNyeDdNR2RLbmxUUT090",
  },
};

// export const metadata = {
//   title: "Five 9",
//   description: "Five 9 - Landing Page",
//   icons: {
//     icon: "/images/footer-logo.png",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5K2QQ2Z6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VT6PTHXSTV"
          strategy="afterInteractive"
        />

        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VT6PTHXSTV');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5K2QQ2Z6');
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
