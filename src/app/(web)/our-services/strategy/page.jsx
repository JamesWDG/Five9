import { serviceStrategySEO } from "@/data/seo";
import ServiceStrategy from "./ServiceStrategy";

export const metadata = serviceStrategySEO;

export default function Page() {
  return <ServiceStrategy />;
}