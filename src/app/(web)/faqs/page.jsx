import { FAQsSEO } from "@/data/seo";
import FAQClient from "./FAQClient";

export const metadata = FAQsSEO;

export default function Page() {
    return <FAQClient />;
}
