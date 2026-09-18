import { edition1 } from "@/data/edition-1";
import { CantoneseReader } from "@/components/reader/cantonese-reader";

export default function Home() {
  return <CantoneseReader edition={edition1} />;
}
