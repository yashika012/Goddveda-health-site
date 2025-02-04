import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Ingredients from "@/components/Ingredients";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonial";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Stats />
      <About />
      <Ingredients />
      <Timeline />
      <Testimonials />
      <FAQ />
      <Services />
      <Footer />
    </>
  );
}
