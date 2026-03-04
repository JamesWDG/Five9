import { serviceConsultingSEO } from "@/data/seo";
import ServiceConsulting from "./ServiceConsulting";

export const metadata = serviceConsultingSEO;

export default function Page() {
  return <ServiceConsulting />;
}
