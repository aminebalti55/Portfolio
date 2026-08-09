import { PortfolioHome } from "@/components/portfolio/PortfolioHome";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <PortfolioHome />
    </>
  );
}
