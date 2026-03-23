import { homeSEO } from "@/data/seo";
import HomeClient from "./HomeClient";

export const metadata = homeSEO;

export default function Page() {
  return <HomeClient />;
}