import { serviceAdvisorySEO } from "@/data/seo";
import ServiceAdvisory from "./ServiceAdvisory";

export const metadata = serviceAdvisorySEO;

export default function Page() {
  return <ServiceAdvisory />;
}