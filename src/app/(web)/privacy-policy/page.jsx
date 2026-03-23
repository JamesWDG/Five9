import { privacyPolicySEO } from "@/data/seo";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata = privacyPolicySEO;

export default function Page() {
  return <PrivacyPolicyClient />;
}