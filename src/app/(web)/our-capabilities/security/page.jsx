import { capabilitiesSecuritySEO } from "@/data/seo";
import CapSecurity from "./CapSecurity";

export const metadata = capabilitiesSecuritySEO;

export default function Page() {
  return <CapSecurity />;
}
