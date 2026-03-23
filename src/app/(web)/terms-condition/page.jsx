import { termsConditionSEO } from "@/data/seo";
import TermsConditionClient from "./TermsConditionClient";

export const metadata = termsConditionSEO;

export default function Page() {
  return <TermsConditionClient />;
}
