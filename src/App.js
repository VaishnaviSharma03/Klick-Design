import { Header } from "./components/Header";
import { VideoSection } from "./components/VideoSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CreativeIdeasSection } from "./components/CreativeIdeasSection";
import { AboutUs } from "./components/AboutUs";
import { ServicesAccordion } from "./components/ServicesAccordion";
import { Footer } from "./components/Footer";
import PaddedSection from "./components/PaddedSection";
import { ContactUs } from "./components/ContactUs";
import { Copyright } from "./components/Copyright";
import "../src/Assets/font/stylesheet.css";
import { DesignSwiper } from "./components/DesignSwiper";
import { ProductSwiper } from "./components/ProductSwiper";
function App() {
  return (
    <>
      <PaddedSection margin={"0px"} padding={"0px"}>
        <Header />
      </PaddedSection>

      <PaddedSection
        margin={"0px"}
        padding={"0px"}
        bordertop={"1px solid black"}
      >
        <VideoSection />
      </PaddedSection>
      {/** <Clients /> */}
      <WhyChooseUs text={"Why Choose Us"} />
      <PaddedSection>
        <CreativeIdeasSection />
      </PaddedSection>
      {/*<WhyChooseUs text={"About Us"} />*/}
      <PaddedSection>
        <AboutUs />
      </PaddedSection>
      <WhyChooseUs text={"Our Services"} />
      <PaddedSection>
        <ServicesAccordion />
      </PaddedSection>
      <WhyChooseUs text={"Our Work"} />
      <PaddedSection>
        {/** <OurWorkSection />*/}
        <DesignSwiper />
      </PaddedSection>
      <PaddedSection>
        <ProductSwiper />
      </PaddedSection>
      <WhyChooseUs text={"Contact Us"} />
      <PaddedSection>
        <ContactUs />
      </PaddedSection>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
