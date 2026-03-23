import { capabilitiesTransformationSEO } from "@/data/seo";
import CapTransformation from "./CapTransformation";

export const metadata = capabilitiesTransformationSEO;

export default function Page() {
  return <CapTransformation />;
}
