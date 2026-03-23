import { contactSEO } from "@/data/seo";
import ContactClient from "./ContactClient";

export const metadata = contactSEO;

export default function Page() {
  return <ContactClient />;
}