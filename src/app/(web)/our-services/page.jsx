import { serviceSEO } from "@/data/seo";
import ServicesClient from "./ServicesClient";

export const metadata = serviceSEO;

export default function Page() {
  return <ServicesClient />;
}