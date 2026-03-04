import { capabilitiesApplicationSEO } from "@/data/seo";
import CapApplication from "./CapApplication";

export const metadata = capabilitiesApplicationSEO;

export default function Page() {
    return <CapApplication />;
}
