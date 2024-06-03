import { useRef } from "react";
import Nav from "../components/Nav";
import SectionHeader from "../components/SectionHeader";
import SectionFeature from "../components/SectionFeature";
import SectionPricing from "../components/SectionPricing";
import SectionAbout from "../components/SectionAbout";
import SectionContact from "../components/SectionContact";

const LandingPage = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const featureRef = useRef(null);
  const contactRef = useRef(null);
  const pricingRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Nav
        scrollToSection={scrollToSection}
        headerRef={headerRef}
        featureRef={featureRef}
        pricingRef={pricingRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <SectionHeader refe={headerRef} />
      <main>
        <SectionFeature refe={featureRef} />
        <SectionPricing refe={pricingRef} />
        <SectionAbout refe={aboutRef} />
        <SectionContact refe={contactRef} />
      </main>
    </div>
  );
};

export default LandingPage;
