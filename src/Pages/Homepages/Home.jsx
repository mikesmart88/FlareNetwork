import { useState } from "react";
import MetaHead from "../../Components/heads/MetaHeads";
import useMeta from "../../hooks/UseMetaTags";
import NavBar from "../../Components/Navbars/NavBar";
import HeroSection from "../../Components/sections/HomePageSections/HeroSection";
import GetStartedSection from "../../Components/sections/HomePageSections/GetStartedSection";
import EvmSection from "../../Components/sections/HomePageSections/EvmSection";
import BlockchainSection from "../../Components/sections/HomePageSections/BlockchainSection";
import ProductSection from "../../Components/sections/HomePageSections/ProductsSection";
import FlareUseSection from "../../Components/sections/HomePageSections/FlareUseSection";
import ImageTextSection from "../../Components/sections/HomePageSections/ImageTextSection";
import Footer from "../../Components/Footers/Footer";

export default function HomePage() {
  const [pageurl, setPageurl] = useState(window.location.href);
  const Metadata = useMeta(
    "Flare is the blockchain for data",
    "Flare is the blockchain for data, enabling developers to build powerful applications that can access and utilize data from any source.",
    pageurl,
    "Flare Network",
  );
  return (
    <>
    <MetaHead metadata={Metadata} />
    <NavBar className="navbar" />
      <main style={{paddingTop: "70px"}}> 
        <HeroSection className="hero-section" />
        <GetStartedSection className="get-started-section" />
        <EvmSection className="evm-section" />
        <BlockchainSection className="blockchain-section" />
        <ProductSection className="products-section" />
        <FlareUseSection className="flare-use-section" />
        <ImageTextSection className="image-text-section" />
        <Footer />
      </main>
    </>
  );
}
