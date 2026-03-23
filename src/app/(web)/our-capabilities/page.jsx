import { capabilitiesSEO } from "@/data/seo";
import CapabilitiesClient from "./CapabilitiesClient";

export const metadata = capabilitiesSEO;

export default function Page() {
    return <CapabilitiesClient />;
}