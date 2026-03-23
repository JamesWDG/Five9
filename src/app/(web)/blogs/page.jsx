import {BlogSEO } from "@/data/seo";
import BlogClient from "./BlogClient";

export const metadata = BlogSEO;

export default function Page() {
  return <BlogClient />;
}
